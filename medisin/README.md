# Pugg medisin

A flashcard pilot for the medical programme at the University of Oslo. Same drill
idea and visual language as the Portuguese decks in the repo root, but Norwegian
throughout — interface, questions and answers — and organised around the UiO
module structure (Oslo 2014).

Not linked from the Portuguese home page. Reach it directly at `/medisin/`.

## Structure

```
medisin/
  index.html          hub: deck picker, built from the data
  dagens.html         today's 20 cards, mixed across all decks
  anatomi.html …      one thin shell per deck
  drill.js            the whole engine, shared by every page
  drill.css           the styling, shared by every page
  data/*.js           one file per deck, each registering itself on window.MED_DECKS
```

Every page loads `drill.js` plus all six data files (they are small), so the deck
nav, the hub's card counts and the mixed daily set all read from one place and
cannot drift apart. Plain `<script>` tags, no modules and no build step — it
works over `file://` as well as over HTTP.

## Adding a card

Open the deck's file under `data/`, pick a `gruppe` that already exists in that
deck's `grupper`, and append:

```js
{ sp: 'Hvilken nerve innerverer m. deltoideus?',
  svar: [['n. axillaris', 'axillarisnerven']],
  gruppe: 'nerver',
  modul: 2,
  notat: 'Bare hvis det finnes en reell felle å advare om.',
  kilde: 'Antibiotika i primærhelsetjenesten, Helsedirektoratet' }
```

- **`svar`** holds one entry per answer that must be given. An entry is either a
  string, or `[kanonisk, ...også godtatt]` where the first element is what gets
  shown as the fasit.
- **More than one entry makes it a "nevn alle"-card**: the drill shows one slot
  per answer and the student fills them in any order.
- **`modul`** is the UiO module the card belongs to; it shows on the card.
- **`notat`** is optional and should be earned. Add it only when the card has a
  real trap — a Norway-specific guideline choice, a false friend, a threshold
  people mix up. Grammar-style narration of the obvious is noise.
- **`kilde`** is optional and appears under the note. Use it for anything taken
  from a guideline or a lab reference.
- **`batch`** is optional. Tag a fresh drop of cards with `current max + 1`, and
  the deck grows a "Bare nye kort" filter that drills only that drop. No deck has
  a batch yet, so the chip stays hidden until the first batched drop. Don't
  backfill it onto old cards.

## Answer matching

The engine is deliberately forgiving, because losing a card to a keyboard layout
teaches nothing:

- Latin abbreviations are optional and interchangeable — `n. medianus`,
  `nervus medianus` and `medianus` all match. A bare form is only accepted when
  it is unambiguous within the card, so `a. radialis` and `n. radialis` on the
  same card still have to be told apart.
- `æ ø å` may be typed as `ae o a`.
- Decimal commas and points are the same, as are all dash characters, so
  `3,6-5,0` matches `3.6 – 5.0`. Trailing zeros don't matter.
- Units are optional whenever the answer contains a number, since the unit is
  already in the question: `137-145` matches `137-145 mmol/L`.

## How a run behaves

- Right answer: the card leaves the run.
- Wrong answer: the card goes to the **back of the queue** and comes round again
  — the deck isn't finished until every card has actually been answered.
- `Vis fasit`: the card leaves the run, since the student chose to see it.
- Missed and revealed cards are remembered in `localStorage` per deck, and the
  `⚑ Vanskelige` chip drills just those on a later visit. Getting one right
  clears its flag.

## Sources

Antibiotic first choices follow Helsedirektoratet's *Nasjonal faglig retningslinje
for antibiotikabruk* (primærhelsetjenesten and sykehus), reference ranges follow
Fürst, vaccination cards follow FHI's barnevaksinasjonsprogram, and the atrial
fibrillation cards follow the 2024 ESC guideline. Cards that lean on a specific
source carry it in `kilde`.

This is a study aid, not a clinical reference.
