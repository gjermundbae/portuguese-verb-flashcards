#!/usr/bin/env node
/**
 * One-off: read flat ALL_CARDS from presente.html / passado.html and emit compact VERB_ENTRIES.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const PERSONS = ['eu', 'você', 'nós', 'vocês'];

const CARD_RE =
  /\{\s*verb:"([^"]+)",\s*conj:"([^"]+)",\s*pron:"([^"]*)",\s*meaning:"((?:\\.|[^"\\])*)",\s*example:"((?:\\.|[^"\\])*)",\s*group:"([^"]+)"(?:,\s*batch:(\d+))?\s*\}/g;

function splitConj(conj) {
  for (const p of PERSONS) {
    if (conj.startsWith(p + ' ')) {
      return { person: p, form: conj.slice(p.length + 1) };
    }
  }
  throw new Error(`Cannot split conj: ${conj}`);
}

function unescape(s) {
  return s.replace(/\\"/g, '"');
}

function parseCards(html) {
  const cards = [];
  let m;
  CARD_RE.lastIndex = 0;
  while ((m = CARD_RE.exec(html)) !== null) {
    const { form } = splitConj(m[2]);
    cards.push({
      verb: m[1],
      form,
      pron: m[3],
      meaning: unescape(m[4]),
      example: unescape(m[5]),
      group: m[6],
      batch: m[7] != null ? Number(m[7]) : undefined,
    });
  }
  return cards;
}

function toEntries(cards) {
  const byVerb = new Map();
  for (const c of cards) {
    if (!byVerb.has(c.verb)) {
      byVerb.set(c.verb, {
        verb: c.verb,
        group: c.group,
        ...(c.batch != null ? { batch: c.batch } : {}),
        forms: [],
      });
    }
    const entry = byVerb.get(c.verb);
    if (entry.group !== c.group) throw new Error(`${c.verb} group mismatch`);
    if (c.batch != null && entry.batch !== c.batch) throw new Error(`${c.verb} batch mismatch`);
    entry.forms.push({
      form: c.form,
      pron: c.pron,
      meaning: c.meaning,
      example: c.example,
    });
  }
  for (const [verb, entry] of byVerb) {
    if (entry.forms.length !== 4) {
      throw new Error(`${verb}: expected 4 forms, got ${entry.forms.length}`);
    }
  }
  return [...byVerb.values()];
}

function formatForm(row) {
  const esc = (s) => s.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
  return `      { form:"${esc(row.form)}", pron:"${esc(row.pron)}", meaning:"${esc(row.meaning)}", example:"${esc(row.example)}" }`;
}

function formatEntries(entries, indent = '  ') {
  return entries
    .map((e) => {
      const batch = e.batch != null ? `, batch:${e.batch}` : '';
      const forms = e.forms.map(formatForm).join(',\n');
      return `${indent}{ verb:"${e.verb}", group:"${e.group}"${batch},\n${indent}  forms:[\n${forms}\n${indent}  ] },`;
    })
    .join('\n');
}

function run(file) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  const cards = parseCards(html);
  const entries = toEntries(cards);
  console.log(`// ${file}: ${cards.length} cards → ${entries.length} verbs`);
  console.log(formatEntries(entries));
}

function applyToHtml(file) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  const cards = parseCards(html);
  const entries = toEntries(cards);
  const replacement = `const VERB_ENTRIES = [\n${formatEntries(entries)}\n];\n\nconst ALL_CARDS = expandVerbEntries(VERB_ENTRIES);`;
  const updated = html.replace(/const ALL_CARDS = \[[\s\S]*?\];/, replacement);
  if (updated === html) throw new Error(`Could not replace ALL_CARDS in ${file}`);
  fs.writeFileSync(path.join(root, file), updated);
  console.error(`Updated ${file}: ${cards.length} cards → ${entries.length} verbs`);
}

const args = process.argv.slice(2);
if (args.includes('--write')) {
  const files = args.filter((a) => a.endsWith('.html'));
  for (const f of files.length ? files : ['presente.html', 'passado.html']) applyToHtml(f);
} else if (args[0] === '--both') {
  run('presente.html');
  console.log('\n// --- passado ---\n');
  run('passado.html');
} else {
  run(args[0] === 'passado.html' ? 'passado.html' : 'presente.html');
}
