---
name: add-flashcard
description: >-
  Add high-quality flashcards to the Learn Portuguese drill app (verbs, nouns,
  adjectives, adverbs, connecting words, numbers/dates, glossary, sentences).
  Use whenever the user asks to add, draft, propose, or review a card / phrase /
  word / verb / sentence for any of the practice pages, or asks how the card
  schemas / batch system / "Only new" filter work.
---

# Add a flashcard to the Learn Portuguese app

This project is a set of self-contained HTML drill pages for **everyday Brazilian Portuguese**, used by a learner living in **Rio de Janeiro**. Each page owns its card list and rendering. Cards must teach something real, with a translation and pronunciation you actually trust.

## Non-negotiables

1. **Brazilian Portuguese, Rio register.** Default to spoken BR (`você`, `tchau`, `legal`, etc.). Never silently use PT-PT forms (`tu falas`, `pequeno almoço`, `autocarro`). When a form differs across registers, prefer the one a `carioca` would actually say.
2. **Verify the translation.** If you are not certain a word/phrase is the one a native BR speaker would use here, say so and propose an alternative — do not ship it. "Probably right" is not good enough.
3. **Verify the pronunciation.** For files that carry `pronIpa` / `pronHint`, both fields must reflect the BR pronunciation. Do not use IPA, but write the pronunciation out.
4. **Notes are optional and earned, not decorative.** Add `note` ONLY when the card has a real teaching point the learner could otherwise miss: agreement gotcha, false friend, gender surprise, BR vs textbook difference, idiom. Never narrate obvious grammar ("X is a regular -ar verb: eu Xo, você Xa..." when nothing irregular is happening) — those notes are noise.
5. **One target per card.** Don't smuggle two new lessons into one phrase.
6. **Multiple valid answers → pick the everyday one, or accept both.** If several phrasings exist and only one is genuinely common in spoken BR, ship that one as canonical and don't list the rest. If two are both common (`pra` / `para a`; `assistir um filme` / `assistir a um filme`), accept both via the file's accept-multiple mechanism (`alts`, `slots`, etc. — see schema below).
7. **Honor the batch system.** Every new card gets `batch: <LATEST_BATCH>`. If you are starting a new logical drop, bump `LATEST_BATCH` by 1 first. See `Batch system` below.

## Workflow

1. **Identify the target file** from the topic:
   - Verbs (present): `index.html`
   - Verbs (pretérito perfeito): `passado.html`
   - Full sentences / phrases / constructions: `sentences.html`
   - Nouns: `nouns.html`
   - Adjectives: `adjectives.html`
   - Adverbs: `adverbs.html`
   - Prepositions / contractions / demonstratives / articles: `connecting.html`
   - Numbers, dates, weekdays, months, colors: `numbers_dates.html`
   - Discourse / connector glossary: `glossary.html`
2. **Read the file's `ALL_CARDS` (or `VERB_ENTRIES`) block** to see the live schema, `GROUPS`, and current `LATEST_BATCH`. Don't author from memory — schemas differ between files.
3. **Pick the right `group`** from that file's `GROUPS` array. Don't invent groups silently; if no group fits, surface it to the user before adding a new one.
4. **Decide the batch.** If your cards belong to the existing latest drop, reuse `LATEST_BATCH`. If this is a fresh, separate drop, bump `LATEST_BATCH` by 1 in the same edit.
5. **Draft each card** following the file's schema (see `Schemas by file` below). Keep canonical answers spoken-BR. Add `note` only if rule 4 above is met. Set `batch` directly on the card; `LATEST_BATCH` is derived and updates itself.
6. **If the file doesn't yet have batch-system UI**, retrofit it (see `Retrofitting the batch system`).
7. **Sanity-check** before finishing:
   - Translation: am I sure this is what a carioca would say?
   - Pronunciation (where applicable): does IPA match the hint?
   - Slot/alt expansion still ≤ `MAX_CARTESIAN` (sentences.html validates at load).
   - Group exists in `GROUPS`.
   - `batch` is set.

## Batch system

Cards can carry an optional `batch: <number>`. Each page derives `LATEST_BATCH` directly from the data:

```js
const LATEST_BATCH = Math.max(0, ...ALL_CARDS.map(c => c.batch ?? 0));
```

The "Only new …" filter button, when active, restricts the deck to cards with `batch === LATEST_BATCH`. This lets the learner drill **just** the newest drop without losing global review.

Rules:

- New cards in the same drop you're currently making → all share one batch number.
- A new drop = pick `current_max + 1` and tag every card in the drop with that number. `LATEST_BATCH` updates itself; **do not** edit the `LATEST_BATCH` line.
- Don't backfill `batch` on old cards. "No batch" is fine; they just won't show in "Only new …".
- If no card in the file has a `batch` yet, `LATEST_BATCH` evaluates to `0` and the "Only new …" filter is correctly empty until your first batched drop.

## Retrofitting the batch system

Pages with the batch system already wired: `index.html`, `sentences.html`. Pages retrofitted to the standard pattern below: `adjectives.html`, `adverbs.html`, `connecting.html`, `nouns.html`, `numbers_dates.html`. Pages still without it:

- `passado.html` — `expandVerbEntries` already propagates a `batch` field from `VERB_ENTRIES` (see `drill-common.js`), so adding the UI is straightforward: mirror `index.html`'s `LATEST_BATCH`, `showOnlyLatestBatch`, `getFilteredCards`, `toggleLatestBatch`, and append a "Only new verbs" tag in `renderFilters`. Skipped here only because of the daily-mode coupling — make sure the toggle doesn't fight `dailyMode`.
- `glossary.html` — has no filter row, no `.fc-tag` CSS, and no group filtering today. Retrofit requires adding the `.filters` / `.fc-tag` CSS block (copy from `nouns.html`), a `<div class="filters" id="filterRow"></div>` inside `#practiceChrome`, plus the standard JS plumbing. Worth doing on the next glossary drop.

Standard retrofit (for a "flat `ALL_CARDS`" page):

1. Add the constant + state next to `GROUPS` (must come **after** `const ALL_CARDS = [...]`):
   ```js
   const LATEST_BATCH = Math.max(0, ...ALL_CARDS.map(c => c.batch ?? 0));
   let activeGroups = new Set(GROUPS);
   let showOnlyLatestBatch = false;
   ```
2. Replace the inline filter in `buildDeck` with a helper:
   ```js
   function getFilteredCards() {
     return ALL_CARDS.filter(card =>
       activeGroups.has(card.group) &&
       (!showOnlyLatestBatch || card.batch === LATEST_BATCH)
     );
   }

   function buildDeck() {
     deck = shuffle(getFilteredCards());
     // …rest unchanged
   }
   ```
3. Append the toggle button to `renderFilters` (append, don't replace, the existing group tags):
   ```js
   const latestTag = `<button class="fc-tag ${showOnlyLatestBatch ? "active" : ""}" onclick="toggleLatestBatch()">Only new <thing></button>`;
   row.innerHTML = groupTags + latestTag;
   ```
   Use the file's existing tag markup style (`<button class="fc-tag …">` for adjectives/adverbs/nouns/sentences; `<div class="fc-tag …">` for connecting/numbers_dates/index/passado). Match the surrounding code — don't mix styles.
4. Add `toggleLatestBatch`:
   ```js
   function toggleLatestBatch() {
     showOnlyLatestBatch = !showOnlyLatestBatch;
     renderFilters();
     buildDeck();
   }
   ```
5. The "no cards match" empty state can stay as-is or be conditioned on `showOnlyLatestBatch` for a clearer message — optional polish.

## Schemas by file

Read the file before authoring; this is the quick reference.

### `sentences.html`
```js
{ en: "I drink water.",
  pt: "Eu bebo água.",
  group: "Present basics",         // ∈ GROUPS
  batch: 2,                        // optional, = LATEST_BATCH for new drops
  note: "Only if there's a real gotcha." }
```
With variants:
```js
{ en: "I am Brazilian.",
  pt: "Eu sou {gender_br}.",
  slots: { gender_br: ["brasileiro", "brasileira"] },  // first = canonical
  group: "Ser vs Estar" }
```


### `nouns.html`
```js
{ en: "the friend",
  pt: "o amigo",
  alts: ["a amiga"],               // optional, also-accepted full answers
  article: "o",
  noun: "amigo",
  gender: "masculine",             // "masculine" | "feminine"
  pronIpa: "[u a'migu]",
  pronHint: "oo ah-MEE-goo",
  example: "O amigo mora perto daqui.",
  exampleEn: "The friend lives near here.",
  group: "people",                 // ∈ GROUPS
  batch: 1,                        // optional
  note: "Only if needed." }
```
- The drill blanks the noun inside `example`, so `example` MUST contain `pt` (or `noun`) verbatim, case-insensitive.

### `adjectives.html`
```js
{ en: "good",
  pt: "bom",
  alts: ["boa"],                   // feminine form when it changes
  agreement: "fem.: boa",          // or "same form"
  pronIpa: "[bõ]",
  pronHint: "BOHNG",
  example: "A comida aqui é boa.",
  exampleEn: "The food here is good.",
  group: "quality",
  batch: 1 }
```

### `adverbs.html`
Same shape as adjectives but without `agreement` / `alts` for most entries (adverbs don't agree). Check the file for the live shape before adding.

### `connecting.html`
Prepositions, contractions, demonstratives, articles. Read the file — the schema includes example sentences and uses the same `example` / `exampleEn` / `pronIpa` / `pronHint` pattern as nouns.

### `numbers_dates.html`
Cardinal/ordinal numbers, weekdays, months, colors. Read the file — group labels live in `GROUP_LABELS`.

### `glossary.html`
Connector / discourse glossary cards. Read the file before adding.

### `index.html` (verbs, present)
```js
const VERB_ENTRIES = [
  { verb: "falar",
    group: "-ar verbs",
    batch: 1,                      // propagates to every expanded form
    forms: [
      { form: "falo",   pron: "FAH-loo",   meaning: "I speak / talk",   example: "Eu falo português todo dia." },
      { form: "fala",   pron: "FAH-lah",   meaning: "you speak / talk", example: "Você fala muito rápido!" },
      { form: "falamos",pron: "fah-LAH-moosh", meaning: "we speak / talk", example: "Nós falamos no telefone ontem." },
      { form: "falam",  pron: "FAH-lowng", meaning: "they / you all speak", example: "Eles falam várias línguas." }
    ] }
];
```
- Always provide all 4 BR persons in this order: `eu`, `você`, `nós`, `vocês/eles`. The `expandVerbEntries` helper enforces 4.
- `batch` on the entry propagates to every generated card automatically.

### `passado.html` (verbs, pretérito perfeito)
Same `VERB_ENTRIES` shape as `index.html`. Persons: `eu`, `você`, `nós`, `vocês`.

## Note-writing checklist

A `note` should answer **"what would trip me up here?"**. If you can't name the trip-up in one sentence, delete the note. BE CAUTIOUS OF USING NOTES! If you are uncertain - don't add a note.

Good triggers:
- Contraction the learner must internalize (`em + o = no`, `de + a = da`).
- Ser vs estar pivot the canonical form depends on.
- Adjective/article agreement that surprises (`pessoa` is always feminine; `problema` is masculine).
- Common spoken-BR shortcut the learner will hear (`pra`, `tá`, `tô`, `cê`).

Bad triggers (skip the note):
- "X is a regular -ar verb: eu Xo, você Xa, nós Xamos…" (no surprise, no value).
- Restating the English meaning.
- Generic encouragement / context the learner already knows.
- Tagging the obvious gender of a transparent `-o`/`-a` ending.
- Repeated notes 

## Multiple-answer policy

Order of preference:
1. **One canonical, common spoken-BR answer.** Default.
2. **Two genuine variants** → use the file's accept-multiple mechanism:
   - `sentences.html`: `slots: { id: ["variantA", "variantB"] }` (first = canonical shown).
   - Noun/adjective/adverb-style files: `alts: ["other_form"]` (canonical = `pt`).
3. **A note explaining the choice** if and only if the learner could be confused (e.g. "prescriptive `chegar a` exists but spoken BR overwhelmingly says `chegar em`").

We are learning everyday carioca Portuguese, not preparing for a grammar exam. When in doubt, ship the form you'd actually hear at the `padaria`, and skip the academic alternative (use 'faz 10 minutos',not  'há 10 minutos' because that is accepted as the most used spoken way in Rio).

## Anti-patterns

- Adding a card without reading the target file's current schema.
- Padding `note` with grammar narration the learner doesn't need.
- Inventing a new `group` instead of using existing `GROUPS`.
- Forgetting `batch` on a new card (the "Only new" filter will miss it).
- Editing `LATEST_BATCH` by hand — it's derived from the data; touch `batch` on the cards instead.
- Using `tu` conjugations or PT-PT vocabulary as canonical.
- Listing every theoretical synonym in `alts` / `slots`. Keep accepted answers to what's actually common.
- Backfilling `batch` on existing cards to "be tidy" — leave them alone.

## After editing

- List the cards you added. Keep all other noise brief.
