import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';

const html = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8');
const staticHTML = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '');
const site = readFileSync(new URL('../src/data/site.ts', import.meta.url), 'utf8');
const whatsappURL = site.match(/whatsappURL = '([^']+)'/)[1];
assert.equal(new URL(whatsappURL).pathname, '/5519982392167', 'Confirmed WhatsApp number');
for (const [, reference] of staticHTML.matchAll(/(?:href|src)="([^"]+)"/g)) {
  if (!reference.startsWith('/') || reference.startsWith('//')) continue;
  const path = reference.split(/[?#]/)[0];
  assert.ok(existsSync(new URL(`../dist${path}`, import.meta.url)), `Missing local file: ${path}`);
}
for (const [, candidates] of staticHTML.matchAll(/srcset="([^"]+)"/g)) {
  for (const candidate of candidates.split(',')) {
    const path = candidate.trim().split(/\s+/)[0];
    if (path.startsWith('/')) assert.ok(existsSync(new URL(`../dist${path}`, import.meta.url)), `Missing responsive image: ${path}`);
  }
}
const ids = [...staticHTML.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
assert.equal(new Set(ids).size, ids.length, 'Duplicate IDs');
assert.equal((staticHTML.match(/<h1\b/g) ?? []).length, 1, 'One page heading');
for (const match of staticHTML.matchAll(/href="#([^"]+)"/g)) {
  assert.ok(ids.includes(match[1]), `Unresolved anchor: ${match[1]}`);
}
for (const text of ['Tecnologia para transformar desafios em', 'Conte seu desafio',
  'O desafio vem primeiro.', 'Entender antes de construir.', 'Tecnologia com clareza.',
  'Qual desafio você quer resolver?']) assert.ok(staticHTML.includes(text), text);
const whatsappLinks = [...staticHTML.matchAll(/<a\b[^>]*href="https:\/\/wa.me\/[^>]+>/g)].map(match => match[0]);
assert.equal(whatsappLinks.length, 5);
for (const link of whatsappLinks) {
  assert.ok(link.includes(`href="${whatsappURL}"`), 'Preserved WhatsApp destination');
  assert.ok(link.includes('rel="noopener noreferrer"'));
}
assert.equal((staticHTML.match(/class="solution-card"/g) ?? []).length, 5);
assert.equal((staticHTML.match(/class="step-number"/g) ?? []).length, 6);
assert.ok(staticHTML.includes('fetchpriority="high"'));
assert.ok(staticHTML.includes('aria-label="Navegação mobile"'));
assert.ok(staticHTML.includes('<details'));
assert.ok(staticHTML.includes('<meta name="description"'));
assert.equal(readdirSync(new URL('../dist/', import.meta.url)).filter(name => name.endsWith('.html')).length, 1);
const clientScript = html.match(/<script type="module">([\s\S]*?)<\/script>/)?.[1];
assert.ok(clientScript, 'Home motion included in generated page');
console.log('Home build verified: static content, anchors, WhatsApp links, heading, metadata, optimized Hero and one page.');
console.log(`Home motion inline script: ${Buffer.byteLength(clientScript)} bytes (before compression).`);
