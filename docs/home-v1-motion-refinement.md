# Refinamento de motion da Home V1 — 22 de outubro de 2026

Escopo: Home existente, identidade D.2 e conteúdo aprovado. Aplicados AGENTS.md e levanah-motion-design, incluindo padrões de interação e checklist. A skill levanah-frontend-review não consta no catálogo da sessão nem foi encontrada nos diretórios locais de skills consultados; não foi realizada sua auditoria independente.

## Implementação

- Entradas pontuais por IntersectionObserver e Web Animations API, com opacidade de 0,2 a 1 e deslocamento de 22px em 440ms. Escalonamento de 70ms por elemento na mesma notificação, limitado a 210ms. `fill: backwards` aplica o início durante o pequeno intervalo de espera; ao concluir, a animação é removida. CSS base nunca oculta conteúdo.
- A entrada usa `translate` individual, preservando o `transform` do hover. Cartões têm iluminação, borda, sombra discreta e elevação de 3px com transições de 320ms; ícones respondem brevemente ao ponteiro fino. Cartões continuam informativos, sem tabindex ou aparência de botão.
- Progresso decorativo da metodologia calculado pela posição de leitura durante scroll nativo, com destaque da etapa atravessada pela linha de leitura. Sem porcentagens, progressbar ou conclusão fictícia. Usa o mesmo listener passivo e frame da navegação; medições são agrupadas antes das escritas.
- Princípio comercial realocado para a introdução da metodologia. Introdução acompanha a jornada somente em telas largas e com altura suficiente; Sobre recebe proporções e espaçamento mais equilibrados, com painel discreto para o texto existente.
- Microinterações compartilham easing e duração. Movimento reduzido elimina entradas, deslocamentos de hover e preenchimento progressivo; preserva destaque estático da etapa e foco visível. Mudança de preferência cancela animações em execução.
- Conteúdo focado, alvo de âncora e conteúdo inicialmente visível na restauração de scroll ficam estáticos. Uma âncora na URL não bloqueia entradas nas demais seções. Ausência de APIs opcionais preserva conteúdo e navegação nativa.

## Validação

- `npm.cmd run build`: aprovado, uma página estática gerada.
- `npm.cmd test`: 11 testes aprovados.
- `node scripts/verify-home-build.mjs`: aprovado, conteúdo estático, âncoras, destinos de WhatsApp, heading e metadados preservados.
- `git diff --check`: aprovado, apenas avisos de normalização LF/CRLF.
- Testes em DOM simulado cobrem navegação, menu, escalonamento, âncoras, restauração, progresso nos dois sentidos, movimento reduzido, APIs ausentes, foco e limpeza do ciclo de vida.
- Nenhuma dependência adicionada, nova rota, alteração de contato, commit, push ou publicação.
- Navegador indisponível: inventário da ferramenta retornou `apps: []` e `browsers: []`. Aparência, fluidez, contraste renderizado, teclado real, touch, zoom de 200%, console e performance visual permanecem sem validação.
- Conferir visualmente em 360, 390, 768, 1024 e 1440px; observar especialmente introdução sticky em telas baixas, linha da metodologia, entradas escalonadas e hover durante uma entrada. O build e os testes simulados não representam aprovação visual ou conformidade completa de acessibilidade.
