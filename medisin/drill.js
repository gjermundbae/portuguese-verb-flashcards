/* Shared drill engine for the medicine decks.
 *
 * Every page loads all data files (they are small) and then calls
 * MedDrill.start("anatomi") or MedDrill.startDaily(20). The decks register
 * themselves on window.MED_DECKS, so the deck nav, the hub counts and the
 * mixed daily set all read from one place.
 *
 * Card shape:
 *   { sp:   "Hvilken nerve innerverer m. deltoideus?",
 *     svar: ["n. axillaris"],        // one entry per answer that must be given.
 *                                    // An entry may be [kanonisk, ...godtatt].
 *     gruppe: "nerver",              // must be in the deck's `grupper`
 *     modul: 2,                      // UiO-modul the card belongs to
 *     hint:  "…",                    // optional, replaces the line under the question
 *     notat: "…",                    // optional teaching point, shown after answering
 *     kilde: "…",                    // optional source, shown with the note
 *     batch: 1 }                     // optional, drives the "Bare nye kort" filter
 */

window.MED_DECKS = window.MED_DECKS || {};

const MedDrill = (function () {

  /* ------------------------------------------------------------------ *
   * Answer matching
   * ------------------------------------------------------------------ */

  /* Latin anatomical words collapse onto their abbreviation, so "nervus
     axillaris", "n. axillaris" and "N axillaris" all count as the same answer. */
  const LATIN_WORDS = {
    nervus: 'n', nervi: 'n', nn: 'n',
    musculus: 'm', musculi: 'm', mm: 'm',
    arteria: 'a', arteriae: 'a', aa: 'a',
    vena: 'v', venae: 'v', vv: 'v',
    ligamentum: 'lig', ligamenta: 'lig', ligg: 'lig',
    ramus: 'r', rami: 'r', rr: 'r',
    glandula: 'gl',
    processus: 'proc',
    articulatio: 'art', articulationes: 'art',
    ossa: 'os',
    tendo: 'tend',
  };

  const LATIN_PREFIXES = ['n', 'm', 'a', 'v', 'lig', 'r', 'gl', 'proc', 'art', 'os', 'tend'];

  /* Units are already given in the question, so typing them is optional: "137-145" and
     "137-145 mmol/L" are the same answer. Only stripped from answers that contain a
     number, so ordinary words are never touched. */
  const UNIT_WORDS = new Set([
    'mmol/l', 'mmol', 'mmol/mol', 'umol/l', 'umol', 'mikromol/l', 'nmol/l', 'pmol/l',
    'g/dl', 'g/l', 'mg/l', 'mg/dl', 'ug/l', 'mikrogram', 'mg', 'g', 'kg',
    'u/l', 'mu/l', 'miu/l', 'mie/l', 'ie/l',
    'kpa', 'mmhg', 'ml', 'l', 'liter', 'dl', 'ml/min', 'ml/kg/t', 'ml/kg/time',
    's', 'sek', 'sekund', 'sekunder', 'ms', 'min', 'minutt', 'minutter', 'time', 'timer',
    'dogn', 'ar', 'uke', 'uker', 'kcal', 'poeng', 'prosent', '%',
    'c', 'celsius', 'grader', 'slag/min', 'celler/ul',
    'x10e9/l', '10e9/l', 'x109/l', '109/l',
  ]);

  /* Answers are compared on a forgiving normal form: æøå may be typed as
     ae/o/a, decimal commas as points, and 3,6–5,0 as 3.6-5. Nobody should lose
     a card to a keyboard layout. */
  function normalize(value) {
    let s = String(value == null ? '' : value).toLowerCase().trim();

    s = s.replace(/\u00e6/g, 'ae').replace(/\u00f8/g, 'o').replace(/\u00e5/g, 'a')
         .replace(/\u00e4/g, 'a').replace(/\u00f6/g, 'o').replace(/\u00fc/g, 'u')
         .normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    s = s.replace(/[\u2010-\u2015\u2212]/g, '-');          // any dash -> hyphen
    s = s.replace(/(\d)\s*[,.]\s*(\d)/g, '$1\u0001$2');    // shield decimal separators
    s = s.replace(/[.,;:!?()[\]{}"'`\u00b4\u00b0]/g, ' ');  // drop decorative punctuation
    s = s.replace(/\u0001/g, '.');                          // and put the decimals back
    s = s.replace(/\s*\/\s*/g, '/');
    s = s.replace(/\s*-\s*/g, '-');
    s = s.replace(/\s*[x\u00d7*]\s*(?=\d)/g, 'x');          // "500 mg x 3" == "500 mg x3"
    s = s.replace(/\s*%/g, '');                             // "40 %" == "40" == "40%"
    s = s.replace(/\s+/g, ' ').trim();

    s = s.split(' ').map(w => LATIN_WORDS[w] || w).join(' ');
    s = s.replace(/\d+\.\d+|\d+/g, m => String(parseFloat(m)));  // 5,0 == 5

    if (/\d/.test(s)) {
      s = s.split(' ').filter(w => !UNIT_WORDS.has(w)).join(' ').trim();
    }

    return s;
  }

  /* Every string that counts as this one answer. A leading Latin abbreviation is
     optional — "hvilken nerve …" already told you it is a nerve. */
  function formsFor(entry) {
    const list = Array.isArray(entry) ? entry : [entry];
    const forms = new Set();
    const bare = new Set();

    for (const variant of list) {
      const n = normalize(variant);
      if (!n) continue;
      forms.add(n);
      const stripped = n.match(/^(\S+) (.+)$/);
      if (stripped && LATIN_PREFIXES.includes(stripped[1])) bare.add(stripped[2]);
    }
    return { canonical: list[0], forms, bare };
  }

  /* One spec per required answer. On "nevn alle"-cards a bare form is only
     accepted if it is unambiguous across the card — otherwise "radialis" could
     mean either a. radialis or n. radialis. */
  function answerSpecs(card) {
    const specs = card.svar.map(formsFor);
    const bareCount = {};
    specs.forEach(spec => spec.bare.forEach(f => { bareCount[f] = (bareCount[f] || 0) + 1; }));

    return specs.map(spec => {
      const forms = new Set(spec.forms);
      spec.bare.forEach(f => { if (bareCount[f] === 1 && !forms.has(f)) forms.add(f); });
      return { canonical: spec.canonical, forms };
    });
  }

  /* ------------------------------------------------------------------ *
   * Progress kept between visits
   * ------------------------------------------------------------------ */

  /* Cards you got wrong or had to look up, so "Vanskelige kort" can bring them
     back on the next visit. Keyed on the question text — stable as long as the
     wording is. Cards you merely skipped are not flagged: you never claimed
     not to know them. */
  function readMisses(deckId) {
    try { return JSON.parse(localStorage.getItem('medMiss:' + deckId)) || {}; }
    catch (e) { return {}; }
  }

  function writeMisses(deckId, misses) {
    try { localStorage.setItem('medMiss:' + deckId, JSON.stringify(misses)); }
    catch (e) { /* private mode — drilling still works, it just won't remember */ }
  }

  function recordMiss(card) {
    const deckId = card._deck || state.deck.id;
    const misses = readMisses(deckId);
    misses[card.sp] = (misses[card.sp] || 0) + 1;
    writeMisses(deckId, misses);
  }

  function clearMiss(card) {
    const deckId = card._deck || state.deck.id;
    const misses = readMisses(deckId);
    if (!(card.sp in misses)) return;
    delete misses[card.sp];
    writeMisses(deckId, misses);
  }

  function hardCount(deck) {
    const misses = readMisses(deck.id);
    return deck.kort.filter(c => misses[c.sp]).length;
  }

  function markPractised(deckId) {
    try { localStorage.setItem('medSist:' + deckId, new Date().toISOString().slice(0, 10)); }
    catch (e) { /* ignore */ }
  }

  function lastPractised(deckId) {
    try { return localStorage.getItem('medSist:' + deckId); }
    catch (e) { return null; }
  }

  /* ------------------------------------------------------------------ *
   * State
   * ------------------------------------------------------------------ */

  /* The run is a queue, not a fixed list with a cursor: the card on screen is
     always queue[0]. Get it right and it leaves the queue; get it wrong and it
     goes to the back, so it comes round again before the deck is finished. */
  const state = {
    deck: null,
    groups: new Set(),
    onlyLatest: false,
    onlyHard: false,
    queue: [],
    total: 0,
    shown: null,      // the card currently rendered, held separately from the queue
    answered: false,
    filled: [],       // per-answer: filled or not, on "nevn alle"-cards
    errorsOnCard: false,
    missedInRun: new Set(),
    stats: { firstTry: 0, errors: 0, revealed: 0, skipped: 0 },
  };

  /* ------------------------------------------------------------------ *
   * Helpers
   * ------------------------------------------------------------------ */

  function esc(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function shuffle(arr, rand) {
    const out = [...arr];
    const r = rand || Math.random;
    for (let i = out.length - 1; i > 0; i--) {
      const j = Math.floor(r() * (i + 1));
      [out[i], out[j]] = [out[j], out[i]];
    }
    return out;
  }

  /* Deterministic per-day shuffle, so "Dagens kort" is the same set all day and
     a different set tomorrow. */
  function seededRandom(seed) {
    let h = 2166136261;
    for (let i = 0; i < seed.length; i++) {
      h ^= seed.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return function () {
      h += 0x6D2B79F5;
      let t = h;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function focusInput(input) {
    if (!input) return;
    const target = input.closest('.card') || input;
    const keepVisible = () => target.scrollIntoView({ block: 'start', behavior: 'auto' });
    input.focus({ preventScroll: true });
    requestAnimationFrame(keepVisible);
    setTimeout(keepVisible, 100);
  }

  function el(id) { return document.getElementById(id); }

  /* ------------------------------------------------------------------ *
   * Filters
   * ------------------------------------------------------------------ */

  function latestBatch(deck) {
    return Math.max(0, ...deck.kort.map(c => c.batch || 0));
  }

  function filteredCards() {
    const deck = state.deck;
    const latest = latestBatch(deck);
    const misses = readMisses(deck.id);
    return deck.kort.filter(card =>
      state.groups.has(card.gruppe) &&
      (!state.onlyLatest || (card.batch || 0) === latest) &&
      (!state.onlyHard || misses[card.sp])
    );
  }

  function groupCounts() {
    const deck = state.deck;
    const latest = latestBatch(deck);
    const misses = readMisses(deck.id);
    const counts = {};
    deck.grupper.forEach(g => { counts[g] = 0; });
    deck.kort.forEach(card => {
      if (state.onlyLatest && (card.batch || 0) !== latest) return;
      if (state.onlyHard && !misses[card.sp]) return;
      if (counts[card.gruppe] !== undefined) counts[card.gruppe]++;
    });
    return counts;
  }

  function renderFilters() {
    const row = el('filterRow');
    if (!row) return;
    const deck = state.deck;
    const counts = groupCounts();
    const allOn = deck.grupper.every(g => !counts[g] || state.groups.has(g));

    let html = `<button class="fc-tag all-chip ${allOn ? 'active' : ''}" data-act="all">Alle</button>`;

    html += deck.grupper.map(group => {
      const empty = !counts[group];
      const cls = ['fc-tag'];
      if (!empty && state.groups.has(group)) cls.push('active');
      if (empty) cls.push('disabled');
      return `<button class="${cls.join(' ')}" data-act="group" data-group="${esc(group)}">` +
             `${esc(group)}<span class="chip-count">${counts[group] || 0}</span></button>`;
    }).join('');

    if (latestBatch(deck) > 0) {
      html += `<button class="fc-tag ${state.onlyLatest ? 'active' : ''}" data-act="latest">Bare nye kort</button>`;
    }

    const hard = hardCount(deck);
    if (hard > 0 || state.onlyHard) {
      html += `<button class="fc-tag hard-chip ${state.onlyHard ? 'active' : ''}" data-act="hard">` +
              `&#9873; Vanskelige<span class="chip-count">${hard}</span></button>`;
    }

    row.innerHTML = html;
  }

  function onFilterClick(event) {
    const btn = event.target.closest('.fc-tag');
    if (!btn) return;
    const act = btn.dataset.act;

    if (act === 'all') {
      state.groups = new Set(state.deck.grupper);
    } else if (act === 'group') {
      const group = btn.dataset.group;
      if (state.groups.has(group)) {
        if (state.groups.size === 1) return;
        state.groups.delete(group);
      } else {
        state.groups.add(group);
      }
    } else if (act === 'latest') {
      state.onlyLatest = !state.onlyLatest;
    } else if (act === 'hard') {
      state.onlyHard = !state.onlyHard;
    } else {
      return;
    }

    renderFilters();
    buildRun();
  }

  /* ------------------------------------------------------------------ *
   * Run
   * ------------------------------------------------------------------ */

  function buildRun() {
    state.queue = shuffle(filteredCards());
    state.total = state.queue.length;
    state.shown = null;
    state.answered = false;
    state.errorsOnCard = false;
    state.missedInRun = new Set();
    state.stats = { firstTry: 0, errors: 0, revealed: 0, skipped: 0 };
    render();
  }

  /** Card cleared — off the queue for good. */
  function clearFromQueue() {
    state.queue.shift();
    updateStats();
  }

  /** Card missed — back of the queue, so you meet it again before you are done. */
  function moveToBackOfQueue() {
    state.queue.push(state.queue.shift());
    updateStats();
  }

  function updateStats() {
    const left = state.queue.length;
    const done = state.total - left;
    const pct = state.total > 0 ? Math.round((done / state.total) * 100) : 0;

    el('statTotal').textContent = state.total;
    el('statKnown').textContent = done;
    el('statLeft').textContent = left;
    el('progressBar').style.width = pct + '%';
    el('progressPct').textContent = pct + '%';
  }

  function subLine(card, specs) {
    if (card.hint) return card.hint;
    if (specs.length > 1) return `Nevn alle ${specs.length} — ett og ett`;
    return 'Skriv svaret';
  }

  function slotsHtml(specs) {
    if (specs.length < 2) return '';
    const rows = specs.map((_, i) =>
      `<div class="slot" id="slot${i}"><span class="slot-n">${i + 1}</span><span id="slotText${i}">&nbsp;</span></div>`
    ).join('');
    return `<div class="slot-count" id="slotCount">0 av ${specs.length}</div><div class="slots">${rows}</div>`;
  }

  function noteHtml(card) {
    if (!card.notat && !card.kilde) return '';
    const kilde = card.kilde ? `<span class="kilde">${esc(card.kilde)}</span>` : '';
    const text = card.notat ? esc(card.notat) : '';
    return `<div class="tip">${text}${kilde}</div>`;
  }

  function render() {
    updateStats();
    const area = el('cardArea');

    if (state.total === 0) {
      const why = state.onlyHard
        ? 'Ingen kort er merket som vanskelige ennå — de dukker opp her når du bommer på noe.'
        : 'Skru på minst én gruppe for å fortsette.';
      area.innerHTML = `<div class="card done-screen"><h2>Ingen kort her</h2><p>${why}</p></div>`;
      return;
    }

    if (state.queue.length === 0) {
      markPractised(state.deck.id);
      const { firstTry, errors, revealed, skipped } = state.stats;
      const clean = errors === 0 && revealed === 0 && skipped === 0;
      const summary = clean
        ? `Du tok alle ${state.total} kortene på første forsøk.`
        : `Du kom gjennom alle ${state.total} kortene.` +
          (skipped ? ` ${skipped} hoppet du over.` : '');
      area.innerHTML = `
        <div class="card done-screen">
          <h2>${clean ? 'Blankt!' : 'Bunken er ferdig'}</h2>
          <p>${summary}</p>
          <div class="result-stats">
            <div class="result-stat">
              <div class="result-stat-num green">${firstTry}</div>
              <div class="result-stat-lbl">Rett på første</div>
            </div>
            <div class="result-stat">
              <div class="result-stat-num red">${errors + revealed}</div>
              <div class="result-stat-lbl">Bommet / vist fasit</div>
            </div>
          </div>
          <button class="ctrl-btn" data-act="restart" style="font-size:0.8rem;padding:0.6rem 1.4rem;">Kjør igjen &#8635;</button>
        </div>
      `;
      area.querySelector('[data-act="restart"]').addEventListener('click', buildRun);
      return;
    }

    const card = state.queue[0];
    state.shown = card;
    const specs = answerSpecs(card);
    state.filled = specs.map(() => false);
    state.errorsOnCard = false;
    state.answered = false;

    const modul = card.modul ? `<span class="modul">Modul ${esc(card.modul)}</span>` : '';
    const gruppe = card._undergruppe
      ? `${esc(card.gruppe)} &middot; ${esc(card._undergruppe)}`
      : esc(card.gruppe);

    area.innerHTML = `
      <div class="card">
        <div class="card-meta"><span>${gruppe}</span>${modul}</div>
        <div class="card-q">${esc(card.sp)}</div>
        <div class="card-sub">${esc(subLine(card, specs))}</div>
        ${slotsHtml(specs)}
        <div class="input-row">
          <input class="answer-input" id="answerInput" type="text" placeholder="skriv her…"
                 autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />
          <button class="check-btn" id="actionBtn">&rarr;</button>
        </div>
        <div class="feedback" id="feedback"></div>
        <div id="revealArea"></div>
      </div>
      <div class="controls">
        <button class="ctrl-btn" id="revealBtn">Vis fasit</button>
        <button class="ctrl-btn" id="skipBtn">Hopp over &rarr;</button>
        <button class="ctrl-btn" id="restartBtn">Start på nytt &#8635;</button>
      </div>
    `;

    el('actionBtn').addEventListener('click', handleAction);
    el('revealBtn').addEventListener('click', handleReveal);
    el('skipBtn').addEventListener('click', skipCard);
    el('restartBtn').addEventListener('click', buildRun);

    const input = el('answerInput');
    input.addEventListener('keydown', e => { if (e.key === 'Enter') handleAction(); });
    focusInput(input);
  }

  function handleAction() {
    if (state.answered) { nextCard(); return; }
    checkAnswer();
  }

  function fasit(specs) {
    return specs.map(s => `<strong>${esc(s.canonical)}</strong>`).join(specs.length > 1 ? ' &middot; ' : ' / ');
  }

  /* Settle the card on screen.
       ok:       true = green, false = red, null = neutral (you asked to see it)
       cleared:  true leaves the run, false goes to the back of the queue
       flagHard: true records it, false clears it, undefined leaves it alone
     A card you got wrong is requeued, so the deck is not finished until you
     have actually answered it. */
  function finishCard(card, { ok, cleared, flagHard }) {
    state.answered = true;
    const input = el('answerInput');
    const button = el('actionBtn');
    input.disabled = true;
    if (ok !== null) {
      input.classList.add(ok ? 'correct' : 'wrong');
      button.classList.add(ok ? 'go-green' : 'go-red');
    }
    el('revealArea').innerHTML = noteHtml(card);

    // "Vis fasit" becomes the way forward. "Hopp over" stays live: having seen
    // the answer is no reason to be stuck with the card.
    const reveal = el('revealBtn');
    if (reveal) reveal.innerHTML = 'Neste &rarr;';

    if (flagHard === true) recordMiss(card);
    else if (flagHard === false) clearMiss(card);
    if (cleared) clearFromQueue(); else moveToBackOfQueue();

    setTimeout(() => button.focus(), 0);
  }

  /** Text for the badge that promises a requeued card will be back. */
  function againBadge() {
    return state.queue.length > 1 ? ' <span class="again">kommer igjen senere</span>' : '';
  }

  function checkAnswer() {
    const card = state.shown;
    const specs = answerSpecs(card);
    const input = el('answerInput');
    const feedback = el('feedback');
    const given = normalize(input.value);
    if (!given) return;

    const hit = specs.findIndex((spec, i) => !state.filled[i] && spec.forms.has(given));

    /* Single answer: right and it is done, wrong and it goes to the back. */
    if (specs.length === 1) {
      if (hit === 0) {
        if (!state.missedInRun.has(card.sp)) state.stats.firstTry++;
        feedback.className = 'feedback ok';
        feedback.innerHTML = `&#10003; Riktig — ${fasit(specs)}`;
        finishCard(card, { ok: true, cleared: true, flagHard: false });
      } else {
        state.stats.errors++;
        state.missedInRun.add(card.sp);
        feedback.className = 'feedback err';
        feedback.innerHTML = `&#10007; Fasit: ${fasit(specs)}${againBadge()}`;
        input.classList.add('shake');
        setTimeout(() => input.classList.remove('shake'), 400);
        finishCard(card, { ok: false, cleared: false, flagHard: true });
      }
      return;
    }

    /* "Nevn alle": keep going until every slot is filled. */
    if (hit === -1) {
      const alreadyGiven = specs.some(spec => spec.forms.has(given));
      state.errorsOnCard = true;
      feedback.className = 'feedback err';
      feedback.innerHTML = alreadyGiven
        ? '&#10007; Den har du alt — ta en av de andre.'
        : '&#10007; Ikke på listen. Prøv en annen.';
      input.classList.add('shake');
      setTimeout(() => { input.classList.remove('shake'); input.value = ''; }, 400);
      return;
    }

    state.filled[hit] = true;
    const slot = el('slot' + hit);
    slot.classList.add('filled');
    el('slotText' + hit).textContent = specs[hit].canonical;
    input.value = '';

    const count = state.filled.filter(Boolean).length;
    el('slotCount').textContent = `${count} av ${specs.length}`;

    if (count < specs.length) {
      feedback.className = 'feedback ok';
      feedback.innerHTML = `&#10003; ${esc(specs[hit].canonical)} — ${specs.length - count} igjen`;
      return;
    }

    const clean = !state.errorsOnCard;
    state.errorsOnCard = false;
    if (clean && !state.missedInRun.has(card.sp)) state.stats.firstTry++;
    if (!clean) { state.stats.errors++; state.missedInRun.add(card.sp); }
    feedback.className = 'feedback ok';
    feedback.innerHTML = clean ? '&#10003; Alle på plass.' : '&#10003; Alle på plass — men det tok noen forsøk.';
    // You did produce every answer, so the card is cleared either way — a fumble
    // is remembered through the hard-card flag instead of by requeueing.
    finishCard(card, { ok: clean, cleared: true, flagHard: !clean });
  }

  /* "Vis fasit" before answering, "Neste" once the card is settled. */
  function handleReveal() {
    if (state.answered) { nextCard(); return; }
    revealAnswer();
  }

  /* You asked to be told. The card goes to the back of the queue, so you meet it
     again in the same run rather than getting away with having looked. */
  function revealAnswer() {
    const card = state.shown;
    const specs = answerSpecs(card);
    const feedback = el('feedback');

    specs.forEach((spec, i) => {
      if (state.filled[i]) return;
      const slot = el('slot' + i);
      if (!slot) return;
      slot.classList.add('revealed');
      el('slotText' + i).textContent = spec.canonical;
    });

    state.stats.revealed++;
    state.missedInRun.add(card.sp);
    state.errorsOnCard = false;
    feedback.className = 'feedback err';
    feedback.innerHTML = `Fasit: ${fasit(specs)}${againBadge()}`;
    finishCard(card, { ok: null, cleared: false, flagHard: true });
  }

  /* "Hopp over" — take the card out of the run, and not flagged as difficult,
     since you never claimed not to know it. Works after "Vis fasit" too: if you
     don't want to see the card again, having read the answer shouldn't trap you
     with it. A card you already answered is gone from the queue anyway, so there
     the button simply moves on. */
  function skipCard() {
    const card = state.shown;
    if (!card) return;

    const at = state.queue.indexOf(card);
    if (at !== -1) {
      state.queue.splice(at, 1);
      state.stats.skipped++;
      updateStats();
    }

    state.errorsOnCard = false;
    state.answered = false;
    render();
  }

  /* The queue was already advanced when the card was settled, so moving on is
     just a re-render of whatever is now at the front. */
  function nextCard() {
    state.answered = false;
    render();
  }

  /* ------------------------------------------------------------------ *
   * Public API
   * ------------------------------------------------------------------ */

  function chromeHtml() {
    return `
      <div class="filters" id="filterRow"></div>
      <div class="stats">
        <div class="stat"><div class="stat-num" id="statTotal">0</div><div class="stat-lbl">Kort</div></div>
        <div class="stat"><div class="stat-num green" id="statKnown">0</div><div class="stat-lbl">Tatt</div></div>
        <div class="stat"><div class="stat-num red" id="statLeft">0</div><div class="stat-lbl">Igjen</div></div>
      </div>
      <div class="progress-row">
        <div class="progress-bg"><div class="progress-fill" id="progressBar" style="width:0%"></div></div>
        <span class="progress-pct" id="progressPct">0%</span>
      </div>
    `;
  }

  function mount(deck) {
    state.deck = deck;
    state.groups = new Set(deck.grupper);
    state.onlyLatest = false;
    state.onlyHard = false;

    const note = el('deckNote');
    if (note) note.innerHTML = deck.merknad ? `<div class="deck-note">${deck.merknad}</div>` : '';

    el('practiceChrome').innerHTML = chromeHtml();
    el('filterRow').addEventListener('click', onFilterClick);
    renderFilters();
    buildRun();
  }

  /** Run one registered deck. */
  function start(deckId) {
    const deck = window.MED_DECKS[deckId];
    if (!deck) throw new Error('Ukjent bunke: ' + deckId);
    mount(deck);
  }

  /** Today's mixed set, drawn evenly across the decks and stable for the day. */
  function startDaily(size) {
    const n = size || 20;
    const today = new Date().toISOString().slice(0, 10);
    const decks = Object.values(window.MED_DECKS);
    const rand = seededRandom(today);

    // Round-robin over shuffled decks so one big deck can't take the whole day.
    const pools = shuffle(decks, rand).map(deck => ({
      deck,
      kort: shuffle(deck.kort, rand),
    }));

    const picked = [];
    let i = 0;
    while (picked.length < n && pools.some(p => p.kort.length)) {
      const pool = pools[i % pools.length];
      i++;
      const card = pool.kort.pop();
      if (!card) continue;
      picked.push({
        ...card,
        _deck: pool.deck.id,
        _undergruppe: card.gruppe,
        gruppe: pool.deck.navn,   // the deck becomes the filter chip
      });
    }

    mount({
      id: 'dagens',
      navn: 'Dagens kort',
      grupper: decks.map(d => d.navn),
      kort: shuffle(picked, rand),
    });
  }

  /** Deck nav shared by every page, so no page hand-maintains the link row. */
  function renderNav(activeId) {
    const nav = document.querySelector('[data-med-nav]');
    if (!nav) return;
    const entries = [{ id: 'dagens', nav: 'dagens', href: 'dagens.html' }].concat(
      Object.values(window.MED_DECKS).map(deck => ({
        id: deck.id,
        nav: deck.nav || deck.navn.toLowerCase(),
        href: deck.id + '.html',
      }))
    );
    const links = entries.map(entry =>
      `<a href="${entry.href}" class="${entry.id === activeId ? 'active' : ''}">${esc(entry.nav)}</a>`
    ).join(' &middot; ');
    nav.innerHTML =
      `<a class="home-link" href="index.html">&larr; alle bunker</a><span class="nav-div"></span>${links}`;
  }

  return {
    start, startDaily, renderNav,
    normalize, answerSpecs,        // exported so card data can be validated
    hardCount, lastPractised, latestBatch,
  };
})();
