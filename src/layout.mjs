// ============================================================================
// Layout compartilhado: <head>, header, footer, JSON-LD, WhatsApp flutuante
// ============================================================================
import { site, nav, services, cities, waDefault } from './data.mjs';

export const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// --- ícones inline (stroke, 24px) ---------------------------------------------
const stroke = (paths) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;
export const icons = {
  'document-check': stroke('<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="m9 15 2 2 4-4"/>'),
  'stamp': stroke('<path d="M5 21h14"/><path d="M6 17h12a1 1 0 0 0 1-1v-2a2 2 0 0 0-2-2h-2.5a1.5 1.5 0 0 1-1.5-1.5V9a3 3 0 1 0-2 0v1.5A1.5 1.5 0 0 1 9.5 12H7a2 2 0 0 0-2 2v2a1 1 0 0 0 1 1z"/>'),
  'badge': stroke('<circle cx="12" cy="9" r="5"/><path d="m8.5 13.5-1.5 7 5-2.5 5 2.5-1.5-7"/><path d="m10 9 1.5 1.5L14 8"/>'),
  'clipboard-search': stroke('<path d="M9 4h6a1 1 0 0 1 1 1v1H8V5a1 1 0 0 1 1-1z"/><path d="M16 5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"/><circle cx="11.5" cy="13.5" r="2.5"/><path d="m13.5 15.5 2.5 2.5"/>'),
  'drop': stroke('<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/><path d="M9 14a3 3 0 0 0 3 3"/>'),
  'hammer': stroke('<path d="m14 6 5.5 5.5"/><path d="M3 21l8.5-8.5"/><path d="m11.5 12.5 2-2"/><path d="M14 3.5 20.5 10l-2 2-6.5-6.5z"/>'),
  'arrow': stroke('<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>'),
  'chevron': stroke('<path d="m6 9 6 6 6-6"/>'),
  'phone': stroke('<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1L8.1 9.7a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.7a2 2 0 0 1 1.7 2z"/>'),
  'pin': stroke('<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>'),
  'mail': stroke('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>'),
  'clock': stroke('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
  'instagram': stroke('<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/>'),
  'whatsapp': '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.3-.6-.4zM12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z"/></svg>',
};

// --- logo -----------------------------------------------------------------------
export const logoMark = `<svg class="brand__mark" viewBox="0 0 40 40" aria-hidden="true">
  <path d="M2 11V2h9M29 2h9v9M38 29v9h-9M11 38H2v-9" fill="none" stroke="#c9a227" stroke-width="2"/>
  <path d="M10 30 30 10" stroke="#b8342f" stroke-width="6" stroke-linecap="square"/>
  <path d="M10 10h11M19 30h11" stroke="currentColor" stroke-width="3"/>
</svg>`;

export const brand = (tag = 'a') => `<${tag} class="brand"${tag === 'a' ? ` href="index.html" aria-label="${esc(site.name)} — início"` : ''}>
  ${logoMark}
  <span class="brand__text"><strong>Dadério &amp; Aristides</strong><small>Engenharia e Construção</small></span>
</${tag}>`;

// --- JSON-LD --------------------------------------------------------------------
export const orgJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${site.domain}/#organization`,
  name: site.name,
  legalName: site.legalName,
  alternateName: 'Dadério & Aristides',
  url: `${site.domain}/`,
  telephone: site.phoneE164,
  email: site.email,
  foundingDate: site.founded,
  taxID: site.cnpj,
  priceRange: '$$',
  image: `${site.domain}/assets/img/og.jpg`,
  logo: `${site.domain}/assets/img/logo.svg`,
  founder: { '@type': 'Person', name: site.founder.name, jobTitle: 'Engenheiro Civil' },
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${site.address.street} — ${site.address.district}`,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: 'BR',
  },
  geo: { '@type': 'GeoCoordinates', latitude: -23.2088, longitude: -45.9004 },
  areaServed: cities.map((c) => ({ '@type': 'City', name: c.name })),
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:00' }],
  sameAs: [site.instagram],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços de engenharia',
    itemListElement: services.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.title, url: `${site.domain}/${s.slug}` } })),
  },
});

export const breadcrumbJsonLd = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, href], i) => ({ '@type': 'ListItem', position: i + 1, name, item: `${site.domain}/${href.replace('index.html', '').replace('.html', '')}` })),
});

// --- header / footer ------------------------------------------------------------
const navHtml = () => nav.map((item) => {
  if (item.children) {
    return `<li class="nav__item nav__item--has-menu">
      <a class="nav__link" href="${item.href}" aria-haspopup="true">${item.label} ${icons.chevron}</a>
      <ul class="nav__menu">
        ${item.children.map((c) => `<li><a href="${c.href}">${c.num ? `<span class="mono">${c.num}</span>` : ''}${esc(c.label)}</a></li>`).join('')}
      </ul>
    </li>`;
  }
  return `<li class="nav__item"><a class="nav__link" href="${item.href}">${item.label}</a></li>`;
}).join('');

const header = () => `<header class="header">
  <div class="container header__inner">
    ${brand()}
    <nav class="nav" id="nav" aria-label="Principal">
      <ul class="nav__list">${navHtml()}</ul>
      <div class="nav__mobile-cta">
        <a class="btn btn--primary" href="${waDefault}" target="_blank" rel="noopener">${icons.whatsapp} Falar no WhatsApp</a>
        <a class="btn btn--ghost" href="tel:${site.phoneE164}">${icons.phone} ${site.phoneDisplay}</a>
      </div>
    </nav>
    <div class="header__cta">
      <a class="header__phone" href="tel:${site.phoneE164}">${site.phoneDisplay}</a>
      <a class="btn btn--primary" href="${waDefault}" target="_blank" rel="noopener">${icons.whatsapp} WhatsApp</a>
    </div>
    <button class="burger" aria-label="Abrir menu" aria-expanded="false" aria-controls="nav"><span></span><span></span><span></span></button>
  </div>
</header>`;

const footer = () => `<footer class="footer">
  <div class="container">
    <div class="footer__grid">
      <div class="footer__about">
        ${brand('div')}
        <p>Engenharia civil com responsabilidade técnica em São José dos Campos e Jacareí desde ${site.foundedYear}. Regularização, projetos, laudos, drenagem e obras — com ART em tudo o que assinamos.</p>
        <div class="footer__social">
          <a href="${site.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${icons.instagram}</a>
          <a href="${waDefault}" target="_blank" rel="noopener" aria-label="WhatsApp">${icons.whatsapp}</a>
          <a href="mailto:${site.email}" aria-label="E-mail">${icons.mail}</a>
        </div>
      </div>
      <div>
        <h4>Serviços</h4>
        <ul>${services.map((s) => `<li><a href="${s.slug}.html">${esc(s.title)}</a></li>`).join('')}</ul>
      </div>
      <div>
        <h4>Empresa</h4>
        <ul>
          <li><a href="sobre.html">Sobre a empresa</a></li>
          <li><a href="obras.html">Obras e projetos</a></li>
          ${cities.map((c) => `<li><a href="${c.slug}.html">${esc(c.name)}</a></li>`).join('')}
          <li><a href="contato.html">Contato</a></li>
          <li><a href="index.html#simulador">Simulador de regularização</a></li>
        </ul>
      </div>
      <div>
        <h4>Contato</h4>
        <!-- ENDEREÇO FICTÍCIO — SUBSTITUIR ANTES DE PUBLICAR -->
        <address>
          <span>${site.address.street} — ${site.address.district}<br>${site.address.city} – ${site.address.state}, CEP ${site.address.zip}</span>
          <a href="tel:${site.phoneE164}">${site.phoneDisplay}</a>
          <a href="mailto:${site.email}">${site.email}</a>
          <span>${site.hours}</span>
        </address>
      </div>
    </div>
    <div class="footer__bottom">
      <span>© ${new Date().getFullYear()} ${esc(site.legalName)} · CNPJ ${site.cnpj}</span>
      <span>Resp. técnico: Eng. Civil ${esc(site.founder.name)} · ${site.founder.crea}</span>
      <span>Desde ${site.foundedYear} · SJC e Jacareí</span>
    </div>
  </div>
</footer>
<a class="wa-float" href="${waDefault}" target="_blank" rel="noopener" aria-label="Falar com um engenheiro no WhatsApp">${icons.whatsapp}<span>Falar com um engenheiro</span></a>`;

// --- layout --------------------------------------------------------------------
export function layout({ title, description, path, main, jsonld = [], ogImage }) {
  const canonical = `${site.domain}/${path === 'index.html' ? '' : path.replace('.html', '')}`;
  const ld = [orgJsonLd(), ...jsonld].map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('\n  ');
  return `<!DOCTYPE html>
<html lang="pt-BR" class="no-js">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <link rel="canonical" href="${canonical}">
  <meta name="theme-color" content="#0a1a2e">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="pt_BR">
  <meta property="og:site_name" content="${esc(site.name)}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${esc(ogImage || `${site.domain}/assets/img/og.jpg`)}">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="assets/img/favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://images.unsplash.com">
  <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700;800;900&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/style.css">
  ${ld}
  <!-- PROTÓTIPO PARA APRESENTAÇÃO COMERCIAL — dados de contato, depoimentos, números e CREA são FICTÍCIOS -->
  <!-- ENDEREÇO FICTÍCIO — SUBSTITUIR ANTES DE PUBLICAR -->
</head>
<body data-wa="${site.whatsapp}">
  ${header()}
  <main id="conteudo">
${main}
  </main>
  ${footer()}
  <script src="assets/js/main.js" defer></script>
</body>
</html>
`;
}
