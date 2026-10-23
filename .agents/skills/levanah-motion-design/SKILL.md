---
name: levanah-motion-design
description: Planejar e implementar UX/UI, microinterações e motion no frontend da Levanah Tech, com identidade D.2, acessibilidade e performance. Usar para criar ou refinar interações e jornadas visuais; para auditoria independente do resultado, usar levanah-frontend-review.
---

# Levanah Motion Design

Criar experiências claras e sofisticadas em que o movimento explique uma ação, confirme um estado ou conduza a atenção. Princípio da marca: **a interface não apenas se move; ela reage à luz**.

## Escopo e contexto

- Ler o AGENTS.md aplicável e os componentes, estilos e referências envolvidos na tarefa. Reutilizar tokens e padrões existentes antes de propor novos.
- Preservar o objetivo solicitado: planejamento entrega uma proposta; implementação entrega código e verificações. Invocar esta skill não autoriza alterar todo o site, instalar bibliotecas ou publicar.
- Aplicar a metodologia em páginas informativas e aplicações. Não pressupor um Hero, uma rota, um contato ou uma imagem específicos.
- Preservar funções, conteúdo, ativos aprovados e destinos reais. Não criar interações que sugiram capacidades ou integrações inexistentes.
- Esta skill orienta criação, implementação e verificação das alterações. `levanah-frontend-review` permanece responsável pela auditoria independente e abrangente; não duplicar suas instruções nem exigir sua disponibilidade para implementar motion.

## Direção D.2 e hierarquia

Usar noite e azul profundo como base, branco suave para informação e champagne com moderação em ações importantes e reflexos. A referência atual é noite `#080F17`, azul profundo `#0E1B2D`, champagne `#F4D9A7`, branco `#F8F9FB` e cinza `#9AA4B2`; consultar os tokens e as instruções vigentes antes de aplicá-la. Preservar títulos Montserrat e textos Inter quando adotados pelo produto.

- Fazer luz e movimento apoiar a hierarquia definida por tipografia, espaço e contraste. Reservar maior destaque para a ação principal; evitar que cartões e indicadores concorram com ela.
- Manter a referência lunar sutil e única quando existir. Preservar o cenário aprovado; não recriar uma lua por CSS nem acrescentar outra para justificar uma animação.
- Preferir resposta breve e discreta a movimento decorativo contínuo. Evitar neon, RGB, violeta como cor de marca, parallax excessivo e scroll hijacking.
- Tratar repouso, hover, foco, pressão, expansão e carregamento como uma mesma linguagem. Nunca depender do brilho para tornar texto legível.

## Planejar a interação

Antes de mudanças relevantes, definir brevemente intenção, componentes afetados e tecnologia proposta. Para cada comportamento, registrar o necessário para implementá-lo:

| Decisão | Pergunta útil |
| --- | --- |
| Finalidade | Que ação, relação ou mudança de estado fica mais compreensível? |
| Gatilho | É foco, ativação, ponteiro, entrada na viewport ou estado real da aplicação? |
| Hierarquia | Qual elemento recebe atenção primeiro e quais permanecem estáveis? |
| Alternativas | Como funciona por teclado, touch, sem JavaScript e com movimento reduzido? |
| Custo | O efeito exige execução contínua, repaint de área extensa ou nova dependência? |
| Aceite | Qual comportamento observável confirma que a interação funciona? |

Não implementar todos os efeitos por padrão. Selecionar os que melhoram a tarefa atual. Definir duração, amplitude e easing coerentes entre elementos relacionados. Como ponto de partida, microinterações frequentemente cabem em 120–220 ms e entradas suaves em 250–450 ms; não são regras universais. Ajustar ao contexto, sem atrasar controles ou serializar a leitura da página inteira.

## Escolher a tecnologia

| Opção | Usar quando | Limite e alternativa |
| --- | --- | --- |
| HTML e CSS | Foco/hover, reflexos, transições simples, expansão nativa e entradas sem lógica dinâmica. | Preservar semântica e fallback. Não adicionar JavaScript por conveniência. |
| JavaScript nativo | Coordenar estados reais, observar viewport, gerenciar foco personalizado ou responder ao ponteiro. | Preferir IntersectionObserver, matchMedia e Web Animations API quando adequados. Não usar listeners de scroll para cada cartão. |
| Biblioteca existente | Uma sequência, gesto ou componente complexo já depende dela e o uso reduz a complexidade total. | Limitar importação e carregamento; verificar teclado, touch e movimento reduzido. |
| Nova biblioteca | Recursos existentes não atendem adequadamente à necessidade concreta. | Explicar benefício, custo de bundle, manutenção e alternativas. Obter aprovação antes de instalar dependência significativa de produção, conforme AGENTS.md. |

Consultar documentação oficial para APIs ou compatibilidade incertas. Não exigir recursos experimentais nem prometer suporte sem verificação. Animações ligadas ao scroll podem ser aprimoramentos opcionais com detecção de suporte e experiência estática completa.

## Implementar

1. Construir ou preservar HTML semântico, navegação e estados reais antes do efeito. Manter conteúdo e CTAs utilizáveis sem animação.
2. Ler as partes pertinentes de [Padrões de interação](references/interaction-patterns.md): controles e cartões para microinterações; entradas para reveal; jornadas para etapas e progresso.
3. Implementar com CSS local ou tokens reutilizáveis quando houver repetição real. Em Astro, manter conteúdo estático em componentes Astro e limitar scripts às interações necessárias; em aplicações, seguir a arquitetura vigente.
4. Aplicar progressive enhancement. Conteúdo visível é o estado base; falha de script, falta de API, movimento reduzido ou elemento já em foco não podem deixá-lo invisível ou inacessível.
5. Preferir opacity e transform para movimento, reservando espaço no layout. Medir sombras, filtros e grandes gradientes antes de repeti-los; não são propriedades gratuitas. Não animar dimensões só para decorar nem usar `transition: all`.
6. Evitar leituras e escritas intercaladas de layout em eventos frequentes. Quando necessário, agrupar atualizações com requestAnimationFrame, reutilizar coordenadas e limitar a uma atualização pendente. Limpar observers, listeners e animações conforme o ciclo de vida do componente e da página.
7. Implementar alternativas touch, teclado e `prefers-reduced-motion` no mesmo ciclo. Reagir a mudanças dessa preferência em uso quando houver animações controladas por JavaScript.
8. Validar com [Checklist de validação](references/validation-checklist.md), corrigindo problemas da própria alteração dentro do escopo autorizado.

## Entrega

Explicar em português brasileiro o que mudou, por que a tecnologia escolhida é adequada, arquivos afetados e verificações realizadas. Distinguir **verificado no código**, **verificado no navegador** e **não verificado**. Não declarar responsividade, fluidez, contraste ou conformidade de acessibilidade apenas pelo build.

Para auditoria independente solicitada ou validação final relevante do frontend, utilizar `levanah-frontend-review` quando disponível. Se ausente, informar a limitação sem impedir a verificação desta implementação.
