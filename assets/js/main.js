/* ============================================================================
   Dadério & Aristides — main.js
   Vanilla JS, sem dependências. Cada bloco é independente e tolerante à
   ausência do elemento na página.
   ============================================================================ */
(function () {
  'use strict';
  document.documentElement.classList.remove('no-js');

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const WA_NUMBER = document.body.dataset.wa || '5512999990000';
  const waLink = (text) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Header: estado ao rolar ---------- */
  const header = $('.header');
  if (header) {
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- Menu mobile ---------- */
  const burger = $('.burger');
  if (burger) {
    burger.addEventListener('click', () => {
      const open = document.body.classList.toggle('nav-open');
      burger.setAttribute('aria-expanded', String(open));
    });
    $$('.nav__item--has-menu > .nav__link').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        if (window.innerWidth <= 960) {
          e.preventDefault();
          btn.parentElement.classList.toggle('is-open');
        }
      });
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 960) document.body.classList.remove('nav-open');
    });
  }

  /* ---------- Link ativo na navegação ---------- */
  const here = location.pathname.split('/').pop() || 'index.html';
  $$('.nav a[href]').forEach((a) => {
    const target = a.getAttribute('href').split('#')[0];
    if (target && target === here) {
      a.setAttribute('aria-current', 'page');
      const item = a.closest('.nav__item');
      if (item) item.classList.add('is-current');
    }
  });

  /* ---------- Scroll reveal ---------- */
  const revealEls = $$('.reveal');
  if (revealEls.length) {
    if (reduced || !('IntersectionObserver' in window)) {
      revealEls.forEach((el) => el.classList.add('in'));
    } else {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.04, rootMargin: '0px 0px -6% 0px' });
      revealEls.forEach((el) => io.observe(el));
    }
  }

  /* ---------- Contadores (setInterval — funciona mesmo sem rAF) ---------- */
  const counters = $$('[data-count]');
  if (counters.length) {
    const run = (el) => {
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || '';
      const duration = 1400;
      const start = Date.now();
      if (reduced) { el.textContent = target + suffix; return; }
      const timer = setInterval(() => {
        const t = Math.min(1, (Date.now() - start) / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (t >= 1) clearInterval(timer);
      }, 16);
    };
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) { run(entry.target); io.unobserve(entry.target); }
        });
      }, { threshold: 0.5 });
      counters.forEach((el) => io.observe(el));
    } else {
      counters.forEach(run);
    }
  }

  /* ---------- Antes / depois ---------- */
  $$('.ba').forEach((ba) => {
    const range = $('input[type="range"]', ba);
    if (!range) return;
    const set = (v) => ba.style.setProperty('--pos', `${v}%`);
    set(range.value);
    range.addEventListener('input', () => set(range.value));
    // suporte a toque/arrasto direto sem depender do range
    let dragging = false;
    const move = (clientX) => {
      const r = ba.getBoundingClientRect();
      const pct = Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100));
      range.value = pct;
      set(pct);
    };
    ba.addEventListener('pointerdown', (e) => { dragging = true; move(e.clientX); });
    window.addEventListener('pointermove', (e) => { if (dragging) move(e.clientX); });
    window.addEventListener('pointerup', () => { dragging = false; });
  });

  /* ---------- Simulador de regularização ---------- */
  const sim = $('#simulador-form');
  if (sim) {
    const result = $('#sim-result');
    const outPrazo = $('#sim-prazo');
    const outCusto = $('#sim-custo');
    const outCta = $('#sim-cta');
    const money = (n) => 'R$ ' + (Math.round(n / 100) * 100).toLocaleString('pt-BR');

    // Parâmetros ILUSTRATIVOS — ajustar com o cliente antes de publicar.
    const situacoes = {
      'sem-projeto':   { label: 'construído sem projeto aprovado', dias: [60, 120], m2: [38, 55] },
      'ampliacao':     { label: 'ampliação não averbada',          dias: [45, 90],  m2: [32, 48] },
      'sem-habitese':  { label: 'obra aprovada sem Habite-se',     dias: [30, 75],  m2: [18, 30] },
      'condominio':    { label: 'unidade em condomínio',           dias: [45, 90],  m2: [35, 50] },
    };
    const tipos = { residencial: { f: 1, label: 'residencial' }, comercial: { f: 1.25, label: 'comercial' }, misto: { f: 1.15, label: 'misto' } };
    const cidades = { sjc: { f: 1, label: 'São José dos Campos' }, jacarei: { f: 0.92, label: 'Jacareí' } };

    sim.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(sim);
      const sit = situacoes[data.get('situacao')] || situacoes['sem-projeto'];
      const tipo = tipos[data.get('tipo')] || tipos.residencial;
      const cid = cidades[data.get('cidade')] || cidades.sjc;
      const area = Math.max(30, Math.min(3000, parseFloat(data.get('area')) || 100));

      const diasMin = Math.round(sit.dias[0] * cid.f);
      const diasMax = Math.round(sit.dias[1] * cid.f);
      const custoMin = Math.max(2500, area * sit.m2[0] * tipo.f);
      const custoMax = Math.max(3900, area * sit.m2[1] * tipo.f);

      outPrazo.textContent = `${diasMin} a ${diasMax} dias`;
      outCusto.textContent = `${money(custoMin)} – ${money(custoMax)}`;
      const msg = `Olá! Fiz a simulação no site: imóvel ${tipo.label} em ${cid.label}, ${area} m², ${sit.label}. Estimativa: ${diasMin}–${diasMax} dias / ${money(custoMin)}–${money(custoMax)}. Quero a análise gratuita da matrícula.`;
      outCta.href = waLink(msg);
      result.classList.add('is-visible');
      result.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'nearest' });
    });
  }

  /* ---------- Filtros do portfólio ---------- */
  const filters = $('.filters');
  if (filters) {
    const works = $$('.work');
    filters.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-filter]');
      if (!btn) return;
      $$('button', filters).forEach((b) => b.classList.toggle('is-active', b === btn));
      const f = btn.dataset.filter;
      works.forEach((w) => w.classList.toggle('is-hidden', f !== 'all' && w.dataset.cat !== f && w.dataset.city !== f));
    });
  }

  /* ---------- Portfólio: toque alterna antes/depois (sem hover) ---------- */
  $$('.work__media').forEach((m) => {
    m.addEventListener('click', () => m.closest('.work').classList.toggle('show-before'));
  });

  /* ---------- Formulário de contato → WhatsApp ---------- */
  const form = $('#contato-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const d = new FormData(form);
      const urg = form.querySelector('input[name="urgencia"]:checked');
      const linhas = [
        `Olá! Meu nome é ${d.get('nome') || '—'}.`,
        `Serviço: ${d.get('servico') || '—'}.`,
        `Cidade: ${d.get('cidade') || '—'}${d.get('bairro') ? ' (' + d.get('bairro') + ')' : ''}.`,
        `Urgência: ${urg ? urg.value : '—'}.`,
        d.get('mensagem') ? `Detalhes: ${d.get('mensagem')}` : '',
        d.get('telefone') ? `Meu WhatsApp: ${d.get('telefone')}` : '',
      ].filter(Boolean);
      window.open(waLink(linhas.join('\n')), '_blank', 'noopener');
      const ok = $('#contato-ok');
      if (ok) ok.classList.add('is-visible');
    });
  }

  /* ---------- Imagens: fallback se a foto placeholder não carregar ---------- */
  $$('img[data-fallback]').forEach((img) => {
    img.addEventListener('error', () => {
      if (img.dataset.failed) return;
      img.dataset.failed = '1';
      img.src = img.dataset.fallback;
    }, { once: true });
  });
})();
