# Dadério & Aristides Engenharia e Construção — protótipo de site

Protótipo navegável para apresentação comercial. HTML/CSS/JS puro, sem dependências,
gerado por um script Node a partir de dados/conteúdo em `src/`.

## Como apresentar

```bash
node serve.mjs
```

Abre em <http://localhost:4321>. URLs limpas funcionam (`/jacarei`, `/drenagem`).
Também dá para abrir `index.html` direto no navegador (file://), mas o mapa do Google
e as fontes precisam de internet de qualquer forma.

## Estrutura

| Caminho | O que é |
|---|---|
| `index.html`, `*.html` | Páginas geradas (não editar à mão — rodar `node build.mjs`) |
| `src/data.mjs` | **Todo o conteúdo**: empresa, serviços, cidades, obras, depoimentos, fotos |
| `src/layout.mjs` | `<head>`, header, footer, JSON-LD, botão WhatsApp |
| `src/components.mjs` | Cards, antes/depois, simulador, mapa, CTA… |
| `src/pages.mjs` | Home, serviço, cidade, obras, sobre, contato |
| `assets/css/style.css` | Identidade visual (navy / vermelho / dourado / blueprint) |
| `assets/js/main.js` | Menu, reveal, contadores, slider antes/depois, simulador, filtros, form → WhatsApp |
| `build.mjs` | Gera as páginas + `sitemap.xml` + `robots.txt` |
| `serve.mjs` | Servidor estático local para demo |

## Sitemap

- `/` Home (hero, prova, serviços, urgência, antes/depois, processo, simulador, depoimentos, área, CTA)
- `/regularizacao-de-imovel` · `/aprovacao-de-projeto-prefeitura` · `/emissao-de-art` · `/laudo-tecnico` · `/drenagem` · `/reforma-e-obra`
- `/sao-jose-dos-campos` · `/jacarei`
- `/obras` · `/sobre` · `/contato`

## O que é fictício / placeholder (substituir antes de publicar)

Tudo está marcado no código com comentários `FICTÍCIO`, `ILUSTRATIVO` ou `PLACEHOLDER`:

- **Endereço, telefone/WhatsApp e e-mail** (`src/data.mjs` → `site`). O número do WhatsApp
  também está no `data-wa` do `<body>` (vem do mesmo lugar).
- **Depoimentos** (`testimonials`), **obras do portfólio** (`projects`) e **números** da faixa de prova
  (7+ anos é real; 120+ obras é ilustrativo).
- **CREA** do responsável técnico e **marcos da linha do tempo** a partir de 2019.
- **Fotos**: hotlinks do Unsplash (com fallback SVG se não carregarem). Trocar por fotos reais das obras.
- **Parâmetros do simulador** (`assets/js/main.js` → `situacoes`, `tipos`, `cidades`): faixas de prazo e
  R$/m² ilustrativas.
- **Domínio** `daderioaristides.com.br` (canonical, sitemap, JSON-LD) e handle do Instagram.
- Nomes de secretarias/sistemas de protocolo das prefeituras foram mantidos genéricos — confirmar com o cliente.

## Checklist para ir ao ar

1. Substituir os dados acima em `src/data.mjs` e rodar `node build.mjs`.
2. Trocar as fotos por imagens reais (idealmente WebP ≤ 200 KB) e apontar em `images`.
3. Conectar o formulário a um destino real se quiser além do WhatsApp (hoje ele abre o `wa.me` com a mensagem pronta).
4. Criar `assets/img/og.jpg` (1200×630) para compartilhamento em redes sociais.
5. Publicar em hospedagem estática (Vercel, Netlify, Cloudflare Pages) com URLs limpas
   (`cleanUrls: true` na Vercel) e enviar o `sitemap.xml` ao Google Search Console.
6. Criar/reivindicar o perfil no Google Business Profile com o mesmo NAP do site.
