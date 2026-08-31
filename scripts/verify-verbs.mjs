#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

const BR_PERSONS = [
  { key: 'eu', alt: 'eu' },
  { key: 'você', alt: 'voce' },
  { key: 'nós', alt: 'nos' },
  { key: 'vocês', alt: 'voces' },
];

function expandVerbEntries(entries) {
  const cards = [];
  for (const entry of entries) {
    const { verb, group, batch, forms } = entry;
    if (forms.length !== BR_PERSONS.length) {
      throw new Error(`${verb}: expected 4 forms, got ${forms.length}`);
    }
    forms.forEach((row, i) => {
      const person = BR_PERSONS[i];
      cards.push({
        verb,
        group,
        person: person.key,
        form: row.form,
        conj: `${person.key} ${row.form}`,
      });
    });
  }
  return cards;
}

function extractEntries(html) {
  const m = html.match(/const VERB_ENTRIES = (\[[\s\S]*?\]);/);
  if (!m) throw new Error('VERB_ENTRIES not found');
  return eval(m[1]);
}

for (const file of ['presente.html', 'passado.html']) {
  const entries = extractEntries(fs.readFileSync(path.join(root, file), 'utf8'));
  const cards = expandVerbEntries(entries);
  console.log(`${file}: ${entries.length} verbs → ${cards.length} cards`);
}
