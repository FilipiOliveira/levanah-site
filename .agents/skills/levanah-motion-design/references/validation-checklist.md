# Checklist de validação

Aplicar itens relevantes ao escopo. Marcar como **verificado**, **pendente** ou **não aplicável**, com evidência e ambiente. Não transformar esta lista em auditoria de partes não alteradas.

## Identidade e finalidade

- [ ] Cada efeito orienta, confirma uma ação ou explica a relação entre estados.
- [ ] Hierarquia de conteúdo e CTA continua clara; reflexos discretos respeitam D.2 e o cenário aprovado.
- [ ] Repouso, hover, foco e pressão são coerentes; nenhum efeito sugere integração ou progresso fictício.

## Navegação e acessibilidade

- [ ] Tab e Shift+Tab seguem ordem lógica; foco é visível e não recortado.
- [ ] Controles respondem às teclas de sua semântica; menus não prendem foco indevidamente.
- [ ] Estados expandidos, atuais e de progresso correspondem à interface e ao estado real.
- [ ] Texto, controles e foco mantêm contraste durante reflexos e transições; informação essencial não depende apenas de cor ou movimento.
- [ ] Conteúdo fechado não recebe foco; âncoras e elementos focados não ficam ocultos por entradas.
- [ ] `prefers-reduced-motion: reduce` mantém conteúdo e estados finais sem deslocamento ou espera decorativa. Testar mudança da preferência em uso se houver JavaScript.

## Responsividade e entradas

- [ ] Conferir 360, 390, 768, 1024 e 1440 px como referência do projeto e outros limites afetados por breakpoints.
- [ ] Testar touch sem hover, ponteiro e teclado; CTA não exige primeiro toque para revelar ação.
- [ ] Zoom de 200% e textos longos não causam cortes, sobreposição ou overflow horizontal.
- [ ] Abrir e fechar controles repetidamente não acumula animações nem estados inconsistentes.
- [ ] Para reveal, conferir scroll em ambos os sentidos, âncoras e restauração da posição da página.

## Progressive enhancement e performance

- [ ] Sem JavaScript ou com script indisponível, conteúdo e experiência base continuam utilizáveis; registrar funções que exigem JavaScript por natureza.
- [ ] APIs opcionais ausentes têm fallback estático; animação não é pré-requisito para leitura ou conversão.
- [ ] Imagens e componentes reservam espaço; entradas não provocam deslocamento do layout.
- [ ] Atualizações frequentes têm listeners, frames, leituras de layout e limpeza de ciclo de vida conferidos.
- [ ] Quando pertinente, inspecionar frames e pintura no navegador; registrar medições sem inferir fluidez ou CLS apenas do CSS.
- [ ] JavaScript, imports e dependências são proporcionais; não adicionar biblioteca apenas para hover ou fade simples.

## Verificação técnica e entrega

- [ ] Executar build e verificações disponíveis pertinentes à alteração, sem instalar ferramentas apenas para preencher o checklist.
- [ ] Conferir console e interações no navegador quando disponível; corrigir regressões próprias.
- [ ] Separar inspeção de código, build, teste no navegador e pontos não verificados.
- [ ] Registrar arquivos, decisão técnica e pendências. Sem navegador, deixar pendentes aparência, contraste renderizado, touch, teclado, zoom e performance visual.
- [ ] Para auditoria independente solicitada ou revisão final relevante, utilizar `levanah-frontend-review` quando disponível, mantendo seu relatório e escopo próprios.
