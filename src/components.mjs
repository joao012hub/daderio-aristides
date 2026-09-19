// ============================================================================
// Componentes reutilizáveis (retornam strings HTML)
// ============================================================================
import { site, services, cities, testimonials, wa, waDefault, images } from './data.mjs';
import { esc, icons } from './layout.mjs';

export const FALLBACK = 'assets/img/placeholder.svg';
export const img = (src, alt, extra = '') =>
  `<img src="${src}" alt="${esc(alt)}" loading="lazy" decoding="async" data-fallback="${FALLBACK}" ${extra}>`;

export const sectionHead = ({ eyebrow, title, text, dark = false, cls = '' }) => `
  <div class="section-head reveal ${cls}">
    ${eyebrow ? `<span class="eyebrow">${esc(eyebrow)}</span>` : ''}
    <h2 class="display-l" ${dark ? 'style="color:#fff"' : 'style="color:var(--navy-900)"'}>${title}</h2>
    ${text ? `<p class="lead">${text}</p>` : ''}
  </div>`;

export const serviceCard = (s, i = 0) => `
  <a class="card reveal" data-delay="${(i % 3) + 1}" href="${s.slug}.html">
    <div class="card__top"><span class="card__num">Serviço ${s.num}</span><span class="card__icon">${icons[s.icon]}</span></div>
    <h3>${esc(s.title)}</h3>
    <p>${esc(s.card)}</p>
    <div class="card__tags">${s.tags.map((t) => `<span>${esc(t)}</span>`).join('')}</div>
    <span class="card__more">Ver detalhes e prazos ${icons.arrow}</span>
  </a>`;

export const baSlider = ({ before, after, title, meta, tall = false, start = 55 }) => `
  <div class="ba ${tall ? 'ba--tall' : ''} reveal" style="--pos:${start}%">
    ${img(before, `Antes — ${title}`, 'class="ba__before"')}
    ${img(after, `Depois — ${title}`, 'class="ba__after"')}
    <span class="ba__label ba__label--a">Antes</span>
    <span class="ba__label ba__label--b">Depois</span>
    <div class="ba__handle"></div>
    <div class="ba__meta"><div><span class="mono">${esc(meta)}</span><strong>${esc(title)}</strong></div></div>
    <input type="range" min="0" max="100" value="${start}" aria-label="Comparar antes e depois: ${esc(title)}">
  </div>`;

export const testimonialCard = (t, i = 0) => `
  <figure class="quote reveal" data-delay="${(i % 3) + 1}" style="margin:0">
    <div class="quote__stars" aria-label="5 estrelas">★★★★★</div>
    <blockquote style="margin:0"><p>“${esc(t.text)}”</p></blockquote>
    <figcaption class="quote__who"><span class="avatar">${t.initials}</span><div><strong>${esc(t.name)}</strong><span>${esc(t.place)}</span></div></figcaption>
    <div class="quote__tag mono">${esc(t.service)}</div>
  </figure>`;

export const ctaBand = ({ title = 'Vamos regularizar o <span class="accent">seu próximo passo.</span>', text = 'Envie a matrícula, o IPTU ou fotos pelo WhatsApp. Em até 1 hora útil um engenheiro responde com o caminho, o prazo e uma estimativa — sem compromisso.', message } = {}) => `
  <section class="section dark-800 cta blueprint" style="background-color:var(--navy-800)">
    <div class="container cta__grid">
      <div class="reveal">
        <span class="eyebrow">Fale com um engenheiro</span>
        <h2 class="display-l">${title}</h2>
        <p class="lead" style="margin-top:1.25rem">${text}</p>
        <div class="cta__actions">
          <a class="btn btn--primary btn--lg" href="${message ? wa(message) : waDefault}" target="_blank" rel="noopener">${icons.whatsapp} Falar no WhatsApp agora</a>
          <a class="btn btn--ghost btn--lg" href="contato.html">Enviar pelo formulário</a>
        </div>
      </div>
      <div class="cta__side reveal" data-delay="2">
        <div><span class="mono">Telefone / WhatsApp</span><a href="tel:${site.phoneE164}"><b>${site.phoneDisplay}</b></a></div>
        <div><span class="mono">Atendimento</span><b>Seg–sex · 8h às 18h</b></div>
        <div><span class="mono">Área de atuação</span><b>São José dos Campos · Jacareí</b></div>
      </div>
    </div>
  </section>`;

export const pageHero = ({ eyebrow, title, lead, crumbs = [], image, alt, meta = [], actions = true, message }) => `
  <section class="page-hero dark blueprint">
    <div class="container">
      <div class="page-hero__grid ${image ? '' : 'page-hero--simple'}">
        <div>
          <ol class="breadcrumb">${[['Início', 'index.html'], ...crumbs].map(([l, h], i, a) => i === a.length - 1 ? `<li aria-current="page">${esc(l)}</li>` : `<li><a href="${h}">${esc(l)}</a></li>`).join('')}</ol>
          ${eyebrow ? `<span class="eyebrow">${esc(eyebrow)}</span>` : ''}
          <h1 class="display-l">${title}</h1>
          ${lead ? `<p class="lead page-hero__lead">${lead}</p>` : ''}
          ${actions ? `<div class="page-hero__actions">
            <a class="btn btn--primary btn--lg" href="${message ? wa(message) : waDefault}" target="_blank" rel="noopener">${icons.whatsapp} Falar no WhatsApp</a>
            <a class="btn btn--ghost btn--lg" href="#como-funciona">Como funciona</a>
          </div>` : ''}
          ${meta.length ? `<div class="meta">${meta.map(([k, v]) => `<div><span class="mono">${esc(k)}</span><b>${esc(v)}</b></div>`).join('')}</div>` : ''}
        </div>
        ${image ? `<div class="page-hero__visual reveal" data-delay="2">
          <div class="hero__frame corners">${img(image, alt, 'fetchpriority="high"').replace('loading="lazy"', 'loading="eager"')}</div>
          <div class="dim hero__dim-top"><span>Prancha ${esc(eyebrow || 'A-01')}</span></div>
        </div>` : ''}
      </div>
    </div>
  </section>`;

export const faqHtml = (faq) => `
  <div class="faq">${faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${a}</p></details>`).join('')}</div>`;

export const faqJsonLd = (faq) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a.replace(/<[^>]+>/g, '') } })),
});

export const relatedServices = (slugs, title = 'Serviços relacionados') => `
  <section class="section paper-2">
    <div class="container">
      <div class="section-head section-head--row reveal">
        <div><span class="eyebrow">Você também pode precisar</span><h2 class="display-m" style="color:var(--navy-900)">${title}</h2></div>
        <a class="btn btn--outline" href="index.html#servicos">Todos os serviços ${icons.arrow}</a>
      </div>
      <div class="related">${slugs.map((slug, i) => serviceCard(services.find((s) => s.slug === slug), i)).join('')}</div>
    </div>
  </section>`;

// Mapa estilizado da área de atendimento (SVG) — não é um mapa geográfico preciso
export const areaMap = () => `
  <svg viewBox="0 0 640 400" role="img" aria-label="Área de atendimento: São José dos Campos e Jacareí, ligadas pela Rodovia Presidente Dutra">
    <defs>
      <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0H0v32" fill="none" stroke="rgba(255,255,255,.07)" stroke-width="1"/></pattern>
      <pattern id="grid-lg" width="160" height="160" patternUnits="userSpaceOnUse"><path d="M160 0H0v160" fill="none" stroke="rgba(255,255,255,.12)" stroke-width="1"/></pattern>
    </defs>
    <rect width="640" height="400" fill="url(#grid)"/>
    <rect width="640" height="400" fill="url(#grid-lg)"/>
    <path d="M2 12V2h10M628 2h10v10M638 388v10h-10M12 398H2v-10" fill="none" stroke="#c9a227" stroke-width="1.5"/>
    <!-- Rio Paraíba do Sul (estilizado) -->
    <path d="M40 330 C 140 300, 200 340, 300 290 S 470 200, 620 170" fill="none" stroke="#163b63" stroke-width="10" stroke-linecap="round" opacity=".9"/>
    <path d="M40 330 C 140 300, 200 340, 300 290 S 470 200, 620 170" fill="none" stroke="#1f4f84" stroke-width="2" stroke-linecap="round" opacity=".8"/>
    <text x="52" y="356" font-family="IBM Plex Mono, monospace" font-size="9" letter-spacing="2" fill="rgba(255,255,255,.35)">RIO PARAÍBA DO SUL</text>
    <!-- Rod. Pres. Dutra -->
    <path d="M60 250 L 240 215 L 430 150 L 600 100" fill="none" stroke="rgba(255,255,255,.18)" stroke-width="6" stroke-linecap="round"/>
    <path class="road" d="M60 250 L 240 215 L 430 150 L 600 100" fill="none" stroke="#c9a227" stroke-width="1.5" stroke-linecap="round"/>
    <text x="330" y="176" font-family="IBM Plex Mono, monospace" font-size="9" letter-spacing="2" fill="#c9a227" transform="rotate(-19 330 176)">BR-116 · ROD. PRES. DUTRA</text>
    <!-- Carvalho Pinto -->
    <path d="M120 120 L 320 80 L 560 40" fill="none" stroke="rgba(255,255,255,.14)" stroke-width="4" stroke-linecap="round" stroke-dasharray="2 8"/>
    <text x="150" y="108" font-family="IBM Plex Mono, monospace" font-size="8" letter-spacing="2" fill="rgba(255,255,255,.35)" transform="rotate(-11 150 108)">SP-070 · CARVALHO PINTO</text>
    <!-- cota de distância -->
    <path d="M190 262 L 430 262" stroke="rgba(255,255,255,.35)" stroke-width="1"/>
    <path d="M190 256v12M430 256v12" stroke="rgba(255,255,255,.35)" stroke-width="1"/>
    <rect x="272" y="252" width="78" height="18" fill="#0a1a2e"/>
    <text x="311" y="265" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="9" letter-spacing="2" fill="#c9a227">≈ 20 KM</text>
    <!-- Jacareí -->
    <g>
      <circle class="pulse-dot" cx="180" cy="228" r="14" fill="none" stroke="#c9a227" stroke-width="1"/>
      <circle cx="180" cy="228" r="26" fill="none" stroke="rgba(255,255,255,.18)" stroke-width="1" stroke-dasharray="3 4"/>
      <circle cx="180" cy="228" r="7" fill="#c9a227"/>
      <text x="180" y="300" text-anchor="middle" font-family="Big Shoulders Display, Impact, sans-serif" font-weight="800" font-size="26" fill="#fff" letter-spacing="1">JACAREÍ</text>
      <text x="180" y="316" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" letter-spacing="2" fill="rgba(255,255,255,.5)">ATENDIMENTO DESDE 2021</text>
    </g>
    <!-- São José dos Campos (sede) -->
    <g>
      <circle class="pulse-dot" cx="440" cy="146" r="18" fill="none" stroke="#b8342f" stroke-width="1.5"/>
      <circle cx="440" cy="146" r="40" fill="none" stroke="rgba(255,255,255,.18)" stroke-width="1" stroke-dasharray="3 4"/>
      <circle cx="440" cy="146" r="10" fill="#b8342f" stroke="#fff" stroke-width="2"/>
      <path d="M428 122h24M440 110v24" stroke="rgba(255,255,255,.3)" stroke-width="1"/>
      <text x="440" y="222" text-anchor="middle" font-family="Big Shoulders Display, Impact, sans-serif" font-weight="800" font-size="30" fill="#fff" letter-spacing="1">SÃO JOSÉ DOS CAMPOS</text>
      <text x="440" y="238" text-anchor="middle" font-family="IBM Plex Mono, monospace" font-size="8" letter-spacing="2" fill="#c9a227">SEDE · JARDIM AQUARIUS · DESDE 2018</text>
    </g>
    <!-- legenda -->
    <g font-family="IBM Plex Mono, monospace" font-size="8" letter-spacing="2" fill="rgba(255,255,255,.5)">
      <circle cx="30" cy="30" r="4" fill="#b8342f"/><text x="42" y="33">SEDE</text>
      <circle cx="30" cy="48" r="4" fill="#c9a227"/><text x="42" y="51">CIDADE ATENDIDA</text>
      <text x="520" y="384" fill="rgba(255,255,255,.3)">ESQUEMÁTICO · S/ ESCALA</text>
    </g>
  </svg>`;

export const areaSection = () => `
  <section class="section dark blueprint" id="area">
    <div class="container area">
      <div class="reveal">
        <span class="eyebrow">Área de atendimento</span>
        <h2 class="display-l">Vale do Paraíba, com sede em São José dos Campos</h2>
        <p class="lead" style="margin-top:1.25rem">Atendemos presencialmente São José dos Campos e Jacareí. Visita técnica agendada em até 48 horas, sem custo para diagnóstico de regularização.</p>
        <div class="area__list">
          ${cities.map((c) => `<a class="area__city" href="${c.slug}.html"><span class="mono">${c.slug === 'sao-jose-dos-campos' ? 'Sede' : 'Atendimento'}</span><div><strong>${esc(c.name)}</strong><span>${esc(c.districts.slice(0, 5).join(' · '))} e mais ${c.districts.length - 5} bairros</span></div>${icons.arrow}</a>`).join('')}
        </div>
      </div>
      <div class="area__map corners reveal" data-delay="2">${areaMap()}</div>
    </div>
  </section>`;

export const testimonialsSection = (list = testimonials, { eyebrow = 'Quem já contratou', title = 'O que os clientes dizem' } = {}) => `
  <section class="section paper-2">
    <div class="container">
      ${sectionHead({ eyebrow, title, text: 'Depoimentos de proprietários e síndicos atendidos em São José dos Campos e Jacareí.' })}
      <!-- DEPOIMENTOS FICTÍCIOS — substituir por avaliações reais (Google / WhatsApp) antes de publicar -->
      <div class="quotes">${list.map(testimonialCard).join('')}</div>
    </div>
  </section>`;

export const simulatorSection = () => `
  <section class="section" id="simulador">
    <div class="container sim">
      <div class="sim__copy reveal">
        <span class="eyebrow">Simulador · Isca de diagnóstico</span>
        <h2 class="display-l">Quanto custa e quanto demora regularizar?</h2>
        <p class="lead" style="margin-top:1.25rem">Responda quatro perguntas e receba uma estimativa inicial de prazo e investimento. Depois, envie a matrícula pelo WhatsApp e confirmamos com um diagnóstico gratuito.</p>
        <ul>
          <li>Estimativa em segundos, sem cadastro</li>
          <li>Baseada em processos reais em SJC e Jacareí</li>
          <li>Diagnóstico da matrícula sem custo e sem compromisso</li>
        </ul>
      </div>
      <form class="sim__form corners corners--ink reveal" data-delay="2" id="simulador-form" novalidate>
        <span class="mono" style="display:block;margin-bottom:1.25rem">Simulação de regularização · v1.0</span>
        <div class="field--row">
          <div class="field"><label for="sim-cidade">Cidade</label><select id="sim-cidade" name="cidade"><option value="sjc">São José dos Campos</option><option value="jacarei">Jacareí</option></select></div>
          <div class="field"><label for="sim-tipo">Tipo de imóvel</label><select id="sim-tipo" name="tipo"><option value="residencial">Residencial</option><option value="comercial">Comercial</option><option value="misto">Misto</option></select></div>
        </div>
        <div class="field"><label for="sim-sit">Situação atual</label><select id="sim-sit" name="situacao">
          <option value="sem-projeto">Construído sem projeto aprovado</option>
          <option value="ampliacao">Ampliação não averbada na matrícula</option>
          <option value="sem-habitese">Projeto aprovado, mas sem Habite-se</option>
          <option value="condominio">Unidade em condomínio (reforma / alteração)</option>
        </select></div>
        <div class="field"><label for="sim-area">Área construída aproximada (m²)</label><input id="sim-area" name="area" type="number" min="30" max="3000" step="1" value="150" inputmode="numeric"></div>
        <button class="btn btn--ink btn--block btn--lg" type="submit">Calcular estimativa ${icons.arrow}</button>
        <div class="sim__result" id="sim-result" aria-live="polite">
          <div class="sim__out">
            <div><span class="mono">Prazo estimado</span><div class="sim__big" id="sim-prazo">—</div></div>
            <div><span class="mono">Honorários estimados</span><div class="sim__big" id="sim-custo">—</div></div>
          </div>
          <p class="sim__note">Estimativa inicial e ilustrativa. Taxas da prefeitura, cartório e eventuais multas não estão incluídas. O valor final é confirmado após análise gratuita da matrícula.</p>
          <a class="btn btn--primary btn--block" id="sim-cta" href="${waDefault}" target="_blank" rel="noopener">${icons.whatsapp} Receber análise gratuita no WhatsApp</a>
        </div>
      </form>
    </div>
  </section>`;

export const projectCard = (p, i = 0) => `
  <article class="work reveal" data-delay="${(i % 3) + 1}" data-cat="${esc(p.cat)}" data-city="${esc(p.city)}">
    <div class="work__media">
      ${img(p.after, `Depois — ${p.title}`)}
      ${img(p.before, `Antes — ${p.title}`, 'class="before"')}
      <span class="work__cat">${esc(p.cat)}</span>
      <span class="work__hint" data-hover="Passe o mouse · antes" data-touch="Toque · ver antes"></span>
    </div>
    <div class="work__body">
      <span class="work__meta">Obra ${p.id} · ${esc(p.place)} · ${esc(p.city === 'São José dos Campos' ? 'SJC' : p.city)} · ${p.year}</span>
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.desc)}</p>
      <span class="work__result">${esc(p.result)}</span>
    </div>
  </article>`;
