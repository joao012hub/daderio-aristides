// ============================================================================
// build.mjs — gera as páginas HTML estáticas na raiz do projeto
// Uso: node build.mjs
// ============================================================================
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { site, services, cities } from './src/data.mjs';
import { layout } from './src/layout.mjs';
import { home, servicePage, cityPage, portfolio, about, contact } from './src/pages.mjs';

const root = path.dirname(fileURLToPath(import.meta.url));

const pages = [
  home(),
  ...services.map(servicePage),
  ...cities.map(cityPage),
  portfolio(),
  about(),
  contact(),
];

for (const p of pages) {
  fs.writeFileSync(path.join(root, p.path), layout(p), 'utf8');
  console.log('✓', p.path);
}

// sitemap.xml
const today = new Date().toISOString().slice(0, 10);
const urls = pages.map((p) => {
  const loc = `${site.domain}/${p.path === 'index.html' ? '' : p.path.replace('.html', '')}`;
  const priority = p.path === 'index.html' ? '1.0' : /contato|sobre|obras/.test(p.path) ? '0.7' : '0.9';
  return `  <url><loc>${loc}</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>${priority}</priority></url>`;
});
fs.writeFileSync(path.join(root, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`);
fs.writeFileSync(path.join(root, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${site.domain}/sitemap.xml\n`);
console.log('✓ sitemap.xml, robots.txt');
console.log(`\n${pages.length} páginas geradas. Abra index.html ou rode: node serve.mjs`);
