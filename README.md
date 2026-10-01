# Rodrigo Generoso — Portfólio

Portfólio pessoal de **Rodrigo César de Andrade Fayad Generoso**, estudante de Engenharia de Software no CEUB,
com foco em Inteligência Artificial, Dados e Desenvolvimento de Software.

- Site bilíngue (**PT | EN**) com preferência salva no navegador
- Case study completo: **Sistema de Gestão Social — Associação Viver Divino** (Engenharia de Requisitos)
- Experiência de scroll com **GSAP + ScrollTrigger**, respeitando `prefers-reduced-motion`
- Pronto para **GitHub Pages** (deploy automático por GitHub Actions)

**Stack:** React 19 · Vite 8 · JavaScript · CSS moderno · GSAP/ScrollTrigger · Lucide Icons · Fontsource (fontes self-hosted)

---

## Requisitos

- **Node.js** 20.19+ ou 22.12+ (recomendado: 22 LTS)
- npm (vem com o Node)

## Comandos

```bash
npm install        # instala as dependências
npm run dev        # servidor de desenvolvimento em http://localhost:5173
npm run build      # gera a versão de produção em dist/
npm run preview    # serve a pasta dist/ localmente (http://localhost:4173)
npm run lint       # verifica o código com ESLint
```

---

## Estrutura do projeto

```
├── index.html                      # página inicial (SEO, Open Graph, JSON-LD)
├── case-study/viver-divino/        # página do case (entrada HTML própria)
├── 404.html                        # página "não encontrada" do GitHub Pages
├── public/                         # arquivos servidos como estão (favicon, og-image, currículo…)
├── vite.config.js                  # base path, páginas, sitemap/robots, detecção do currículo
├── .github/workflows/deploy.yml    # deploy automático no GitHub Pages
└── src/
    ├── entries/                    # ponto de entrada de cada página
    ├── pages/                      # HomePage e CaseStudyPage
    ├── sections/                   # seções da home (Hero, About, Skills, …) e do case (case/)
    ├── components/                 # Navbar, Footer, ImageViewer (lightbox), Modal, TypingText…
    ├── hooks/                      # scroll, idioma ativo, typing, media queries…
    ├── animations/                 # configuração do GSAP e animações de scroll declarativas
    ├── i18n/                       # sistema interno de tradução (sem serviços externos)
    ├── locales/                    # textos da interface: pt.js e en.js
    ├── data/                       # conteúdo estruturado: projetos, skills, experiência, case…
    ├── assets/images/              # imagens otimizadas (webp/avif)
    └── styles/                     # tokens de design, base, componentes, home e case
```

---

## Como editar o conteúdo

| O que mudar | Onde |
| --- | --- |
| Textos da interface e das seções | `src/locales/pt.js` e `src/locales/en.js` (mesma estrutura nos dois) |
| Projetos | `src/data/projects.js` |
| Competências | `src/data/skills.js` |
| Experiência | `src/data/experience.js` |
| Case Viver Divino | `src/data/caseStudy.js` |
| Links, e-mail, WhatsApp, foto | `src/data/profile.js` |

Campos bilíngues usam o formato `{ pt: '…', en: '…' }`.

### Adicionar um novo projeto

1. Salve um screenshot (≈1200 px de largura, formato `.webp`) em `src/assets/images/`.
   Uma versão menor (≈640 px) melhora o carregamento no celular.
2. Importe as imagens no topo de `src/data/projects.js`.
3. Copie um objeto existente e preencha:

```js
{
  id: 'meu-projeto',
  title: { pt: 'Nome do projeto', en: 'Project name' },
  category: { pt: 'Categoria', en: 'Category' },
  description: { pt: 'Descrição…', en: 'Description…' },
  highlight: { pt: 'Um destaque verificável', en: 'A verifiable highlight' }, // opcional
  technologies: ['React', 'Python'],
  image: screenshot(minhaImagemGrande, minhaImagemPequena),
  liveUrl: 'https://…',
  githubUrl: 'https://github.com/rodrigofayaad22-tech/…', // null esconde o botão
  hosting: 'Hostinger',                                    // opcional
  featured: true,                                          // false esconde o projeto
}
```

Os projetos aparecem alternando imagem à esquerda/direita automaticamente.

### Ativar o botão "Baixar currículo"

O botão fica **oculto** até existir o arquivo:

```
public/curriculo-rodrigo-generoso.pdf
```

Coloque o PDF com esse nome e rode `npm run build` (ou reinicie o `npm run dev`).
O botão aparece sozinho na seção de contato. Para removê-lo, basta apagar o arquivo.

---

## Idiomas

- O idioma inicial é o salvo pelo visitante (`localStorage`) ou, na primeira visita, o idioma do navegador
  (português → PT; outros → EN).
- A troca é instantânea e atualiza `<html lang>`, título da aba e meta description.
- Não há tradução automática: todo texto existe nas duas versões.

## Animações e acessibilidade

- As animações são declaradas com atributos (`data-anim`, `data-anim-stagger`, `data-scrub`…)
  e interpretadas em `src/animations/scrollAnimations.js`.
- Com `prefers-reduced-motion: reduce`, nenhuma animação de entrada é aplicada: o conteúdo aparece direto.
- No celular, deslocamentos laterais e parallax são desativados automaticamente.
- HTML semântico, navegação por teclado, foco visível, link "pular para o conteúdo",
  modais acessíveis (`<dialog>`: foco preso, **Esc** fecha, foco devolvido) e textos alternativos.
- O visualizador do BPMN aceita roda do mouse/pinça para zoom, arrastar para mover, toque duplo,
  teclas `+` `−` `0` e setas.

---

## Publicação no GitHub Pages

O workflow `.github/workflows/deploy.yml` faz build e publica a cada `push` na branch `main`.
Ele detecta sozinho o endereço do site, então funciona com qualquer nome de repositório.

### 1. Escolha o nome do repositório

| Nome do repositório | Endereço do site |
| --- | --- |
| `rodrigofayaad22-tech.github.io` (recomendado) | `https://rodrigofayaad22-tech.github.io/` |
| qualquer outro, ex.: `portfolio` | `https://rodrigofayaad22-tech.github.io/portfolio/` |

### 2. Envie o código

```bash
git init
git add .
git commit -m "Portfólio inicial"
git branch -M main
git remote add origin https://github.com/rodrigofayaad22-tech/NOME-DO-REPOSITORIO.git
git push -u origin main
```

### 3. Ative o Pages (apenas uma vez)

No GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

Depois disso, acompanhe em **Actions**. Quando o job terminar, o site estará no ar.
Cada novo `push` na `main` publica uma nova versão.

### Build manual (opcional)

Se quiser gerar o build para outro caminho sem o GitHub Actions, defina `BASE_PATH` e `SITE_URL`
(veja `.env.example`):

```bash
BASE_PATH=portfolio SITE_URL=https://rodrigofayaad22-tech.github.io/portfolio npm run build
```

> No **Git Bash (Windows)** escreva `BASE_PATH=portfolio` **sem a barra inicial**: o Git Bash converte
> `/portfolio/` em um caminho do Windows. No PowerShell: `$env:BASE_PATH="/portfolio/"; npm run build`.

### Domínio próprio (opcional)

Configure o domínio em **Settings → Pages → Custom domain**. O workflow usa o endereço informado pelo
GitHub, então canonical, Open Graph e sitemap acompanham o novo domínio.

---

## SEO

- `title`, `description`, canonical, Open Graph, Twitter Card e dados estruturados (JSON-LD) em cada página
- `sitemap.xml` e `robots.txt` gerados no build com o endereço correto
- Imagem de compartilhamento: `public/og-image.jpg` (1200×630)

## Observações sobre o conteúdo

- O case **Viver Divino** foi um projeto acadêmico de **Engenharia de Requisitos**, feito em equipe:
  o site apresenta análise, modelagem e especificação, **sem** afirmar que um software foi implementado.
- Os documentos originais do projeto (DOCX/PPTX) **não** são publicados no site.
