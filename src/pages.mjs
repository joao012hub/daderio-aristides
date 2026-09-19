// ============================================================================
// Páginas
// ============================================================================
import { site, services, cities, projects, testimonials, images, wa, waDefault } from './data.mjs';
import { esc, icons, breadcrumbJsonLd } from './layout.mjs';
import { img, sectionHead, serviceCard, baSlider, ctaBand, pageHero, faqHtml, faqJsonLd, relatedServices, areaSection, testimonialsSection, simulatorSection, projectCard } from './components.mjs';

// ----------------------------------------------------------------------------
// HOME
// ----------------------------------------------------------------------------
export function home() {
  const main = `
  <!-- HERO -->
  <section class="hero dark blueprint">
    <span class="hero__plate" aria-hidden="true">Prancha A-01 · Site institucional · Rev. 2026 · Esc. 1:100</span>
    <div class="container hero__grid">
      <div>
        <span class="eyebrow hero__eyebrow">Engenharia e construção · São José dos Campos · Jacareí</span>
        <h1 class="display-xl">Seu imóvel<br>regular.<br><span class="outline">Sua obra</span><br><span class="accent">bem-feita.</span></h1>
        <p class="lead hero__lead">Regularização, aprovação na prefeitura, ART, laudos técnicos, drenagem e execução de obras — com engenheiro responsável do primeiro traço à entrega. Desde 2018 no Vale do Paraíba.</p>
        <div class="hero__ctas">
          <a class="btn btn--primary btn--lg" href="${waDefault}" target="_blank" rel="noopener">${icons.whatsapp} Falar com um engenheiro</a>
          <a class="btn btn--ghost btn--lg" href="#simulador">Simular regularização ${icons.arrow}</a>
        </div>
        <div class="hero__specs">
          <span class="mono">CNPJ ativo desde <b>2018</b></span>
          <span class="mono">ART em <b>100%</b> das obras</span>
          <span class="mono">Resposta em <b>até 1 h útil</b></span>
        </div>
      </div>
      <div class="hero__visual reveal" data-delay="2">
        <div class="hero__frame corners">
          <img class="hero__photo" src="${images.hero}" alt="Laje em execução com equipe de engenharia em canteiro de obras" fetchpriority="high" decoding="async" data-fallback="assets/img/placeholder.svg">
          <div class="hero__card">
            <span class="mono">Obra 0147 · Jardim Aquarius · SJC</span>
            <strong>Regularização concluída</strong>
            <em>Habite-se em 58 dias</em>
          </div>
        </div>
        <div class="dim hero__dim-top"><span>12,40 m</span></div>
        <div class="dim dim--v hero__dim-right"><span>15,50 m</span></div>
        <div class="hero__badge" aria-hidden="true">7+<small>anos de<br>atuação</small></div>
      </div>
    </div>
    <a class="hero__scroll" href="#servicos"><i></i> Role para explorar</a>
  </section>

  <!-- MARQUEE -->
  <div class="marquee" aria-hidden="true">
    <div class="marquee__track">
      ${[0, 1].map(() => `<div class="marquee__group">${['Regularização de imóvel', 'Aprovação na prefeitura', 'Emissão de ART', 'Laudo técnico', 'Drenagem', 'Reforma e obra', 'São José dos Campos', 'Jacareí'].map((t) => `<span>${t}</span>`).join('')}</div>`).join('')}
    </div>
  </div>

  <!-- PROVA RÁPIDA -->
  <section class="section section--tight">
    <div class="container">
      <!-- NÚMEROS ILUSTRATIVOS — confirmar com o cliente -->
      <div class="stats reveal">
        <div class="stat"><div class="stat__n"><span data-count="7" data-suffix="+">0</span></div><div class="stat__l">Anos de atuação<span class="mono">CNPJ ativo desde 10/2018</span></div></div>
        <div class="stat"><div class="stat__n"><span data-count="120" data-suffix="+">0</span></div><div class="stat__l">Obras e projetos<span class="mono">Regularização · laudos · obras</span></div></div>
        <div class="stat"><div class="stat__n"><span data-count="2">0</span><em>cidades</em></div><div class="stat__l">Área de atendimento<span class="mono">SJC · Jacareí</span></div></div>
        <div class="stat"><div class="stat__n"><span data-count="100" data-suffix="%">0</span></div><div class="stat__l">Com ART emitida<span class="mono">Resp. técnica em tudo</span></div></div>
      </div>
    </div>
  </section>

  <!-- SERVIÇOS -->
  <section class="section" id="servicos">
    <div class="container">
      ${sectionHead({ eyebrow: '01 — Serviços', title: 'Da regularização à entrega da obra', text: 'Seis frentes de engenharia, um único responsável técnico. Cada serviço tem página própria com o que é, quando é necessário, como funciona e o prazo estimado.' })}
      <div class="cards">${services.map(serviceCard).join('')}</div>
    </div>
  </section>

  <!-- URGÊNCIA -->
  <section class="section urgent">
    <div class="container urgent__grid">
      <div class="reveal">
        <span class="eyebrow">Precisa resolver agora?</span>
        <h2 class="display-l">Notificação da prefeitura, prazo do banco, síndico cobrando ART?</h2>
        <p class="lead" style="margin-top:1.25rem">Cada dia de imóvel irregular é risco de multa, embargo e negócio travado. Nós respondemos em até 1 hora útil e dizemos exatamente o que fazer.</p>
        <ul class="urgent__list">
          <li>Recebeu <strong>auto de infração ou comunique-se</strong> e o prazo está correndo</li>
          <li>O <strong>financiamento travou</strong> por falta de Habite-se ou averbação</li>
          <li>O <strong>condomínio exige ART</strong> e plano de reforma para liberar a obra</li>
          <li>Apareceram <strong>trincas, infiltrações ou alagamentos</strong> e você precisa de um laudo</li>
        </ul>
      </div>
      <div class="urgent__box corners reveal" data-delay="2">
        <span class="mono">Atendimento prioritário</span>
        <h3 class="display-s">Envie os documentos agora pelo WhatsApp</h3>
        <p>Matrícula, IPTU, a notificação e fotos. Um engenheiro analisa e responde com o caminho, o prazo e uma estimativa — sem compromisso.</p>
        <a class="btn btn--primary btn--block btn--lg" href="${wa('Olá! Tenho uma URGÊNCIA (prefeitura/banco/condomínio) e preciso de um engenheiro. Posso enviar os documentos?')}" target="_blank" rel="noopener">${icons.whatsapp} Falar agora</a>
        <a class="btn btn--ghost btn--block" href="tel:${site.phoneE164}">${icons.phone} ${site.phoneDisplay}</a>
      </div>
    </div>
  </section>

  <!-- ANTES E DEPOIS -->
  <section class="section">
    <div class="container">
      <div class="section-head section-head--row reveal">
        <div><span class="eyebrow">02 — Obras</span><h2 class="display-l" style="color:var(--navy-900)">Antes e depois</h2><p class="lead">Arraste o controle para comparar. Regularização, reforma e drenagem executadas pela nossa equipe.</p></div>
        <a class="btn btn--outline" href="obras.html">Ver portfólio completo ${icons.arrow}</a>
      </div>
      <!-- IMAGENS PLACEHOLDER — substituir por fotos reais das obras -->
      <div class="ba-grid">
        ${baSlider({ before: images.scaffold, after: images.house1, title: 'Regularização com edícula', meta: 'Obra 0147 · Jardim Aquarius · SJC', tall: true, start: 50 })}
        ${baSlider({ before: images.demolition, after: images.interior1, title: 'Reforma de apartamento', meta: 'Obra 0139 · Vila Ema · SJC', start: 55 })}
        ${baSlider({ before: images.earthworks, after: images.house5, title: 'Drenagem de chácara', meta: 'Obra 0152 · Igarapés · Jacareí', start: 55 })}
      </div>
    </div>
  </section>

  <!-- PROCESSO -->
  <section class="section dark blueprint">
    <div class="container">
      ${sectionHead({ eyebrow: '03 — Como funciona', title: 'Quatro etapas. Um responsável.', text: 'Você fala com o engenheiro do início ao fim — sem intermediário, sem "vou ver com o pessoal".', dark: true })}
      <div class="steps">
        <div class="step reveal" data-delay="1"><h3>Diagnóstico gratuito</h3><p>Pelo WhatsApp ou em visita: analisamos documentos e fotos e dizemos o caminho, o prazo e a estimativa de investimento.</p></div>
        <div class="step reveal" data-delay="2"><h3>Levantamento e projeto</h3><p>Medição in loco, projeto legal ou executivo, memoriais e ART. Tudo no formato que a prefeitura e o condomínio exigem.</p></div>
        <div class="step reveal" data-delay="3"><h3>Protocolo e execução</h3><p>Protocolamos, respondemos a cada exigência e, quando há obra, executamos com cronograma e relatório semanal.</p></div>
        <div class="step reveal" data-delay="4"><h3>Entrega documentada</h3><p>Habite-se, alvará, laudo ou obra entregue com as built, ART baixada e orientação para o cartório.</p></div>
      </div>
    </div>
  </section>

  ${simulatorSection()}

  ${testimonialsSection()}

  ${areaSection()}

  ${ctaBand()}
  `;
  return { path: 'index.html', title: 'Dadério & Aristides — Engenharia, Regularização e Obras em São José dos Campos e Jacareí', description: 'Engenharia civil com responsabilidade técnica: regularização de imóvel, aprovação de projeto na prefeitura, ART, laudo técnico, drenagem e reformas em São José dos Campos e Jacareí. Desde 2018.', main, jsonld: [] };
}

// ----------------------------------------------------------------------------
// SERVIÇO
// ----------------------------------------------------------------------------
export function servicePage(s) {
  const message = `Olá! Preciso de ${s.title.toLowerCase()} e quero falar com um engenheiro.`;
  const main = `
  ${pageHero({ eyebrow: `Serviço ${s.num}/06`, title: esc(s.title), lead: s.lead, crumbs: [['Serviços', 'index.html#servicos'], [s.title, `${s.slug}.html`]], image: s.heroImg, alt: s.heroAlt, message,
    meta: [['Prazo estimado', s.prazo], ['Atendimento', 'SJC e Jacareí'], ['Responsável', 'Engenheiro civil · ART']] })}

  <section class="section">
    <div class="container article">
      <div class="prose">
        <h2><span class="mono">01</span>O que é</h2>
        ${s.whatIs.map((p) => `<p>${p}</p>`).join('')}

        <h2><span class="mono">02</span>Quando é necessário</h2>
        <ul class="check reveal">${s.when.map((w) => `<li><span>${w}</span></li>`).join('')}</ul>

        <h2 id="como-funciona"><span class="mono">03</span>Como funciona com a Dadério &amp; Aristides</h2>
        <ol class="proc reveal">${s.process.map(([t, d]) => `<li><strong>${esc(t)}</strong><span>${esc(d)}</span></li>`).join('')}</ol>

        <h2><span class="mono">04</span>Prazo estimado</h2>
        <table class="spec reveal">
          <thead><tr><th>Etapa</th><th style="text-align:right">Prazo</th></tr></thead>
          <tbody>${s.timeline.map(([e, p]) => `<tr><td>${esc(e)}</td><td>${esc(p)}</td></tr>`).join('')}</tbody>
          <tfoot><tr><td colspan="2">Prazos médios observados em São José dos Campos e Jacareí. A análise da prefeitura varia com a fila do órgão e a qualidade do processo protocolado.</td></tr></tfoot>
        </table>

        <h2><span class="mono">05</span>Perguntas frequentes</h2>
        ${faqHtml(s.faq)}
      </div>

      <aside class="aside">
        <div class="aside__card aside__card--dark corners blueprint">
          <span class="mono">Fale com um engenheiro</span>
          <h3 class="display-s">Resposta em até 1 hora útil</h3>
          <p>Envie documentos e fotos pelo WhatsApp. Diagnóstico inicial sem custo e sem compromisso.</p>
          <a class="btn btn--primary btn--block" href="${wa(message)}" target="_blank" rel="noopener">${icons.whatsapp} Falar no WhatsApp</a>
          <a class="aside__phone" href="tel:${site.phoneE164}">${icons.phone} ${site.phoneDisplay}</a>
        </div>
        <div class="aside__card aside__card--light">
          <span class="mono">Tenha em mãos</span>
          <ul>${s.docs.map((d) => `<li>${esc(d)}</li>`).join('')}</ul>
        </div>
      </aside>
    </div>
  </section>

  ${relatedServices(s.related)}
  ${ctaBand({ message })}
  `;
  const jsonld = [
    { '@context': 'https://schema.org', '@type': 'Service', name: s.title, serviceType: s.title, description: s.metaDescription, provider: { '@id': `${site.domain}/#organization` }, areaServed: cities.map((c) => ({ '@type': 'City', name: c.name })), url: `${site.domain}/${s.slug}` },
    faqJsonLd(s.faq),
    breadcrumbJsonLd([['Início', 'index.html'], ['Serviços', 'index.html'], [s.title, `${s.slug}.html`]]),
  ];
  return { path: `${s.slug}.html`, title: s.metaTitle, description: s.metaDescription, main, jsonld, ogImage: s.heroImg };
}

// ----------------------------------------------------------------------------
// CIDADE
// ----------------------------------------------------------------------------
export function cityPage(c) {
  const message = `Olá! Sou de ${c.name} e preciso de um engenheiro.`;
  const cityProjects = projects.filter((p) => p.city === c.name);
  const main = `
  ${pageHero({ eyebrow: c.eyebrow, title: esc(c.h1), lead: c.lead, crumbs: [['Cidades', 'index.html#area'], [c.name, `${c.slug}.html`]], image: c.heroImg, alt: c.heroAlt, message,
    meta: [['Visita técnica', 'Em até 48 h'], ['Bairros atendidos', `${c.districts.length}+`], ['Diagnóstico', 'Sem custo']] })}

  <section class="section">
    <div class="container two-col">
      <div class="prose reveal">
        <span class="eyebrow">Como atuamos em ${esc(c.name)}</span>
        <h2 class="display-m" style="color:var(--navy-900);margin:0 0 1.25rem">${c.slug === 'jacarei' ? 'Uma cidade em expansão pede engenharia que previne' : 'Uma cidade de engenharia merece engenharia à altura'}</h2>
        ${c.intro.map((p) => `<p class="big">${p}</p>`).join('')}
        <div class="actions mt-2">
          <a class="btn btn--primary" href="${wa(message)}" target="_blank" rel="noopener">${icons.whatsapp} Agendar visita em ${esc(c.short)}</a>
        </div>
      </div>
      <div class="reveal" data-delay="2">
        <span class="eyebrow">Onde atendemos</span>
        <h3 class="display-s" style="color:var(--navy-900);margin-bottom:1rem">Bairros e regiões de ${esc(c.name)}</h3>
        <div class="chips">${c.districts.map((d) => `<span>${esc(d)}</span>`).join('')}</div>
        <p style="color:var(--ink-2);font-size:.9rem;margin-top:1rem">Não encontrou o seu bairro? Atendemos todo o município — fale conosco.</p>
      </div>
    </div>
  </section>

  <section class="section paper-2">
    <div class="container">
      ${sectionHead({ eyebrow: 'Por região', title: `O que mais resolvemos em ${esc(c.name)}`, text: 'Cada região da cidade tem um perfil de demanda. Conhecer isso encurta o diagnóstico e o prazo.' })}
      <div class="highlights">${c.highlights.map(([t, d], i) => `<div class="highlight reveal" data-delay="${(i % 2) + 1}"><h3>${esc(t)}</h3><p>${esc(d)}</p></div>`).join('')}</div>
    </div>
  </section>

  <section class="section dark blueprint">
    <div class="container two-col">
      <div class="reveal">
        <span class="eyebrow">Regras locais</span>
        <h2 class="display-m">${esc(c.cityHall.title)}</h2>
        <p class="lead" style="margin-top:1.25rem">O que costuma surpreender proprietários — e o que fazemos para que não surpreenda você.</p>
      </div>
      <ol class="info-list reveal" data-delay="2">${c.cityHall.items.map((i) => `<li><span>${esc(i)}</span></li>`).join('')}</ol>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head section-head--row reveal">
        <div><span class="eyebrow">Serviços mais solicitados</span><h2 class="display-l" style="color:var(--navy-900)">Em ${esc(c.name)}</h2></div>
        <a class="btn btn--outline" href="index.html#servicos">Todos os serviços ${icons.arrow}</a>
      </div>
      <div class="related">${c.topServices.map((slug, i) => serviceCard(services.find((s) => s.slug === slug), i)).join('')}</div>
    </div>
  </section>

  ${cityProjects.length ? `<section class="section paper-2">
    <div class="container">
      <div class="section-head section-head--row reveal">
        <div><span class="eyebrow">Obras em ${esc(c.name)}</span><h2 class="display-l" style="color:var(--navy-900)">Projetos entregues na cidade</h2></div>
        <a class="btn btn--outline" href="obras.html">Portfólio completo ${icons.arrow}</a>
      </div>
      <div class="works">${cityProjects.slice(0, 3).map(projectCard).join('')}</div>
    </div>
  </section>` : ''}

  ${testimonialsSection([testimonials[c.testimonial], ...testimonials.filter((_, i) => i !== c.testimonial)].slice(0, 3), { title: `Clientes em ${esc(c.name)} e região` })}

  ${ctaBand({ title: `Engenheiro em <span class="accent">${esc(c.name)}</span> — fale agora.`, message })}
  `;
  const jsonld = [breadcrumbJsonLd([['Início', 'index.html'], [c.name, `${c.slug}.html`]])];
  return { path: `${c.slug}.html`, title: c.metaTitle, description: c.metaDescription, main, jsonld, ogImage: c.heroImg };
}

// ----------------------------------------------------------------------------
// PORTFÓLIO
// ----------------------------------------------------------------------------
export function portfolio() {
  const cats = [...new Set(projects.map((p) => p.cat))];
  const main = `
  ${pageHero({ eyebrow: 'Portfólio', title: 'Obras e projetos <span style="color:var(--gold)">entregues</span>', lead: 'Uma seleção de regularizações, reformas, aprovações, laudos e drenagens executadas em São José dos Campos e Jacareí. Passe o mouse sobre cada obra para ver o antes.', crumbs: [['Obras', 'obras.html']], actions: false })}

  <section class="section">
    <div class="container">
      <!-- IMAGENS PLACEHOLDER — substituir por fotos reais das obras -->
      <div class="ba-grid">
        ${baSlider({ before: images.rebar, after: images.house2, title: 'Casa térrea em condomínio', meta: 'Obra 0118 · Urbanova · SJC', tall: true, start: 50 })}
        ${baSlider({ before: images.scaffoldWorkers, after: images.house4, title: 'Ampliação regularizada', meta: 'Obra 0156 · Jardim Paraíba · Jacareí' })}
        ${baSlider({ before: images.carpenter, after: images.house6, title: 'Telhado e impermeabilização', meta: 'Obra 0122 · Jardim Esplanada · SJC' })}
      </div>
    </div>
  </section>

  <section class="section paper-2">
    <div class="container">
      <div class="section-head section-head--row reveal">
        <div><span class="eyebrow">Todas as obras</span><h2 class="display-l" style="color:var(--navy-900)">Filtre por tipo ou cidade</h2></div>
      </div>
      <div class="filters reveal" role="group" aria-label="Filtrar obras">
        <button type="button" class="is-active" data-filter="all">Todas</button>
        ${cats.map((c) => `<button type="button" data-filter="${esc(c)}">${esc(c)}</button>`).join('')}
        ${cities.map((c) => `<button type="button" data-filter="${esc(c.name)}">${esc(c.name)}</button>`).join('')}
      </div>
      <div class="works">${projects.map(projectCard).join('')}</div>
    </div>
  </section>

  ${ctaBand({ title: 'Sua obra pode ser a <span class="accent">próxima desta lista.</span>' })}
  `;
  return { path: 'obras.html', title: 'Obras e Projetos — Portfólio | Dadério & Aristides Engenharia', description: 'Portfólio de regularizações, reformas, aprovações de projeto, laudos e drenagens executadas em São José dos Campos e Jacareí, com antes e depois.', main, jsonld: [breadcrumbJsonLd([['Início', 'index.html'], ['Obras', 'obras.html']])] };
}

// ----------------------------------------------------------------------------
// SOBRE
// ----------------------------------------------------------------------------
export function about() {
  const main = `
  ${pageHero({ eyebrow: 'Sobre a empresa', title: 'Engenharia com nome, CREA e <span style="color:var(--gold)">responsabilidade</span>', lead: `A Dadério & Aristides Engenharia e Construção nasceu em ${site.foundedYear} em São José dos Campos com uma convicção simples: obra boa é obra documentada. Desde então, regularizamos, projetamos, laudamos e construímos com um engenheiro civil respondendo pessoalmente por cada entrega.`, crumbs: [['Sobre', 'sobre.html']], image: images.team, alt: 'Equipe de obra com capacetes vista de baixo', actions: false,
    meta: [['Fundação', 'Outubro de 2018'], ['CNPJ', site.cnpj], ['Sede', 'São José dos Campos · SP']] })}

  <section class="section">
    <div class="container about-grid">
      <div class="reveal">
        <span class="eyebrow">Nossa história</span>
        <h2 class="display-l" style="color:var(--navy-900)">Sete anos construindo confiança no Vale</h2>
        <p class="lead" style="margin-top:1.25rem">Começamos como consultoria de engenharia e crescemos para execução de obras sem abrir mão do que nos trouxe até aqui: rigor técnico, transparência de prazo e atendimento direto com o engenheiro.</p>
        <div class="actions mt-2"><a class="btn btn--primary" href="${waDefault}" target="_blank" rel="noopener">${icons.whatsapp} Falar com o engenheiro</a><a class="btn btn--outline" href="obras.html">Ver obras ${icons.arrow}</a></div>
      </div>
      <div class="timeline reveal" data-delay="2">
        <!-- MARCOS ILUSTRATIVOS a partir de 2019 — confirmar com o cliente -->
        <div class="tl"><span class="tl__year">2018</span><h3>Fundação em São José dos Campos</h3><p>Abertura da Dadério Engenharia &amp; Consultoria, com foco em projetos, laudos e responsabilidade técnica para obras de terceiros.</p></div>
        <div class="tl"><span class="tl__year">2019</span><h3>Regularização como especialidade</h3><p>As primeiras dezenas de processos de regularização e Habite-se na Prefeitura de SJC definem o principal serviço da empresa.</p></div>
        <div class="tl"><span class="tl__year">2021</span><h3>Expansão para Jacareí</h3><p>Atendimento regular em Jacareí, com demanda crescente por regularização de chácaras e drenagem de lotes.</p></div>
        <div class="tl"><span class="tl__year">2023</span><h3>Execução de obras e drenagem</h3><p>Equipe própria para reformas, ampliações e obras de drenagem — projeto e execução sob o mesmo responsável técnico.</p></div>
        <div class="tl"><span class="tl__year">2026</span><h3>Nova presença digital</h3><p>Site, Google e canais alinhados à maturidade da empresa: quase oito anos de atuação, agora visíveis para quem procura.</p></div>
      </div>
    </div>
  </section>

  <section class="section paper-2">
    <div class="container">
      ${sectionHead({ eyebrow: 'Responsável técnico', title: 'Quem assina cada projeto' })}
      <div class="person corners corners--ink reveal">
        <div class="person__avatar">HD<small>Eng. civil · CREA-SP</small></div>
        <div>
          <h3>${esc(site.founder.name)}</h3>
          <div class="person__role">${esc(site.founder.title)} · Sócio-fundador</div>
          <p>Engenheiro civil com MBA em Gestão, responsável técnico pela Dadério &amp; Aristides desde a fundação. Atua pessoalmente no diagnóstico, no projeto e no acompanhamento junto às prefeituras de São José dos Campos e Jacareí — e assina a ART de tudo o que a empresa entrega.</p>
          <p>Especialista em regularização de edificações, aprovação de projetos, laudos técnicos e drenagem urbana, com experiência em obras residenciais, comerciais e condomínios fechados no Vale do Paraíba.</p>
          <!-- CREA ILUSTRATIVO — substituir pelo número real -->
          <ul class="creds">
            <li>Engenheiro Civil — ${esc(site.founder.crea)}</li>
            <li>MBA em Gestão de Negócios</li>
            <li>Responsável técnico desde 2018</li>
            <li>Atuação em SJC e Jacareí</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="section dark blueprint">
    <div class="container">
      ${sectionHead({ eyebrow: 'Como trabalhamos', title: 'Quatro compromissos em cada contrato', dark: true })}
      <div class="values">
        <div class="value reveal" data-delay="1"><span class="mono">01</span><h3>Responsabilidade técnica real</h3><p>ART em 100% dos serviços. O engenheiro que assina é o mesmo que visita, projeta e acompanha.</p></div>
        <div class="value reveal" data-delay="2"><span class="mono">02</span><h3>Prazo dito é prazo cumprido</h3><p>Cronograma por etapa, relatório semanal com fotos e aviso antecipado de qualquer variação.</p></div>
        <div class="value reveal" data-delay="3"><span class="mono">03</span><h3>Obra limpa e documentada</h3><p>As built, notas, garantias e ART baixada: o imóvel sai pronto para regularizar, vender ou financiar.</p></div>
        <div class="value reveal" data-delay="4"><span class="mono">04</span><h3>Atendimento direto</h3><p>Sem intermediário. Você fala com o engenheiro pelo WhatsApp e recebe resposta em até 1 hora útil.</p></div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      ${sectionHead({ eyebrow: 'Credenciais', title: 'Por que confiar', text: 'Experiência, especialização, autoridade e confiança — verificáveis.' })}
      <div class="eeat">
        <div class="reveal" data-delay="1"><span class="mono">Experiência</span><h3>Quase 8 anos de CNPJ ativo</h3><p>Fundada em 04/10/2018, a Dadério Engenharia &amp; Consultoria Ltda atua ininterruptamente em São José dos Campos e Jacareí com mais de uma centena de projetos, laudos e obras entregues.</p></div>
        <div class="reveal" data-delay="2"><span class="mono">Especialização</span><h3>Regularização e aprovação</h3><p>Conhecimento prático do código de obras e das rotinas de protocolo das prefeituras da região, o que reduz "comunique-se" e encurta prazos.</p></div>
        <div class="reveal" data-delay="3"><span class="mono">Autoridade</span><h3>Engenheiro civil registrado no CREA-SP</h3><p>Responsável técnico com formação em engenharia civil e MBA em Gestão. Laudos aceitos por seguradoras, condomínios e justiça.</p></div>
        <div class="reveal" data-delay="4"><span class="mono">Confiança</span><h3>Empresa formal, endereço e ART</h3><p>CNPJ ${site.cnpj}, sede física em São José dos Campos, contrato por escrito e ART em cada serviço. Sem "profissional avulso".</p></div>
      </div>
    </div>
  </section>

  ${testimonialsSection()}
  ${ctaBand()}
  `;
  const jsonld = [
    { '@context': 'https://schema.org', '@type': 'Person', name: site.founder.name, jobTitle: 'Engenheiro Civil', worksFor: { '@id': `${site.domain}/#organization` }, alumniOf: 'MBA em Gestão' },
    breadcrumbJsonLd([['Início', 'index.html'], ['Sobre', 'sobre.html']]),
  ];
  return { path: 'sobre.html', title: 'Sobre a Dadério & Aristides — Engenharia Civil em SJC desde 2018', description: 'Conheça a Dadério & Aristides Engenharia e Construção: fundada em 2018 em São José dos Campos, responsável técnico engenheiro civil com MBA, ART em todos os serviços. Regularização, projetos, laudos, drenagem e obras.', main, jsonld, ogImage: images.team };
}

// ----------------------------------------------------------------------------
// CONTATO
// ----------------------------------------------------------------------------
export function contact() {
  const main = `
  ${pageHero({ eyebrow: 'Contato', title: 'Fale com um <span style="color:var(--gold)">engenheiro</span>', lead: 'Descreva o que você precisa em menos de um minuto. O formulário abre uma conversa no WhatsApp já com as suas respostas — ou, se preferir, ligue ou envie e-mail.', crumbs: [['Contato', 'contato.html']], actions: false })}

  <section class="section">
    <div class="container contact">
      <form class="form reveal" id="contato-form" novalidate>
        <div class="form__head">
          <span class="mono text-red">Formulário qualificador</span>
          <h2 class="display-m">O que você precisa?</h2>
          <p>Quanto mais específico, mais rápida e precisa é a resposta.</p>
        </div>
        <div class="field--row">
          <div class="field"><label for="c-nome">Seu nome</label><input id="c-nome" name="nome" type="text" autocomplete="name" required placeholder="Nome e sobrenome"></div>
          <div class="field"><label for="c-tel">WhatsApp</label><input id="c-tel" name="telefone" type="tel" autocomplete="tel" inputmode="tel" placeholder="(12) 9 0000-0000"></div>
        </div>
        <div class="field--row">
          <div class="field"><label for="c-serv">Tipo de serviço</label><select id="c-serv" name="servico">${services.map((s) => `<option>${esc(s.title)}</option>`).join('')}<option>Ainda não sei — preciso de orientação</option></select></div>
          <div class="field"><label for="c-cid">Cidade</label><select id="c-cid" name="cidade">${cities.map((c) => `<option>${esc(c.name)}</option>`).join('')}<option>Outra cidade da região</option></select></div>
        </div>
        <div class="field"><label for="c-bairro">Bairro / condomínio (opcional)</label><input id="c-bairro" name="bairro" type="text" placeholder="Ex.: Jardim Aquarius, Urbanova, Jardim Paraíba"></div>
        <div class="field">
          <span class="mono">Urgência</span>
          <div class="radio-group">
            <label class="radio"><input type="radio" name="urgencia" value="Tenho prazo da prefeitura, banco ou condomínio" checked><div><strong>Tenho prazo correndo</strong><span>Notificação da prefeitura, exigência do banco ou do condomínio</span></div></label>
            <label class="radio"><input type="radio" name="urgencia" value="Preciso nas próximas semanas"><div><strong>Preciso nas próximas semanas</strong><span>Vou vender, financiar, reformar ou construir em breve</span></div></label>
            <label class="radio"><input type="radio" name="urgencia" value="Estou planejando"><div><strong>Estou planejando</strong><span>Quero entender caminho, prazos e investimento</span></div></label>
          </div>
        </div>
        <div class="field"><label for="c-msg">Conte rapidamente a situação</label><textarea id="c-msg" name="mensagem" placeholder="Ex.: casa ampliada sem projeto, preciso do Habite-se para financiamento até dezembro."></textarea></div>
        <div class="form__foot">
          <button class="btn btn--primary btn--lg" type="submit">${icons.whatsapp} Enviar pelo WhatsApp</button>
          <small>Abre o WhatsApp com a mensagem pronta. Resposta em até 1 hora útil.</small>
        </div>
        <div class="form__ok" id="contato-ok">Mensagem montada! Se o WhatsApp não abriu automaticamente, <a href="${waDefault}" target="_blank" rel="noopener">clique aqui</a> ou ligue para ${site.phoneDisplay}.</div>
      </form>

      <div class="info reveal" data-delay="2">
        <div class="info__card corners blueprint">
          <!-- ENDEREÇO FICTÍCIO — SUBSTITUIR ANTES DE PUBLICAR -->
          <div class="info__row">${icons.pin}<div><span class="mono">Escritório</span><p>${site.address.street} — ${site.address.district}<br>${site.address.city} – ${site.address.state}, CEP ${site.address.zip}</p></div></div>
          <div class="info__row">${icons.phone}<div><span class="mono">Telefone / WhatsApp</span><p><a href="tel:${site.phoneE164}">${site.phoneDisplay}</a></p></div></div>
          <div class="info__row">${icons.mail}<div><span class="mono">E-mail</span><p><a href="mailto:${site.email}">${site.email}</a></p></div></div>
          <div class="info__row">${icons.clock}<div><span class="mono">Horário</span><p>${site.hours}</p></div></div>
          <a class="btn btn--primary btn--block" href="${waDefault}" target="_blank" rel="noopener">${icons.whatsapp} Abrir conversa no WhatsApp</a>
        </div>
        <div class="map-wrap">
          <span class="mono">Área de atendimento · SJC e Jacareí</span>
          <iframe class="map" title="Mapa — São José dos Campos e Jacareí" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=S%C3%A3o+Jos%C3%A9+dos+Campos,+SP&z=11&output=embed"></iframe>
        </div>
      </div>
    </div>
  </section>

  ${areaSection()}
  `;
  return { path: 'contato.html', title: 'Contato — Fale com um Engenheiro | Dadério & Aristides', description: 'Fale com a Dadério & Aristides Engenharia: WhatsApp, telefone, e-mail e formulário qualificador. Atendimento em São José dos Campos e Jacareí, de segunda a sexta.', main, jsonld: [breadcrumbJsonLd([['Início', 'index.html'], ['Contato', 'contato.html']])] };
}
