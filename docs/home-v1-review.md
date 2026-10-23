# Revisão da Home V1 — UX/UI e Motion

Revisão realizada em 7 de outubro de 2026, seguindo `levanah-frontend-review`, `levanah-motion-design` e o `AGENTS.md` da raiz. Escopo: somente a Home e seus componentes compartilhados. Alterações locais anteriores foram preservadas.

Não foram encontrados impedimentos concretos no código e nas verificações técnicas executadas. A validação visual permanece pendente: o inventário da ferramenta de navegador retornou nenhuma superfície disponível. Esta revisão não constitui aprovação visual nem declaração de conformidade completa de acessibilidade.

## Achados

| Prioridade | Localização | Evidência e impacto | Recomendação |
| --- | --- | --- | --- |
| Baixa — preexistente | `src/layouts/BaseLayout.astro:11` e `astro.config.mjs` | Verificado no código: `Astro.site` não foi configurado. Canonical, URL e imagem absoluta de Open Graph ficam ausentes no HTML. Isso limita os metadados de compartilhamento e a identificação da URL preferencial. Não impede uso da Home. | Configurar `site` quando o domínio oficial estiver confirmado. Não inventar endereço nem alterar estratégia de publicação nesta tarefa. |

Na revisão, foi corrigido o alcance dos seletores de CTA nos componentes Header e Contato: `:global(.challenge-cta)` permite aplicar os estilos ao link produzido pelo componente filho. O problema foi identificado no código; o resultado renderizado ainda precisa ser conferido.

## Alterações e intenção

- Header fixo com fundo legível também sem JavaScript, iluminação de links, sublinhado da seção atual e acabamento durante scroll. Um único listener passivo coordena atualizações por `requestAnimationFrame`. A altura medida define o espaço das âncoras. O menu continua sendo `details` nativo; JavaScript acrescenta fechamento ao navegar e retorno de foco ao summary com Escape.
- Hero com entrada breve do conteúdo por IntersectionObserver e Web Animations API. CTAs permanecem utilizáveis imediatamente. Cenário, enquadramento, textos e imagens aprovados não foram alterados.
- Soluções com cinco ícones SVG decorativos no mesmo padrão, reflexo azul por opacidade e elevação de 3px restrita a hover com ponteiro fino. Cartões continuam informativos, sem cursor ou semântica de botão. Revelação ocorre na entrada na viewport, sem estado CSS oculto.
- Metodologia em lista ordenada vertical conectada. Os indicadores são iluminados conforme a leitura avança, sem porcentagens, estado de conclusão fictício ou `aria-current="step"`. Em telas largas, o título acompanha a jornada com sticky; em telas menores, a ordem permanece linear.
- Sobre com ritmo de texto e destaque moderado da mensagem comercial; Contato com hierarquia do CTA e reflexo champagne ao receber foco; Footer com feedback discreto por cor e sublinhado.
- Conteúdo é estático em Astro. Nenhuma dependência foi adicionada. A integração de motion está isolada em `HomeMotion.astro`.

## Verificado no código e por comandos

- `npm.cmd run build`: aprovado, uma página gerada e quatro variantes WebP do cenário existente. O sandbox bloqueou o subprocesso do esbuild; a execução autorizada fora do sandbox passou.
- `node --test tests/home-motion.test.mjs`: oito testes aprovados em Node.js 24.21.0. Cobrem seção ativa, retorno ao Hero, fechamento mobile, Escape, ausência de IntersectionObserver/Web Animations, movimento reduzido inicial e em uso, foco, âncoras e limpeza com preservação do back/forward cache. São testes de comportamento com DOM simulado, sem navegador. O runner precisou de execução autorizada fora do sandbox.
- `node scripts/verify-home-build.mjs`: aprovado. Verifica conteúdo no HTML sem scripts, cinco links do WhatsApp com destino preservado, proteção de nova aba, âncoras resolvidas, IDs únicos, um h1, cinco cartões, seis etapas, descrição, menu nativo, prioridade do Hero e somente uma página gerada.
- `git diff --check`: aprovado; apenas avisos de normalização LF/CRLF.
- Script de motion no HTML gerado: **2.610 bytes antes de compressão**. Isso mede o tamanho emitido, não fluidez, velocidade de carregamento ou custo de execução.
- Inspeção: sem `transition: all`, loops permanentes, parallax, biblioteca de animação, nova lua ou conteúdo dependente de JavaScript. Pseudo-elementos decorativos não interceptam interação. Foco visível e fallback estático foram mantidos.
- `prefers-reduced-motion` elimina transições CSS; a preferência em uso cancela animações JavaScript. Animações também são canceladas quando conteúdo recebe foco ou há navegação por hash.
- Não há comando de lint, suíte anterior ou ferramenta de checagem de tipos Astro instalada. O build transpila o script, mas não substitui uma checagem completa de tipos.

## Verificado no navegador

Nenhum teste realizado: não havia navegador disponível para a ferramenta nesta sessão. O destino do WhatsApp foi verificado no HTML; abertura do aplicativo e envio de mensagem não foram exercitados.

## Verificações pendentes

- Tamanhos de 360, 390, 768, 1024 e 1440px; conferir também os breakpoints de 640, 900 e 1100px, cortes, overflow e enquadramento lunar.
- Zoom de 200%, telas baixas e rolagem do menu expandido; conferir foco e âncoras sob o header fixo e o título sticky da metodologia.
- Tab/Shift+Tab, Enter e Escape reais; abrir e fechar menu repetidamente, navegar de volta e testar restauração de scroll.
- Hover com mouse e uso por touch, estados dos CTAs e abertura do WhatsApp.
- Movimento reduzido inicial e mudança da preferência durante uma entrada; ausência de JavaScript e APIs opcionais no navegador.
- Contraste renderizado, hierarquia visual, intensidade dos reflexos, carregamento de fontes, console, fluidez, pintura e estabilidade de layout. Nenhuma métrica de acessibilidade ou performance foi presumida.

Sem commits, push, novas rotas, instalação de dependências ou publicação.
