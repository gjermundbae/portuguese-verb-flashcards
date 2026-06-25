(function () {
  const style = document.createElement('style');
  style.textContent = '.card { scroll-margin-top: 0.75rem; }';
  document.head.appendChild(style);
})();

/** Brazilian Portuguese persons taught in verb drills (fixed order). */
const BR_PERSONS = [
  { key: 'eu', alt: 'eu' },
  { key: 'você', alt: 'voce' },
  { key: 'nós', alt: 'nos' },
  { key: 'vocês', alt: 'voces' },
];

/**
 * Expand compact verb entries into flat drill cards.
 * Each entry: { verb, group, batch?, note?, forms: [{ form, pron, meaning, example, alts? }] }
 * forms must be exactly 4, in BR_PERSONS order.
 */
function expandVerbEntries(entries) {
  const cards = [];
  for (const entry of entries) {
    const { verb, group, batch, note, forms } = entry;
    if (!forms || forms.length !== BR_PERSONS.length) {
      throw new Error(
        `Verb "${verb}": expected ${BR_PERSONS.length} forms, got ${forms?.length ?? 0}`
      );
    }
    forms.forEach((row, i) => {
      const person = BR_PERSONS[i];
      const conj = `${person.key} ${row.form}`;
      cards.push({
        verb,
        group,
        ...(batch != null ? { batch } : {}),
        ...(note ? { note } : {}),
        person: person.key,
        form: row.form,
        conj,
        pron: row.pron,
        meaning: row.meaning,
        example: row.example,
        ...(row.alts?.length ? { alts: row.alts } : {}),
      });
    });
  }
  return cards;
}

/** All normalized strings accepted for a verb conjugation answer. */
function getVerbAcceptedAnswers(card, normalize) {
  const accepted = new Set();
  const add = (s) => accepted.add(normalize(s));

  add(card.conj);
  add(card.form);

  const personMeta = BR_PERSONS.find((p) => p.key === card.person);
  if (personMeta?.alt && personMeta.alt !== personMeta.key) {
    add(`${personMeta.alt} ${card.form}`);
  }
  if (card.alts) {
    for (const alt of card.alts) add(alt);
  }
  return accepted;
}

function isVerbConjugationCorrect(card, input, normalize) {
  return getVerbAcceptedAnswers(card, normalize).has(normalize(input));
}

/** Focus the answer field and keep the card visible (mobile keyboard / innerHTML reset). */
function focusAnswerInput(input) {
  if (!input) return;
  const scrollTarget = input.closest('.card') || input;
  const scrollIntoView = () => {
    scrollTarget.scrollIntoView({ block: 'start', behavior: 'auto' });
  };

  input.focus({ preventScroll: true });
  requestAnimationFrame(scrollIntoView);
  setTimeout(scrollIntoView, 100);
  setTimeout(scrollIntoView, 350);

  if (window.visualViewport) {
    const onKeyboard = () => scrollIntoView();
    window.visualViewport.addEventListener('resize', onKeyboard);
    setTimeout(() => window.visualViewport.removeEventListener('resize', onKeyboard), 600);
  }
}
