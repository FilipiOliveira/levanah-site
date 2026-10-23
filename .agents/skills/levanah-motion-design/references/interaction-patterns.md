# Padrões de interação

Consultar apenas os padrões pertinentes ao comportamento solicitado. Estes critérios orientam decisões; não exigem adicionar todos os efeitos à interface.

## Controles e navegação

- Botões: feedback imediato de hover, foco e pressão com leve iluminação, borda ou fundo. A pressão pode reduzir discretamente a intensidade do reflexo; não afastar o alvo do ponteiro nem atrasar ativação até terminar uma animação.
- Links: usar sublinhado, cor ou borda para ação e estado atual. Preservar foco visível; não usar somente cor para informação essencial.
- Menus: começar por controles nativos quando atendem ao fluxo. Em controles personalizados, manter nome acessível, `aria-expanded` coerente e relação com o conteúdo controlado. Conteúdo fechado não deve ficar na ordem de Tab ou na árvore de acessibilidade.
- Distinguir navegação expansível de diálogo modal. Não impor focus trap a uma lista de links. Em modal real, considerar foco inicial, Escape, contenção e retorno do foco ao acionador.
- Sincronizar estado semântico e visual; não deixar links invisíveis interativos durante fechamento. Cliques repetidos devem inverter ou encerrar efeitos sem acumular animações.
- Identificar o acionador de menu. Preservar destinos, âncoras, histórico e teclado; não interceptar scroll para encenar uma jornada.

## Iluminação e cartões

- Usar reflexo azul discreto como resposta tecnológica e champagne para uma ação importante. Separar decoração de texto e foco.
- Preferir pseudo-elemento com opacidade limitada e `pointer-events: none`. Não bloquear clique, seleção ou foco.
- Um cartão informativo não deve parecer clicável por receber um efeito. Quando houver ação, definir alvo semântico claro e evitar controles interativos aninhados.
- Reflexo que acompanha ponteiro é opcional: aplicar apenas em ponteiro fino com hover, limitar área ativa e atualizar por requestAnimationFrame. Desativar rastreamento fora do cartão, em touch e com movimento reduzido.
- Oferecer iluminação estática equivalente no foco de teclado. Em touch, manter estado base compreensível e resposta à ativação; não exigir hover ou primeiro toque para revelar CTA.
- Evitar inclinação 3D, grandes escalas e glow amplo em listas extensas. Se necessários por solicitação explícita, conferir leitura, enjoo, recorte, sobreposição e custo de pintura.

## Scroll reveal e entradas

- Não ocultar conteúdo crítico da primeira tela esperando JavaScript, fonte, animação ou observer. CTAs devem poder ser usados imediatamente.
- Manter estado base visível. Adicionar entrada breve após confirmar suporte e preferência de movimento. Uma opção robusta é observar a entrada e executar animação pontual, sem CSS global que deixe elementos invisíveis se o observer falhar.
- Preferir observer compartilhado por grupo e remover observação após entrada que não precisa se repetir. Não ressetar elementos ao rolar para trás sem necessidade de produto.
- Usar sequências curtas somente para esclarecer relação entre itens. Limitar delays para evitar espera cumulativa; não atrasar mensagens essenciais ou blocos longos.
- Se um elemento ganhar foco, for alvo de âncora ou estiver visível na restauração de scroll, apresentar diretamente. Não fazer o usuário perseguir controles em deslocamento.
- Com movimento reduzido, exibir estado final estático e eliminar deslocamento, escala, parallax e delays decorativos. Se a preferência mudar em uso, cancelar animações ativas e restaurar estilos finais.
- API ausente, script bloqueado ou exceção deve resultar em conteúdo disponível. Timeout tardio não pode ser o único mecanismo de recuperação de conteúdo oculto.

## Jornadas visuais e progresso

- Etapas institucionais descrevem uma metodologia. Numeração não significa que o visitante realizou algo; evitar conclusão fictícia.
- Em fluxo real, refletir etapa atual, conclusão e possibilidade de retorno. Usar `aria-current="step"` quando aplicável, com ordem de leitura e nomes claros.
- Progresso determinado: usar valores reais e semântica de `progress` ou equivalente acessível. Não inventar porcentagem para operação de duração desconhecida.
- Progresso indeterminado: oferecer texto claro e sinalização estática útil em movimento reduzido. Não anunciar frames ou variações mínimas por live region.
- Indicadores de leitura ou seção acompanham scroll nativo sem prender o usuário. Considerar teclado, âncoras, conteúdo dinâmico e mudanças de tamanho; preferir cálculo limitado a loop constante.
- Loading, vazio, erro e sucesso pertencem ao estado real. Animação de sucesso não substitui confirmação compreensível nem dispara integração inexistente.

## Responsividade, acessibilidade e custo

- Distinguir hover de tamanho de tela: tablets podem ter mouse e desktops podem ter touch. Usar media queries de capacidade para efeitos dependentes da entrada.
- Manter área de toque confortável, espaçamento e foco. Preferir cerca de 44–48 CSS px para controles principais, adaptando ao contexto e aos requisitos do produto.
- Preservar ordem do DOM e orientação visual; não criar com CSS uma sequência diferente da percorrida pelo teclado.
- Controlar overflow decorativo sem cortar outline ou gerar scroll horizontal. Não esconder defeitos com overflow indiscriminado no documento.
- Reservar dimensões de imagens e espaço de componentes assíncronos. Transforms também precisam respeitar espaço disponível, mesmo sem provocar reflow.
- Aplicar will-change por tempo limitado e apenas com gargalo identificado. Evitar filtros animados de tela inteira e camadas permanentes em todos os cartões.
- Movimento reduzido preserva foco, seleção, expansão, status e contraste com estados estáticos; não elimina os feedbacks essenciais.
