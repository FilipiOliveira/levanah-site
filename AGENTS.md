# AGENTS.md — Levanah Tech

## 1. Propósito do projeto

Este repositório contém o site oficial da Levanah Tech.

A Levanah Tech não deve ser posicionada apenas como uma empresa que desenvolve sites.

A Levanah é uma empresa de tecnologia focada em compreender problemas reais de pessoas e empresas e encontrar soluções digitais e tecnológicas adequadas para cada necessidade.

O site possui três objetivos principais:

1. Apresentar a Levanah Tech de forma profissional.
2. Construir confiança e demonstrar como a empresa pensa e resolve problemas.
3. Transformar visitantes em conversas com potenciais clientes.

A principal ação de conversão do site é:

"Conte seu desafio"

O WhatsApp será inicialmente o principal canal de contato, acompanhado de um formulário simples como alternativa.

O próprio site da Levanah Tech deve ser tratado como o primeiro case real da empresa:

Case #01 — Levanah Tech.


## 2. Princípios do produto e da marca

O site deve comunicar que o cliente não precisa saber previamente qual tecnologia necessita.

Uma das principais mensagens da marca é:

"Você não precisa saber se precisa de um site, uma automação ou inteligência artificial. Conte o problema. A tecnologia é a nossa parte."

A Levanah Tech deve ser percebida como:

- profissional;
- sofisticada;
- tecnológica;
- acessível;
- confiável;
- orientada à solução de problemas;
- preparada para evoluir para serviços tecnológicos cada vez mais complexos.

Não posicionar a Levanah como uma empresa de sites baratos.

Não apresentar artificialmente a empresa como maior, mais antiga ou mais experiente do que realmente é.

Nunca inventar:

- clientes;
- depoimentos;
- parceiros;
- premiações;
- números comerciais;
- resultados;
- anos de experiência;
- certificações;
- informações de contato;
- resultados de cases.

Projetos demonstrativos devem ser claramente identificados como:

"Projeto Conceitual"

Cases reais devem conter apenas informações verdadeiras e verificadas.


## 3. Filosofia comercial

A Levanah busca compreender primeiro o negócio e o problema do cliente antes de recomendar uma tecnologia.

A lógica comercial deve seguir aproximadamente:

Conhecer → Entender → Diagnosticar → Priorizar → Propor → Implementar → Acompanhar → Melhorar → Expandir

A tecnologia utilizada deve ser consequência do problema identificado.

Não recomendar uma solução mais cara ou complexa apenas porque o cliente possui orçamento para isso.

Princípio:

"Entregar a solução certa para o problema certo."

A recorrência com clientes deve existir por geração contínua de valor, acompanhamento e evolução, e não por dependência artificial.

O cliente deve manter propriedade e acesso aos seus ativos digitais sempre que aplicável.


## 4. Arquitetura inicial do site

Rotas previstas para a V1:

- `/` — Início
- `/solucoes` — Soluções
- `/projetos` — Projetos e cases
- `/sobre` — Sobre
- `/conte-seu-desafio` — Contato / diagnóstico inicial

Não criar páginas individuais para cada serviço durante a V1 sem solicitação explícita.

A página de Soluções deve mostrar possibilidades de atuação sem fazer essas soluções parecerem os limites permanentes da Levanah Tech.

Exemplos de áreas que podem ser apresentadas:

- presença digital;
- sites;
- landing pages;
- catálogos digitais;
- automações;
- inteligência artificial;
- agentes de IA;
- soluções personalizadas.

Essas categorias não devem ser tratadas como uma lista definitiva.

A página de Projetos deve priorizar a apresentação em formato de case:

Contexto → Desafio → Diagnóstico → Solução → Implementação → Resultado → Próximos passos

O primeiro case real é a própria Levanah Tech.

Projetos demonstrativos devem ser identificados claramente como conceituais.

A história completa do fundador e o conteúdo detalhado da página "Sobre" ainda estão pendentes.

Não inventar nem completar essa história sem instrução explícita.


## 5. Stack técnica

Stack principal da V1:

- Astro
- TypeScript
- HTML semântico
- CSS moderno
- JavaScript somente quando necessário

Astro deve ser o framework principal.

Priorizar componentes Astro para conteúdo estático ou predominantemente informativo.

Adicionar JavaScript no cliente apenas quando uma interação realmente exigir.

Não transformar o site em uma SPA React sem uma necessidade técnica clara.

React ou outro framework de interface poderá ser utilizado futuramente em componentes isolados caso exista necessidade real.

Priorizar recursos nativos do navegador, Astro e CSS antes de adicionar bibliotecas externas.


## 6. Dependências

Não adicionar dependências de produção apenas por conveniência.

Antes de adicionar uma dependência relevante, avaliar se o problema pode ser resolvido adequadamente com:

- Astro;
- TypeScript;
- CSS;
- APIs nativas do navegador;
- funcionalidades já disponíveis no projeto.

Quando uma nova dependência significativa realmente for necessária, explicar:

- qual problema ela resolve;
- por que os recursos existentes não são suficientes;
- qual será o impacto no projeto.

Solicitar aprovação antes de instalar dependências significativas de produção.

Evitar dependências pesadas para resolver problemas simples.


## 7. Arquitetura e qualidade do código

Priorizar soluções simples, claras e fáceis de manter.

Evitar abstrações prematuras.

Criar componentes reutilizáveis quando houver ganho real de:

- reutilização;
- organização;
- legibilidade;
- manutenção.

Manter os componentes com responsabilidades claras.

Utilizar TypeScript quando os tipos melhorarem clareza e segurança.

Evitar `any`, salvo quando existir justificativa técnica.

Utilizar HTML semântico sempre que apropriado.

Preferir nomes claros a abreviações pouco compreensíveis.

Identificadores de código podem utilizar inglês.

Exemplos:

- `Header`
- `HeroSection`
- `SolutionCard`
- `ContactForm`
- `handleSubmit`

Rotas e textos apresentados ao usuário devem utilizar português brasileiro.

Evitar comentários que apenas repetem o que o código já demonstra.

Não refatorar partes não relacionadas ao objetivo da tarefa atual.

Não criar arquitetura para necessidades hipotéticas que ainda não existem.


## 8. Design System

A identidade visual da Levanah Tech deve transmitir:

- sofisticação;
- tecnologia;
- profundidade;
- clareza;
- confiança;
- luz;
- evolução.

A direção visual principal utiliza:

### Azul-marinho profundo

Representa:

- ambiente;
- profundidade;
- base visual;
- sofisticação.

### Azul tecnológico

Representa:

- tecnologia;
- interação;
- movimento;
- elementos digitais.

### Dourado / champagne suave

Representa:

- Levanah;
- luz;
- reflexão;
- direção;
- ações importantes.

O dourado deve ser usado com moderação.

Sua raridade visual aumenta sua importância.

### Branco suave e tons neutros

Utilizados principalmente para:

- textos;
- informações secundárias;
- equilíbrio visual.

Violeta não faz parte da paleta principal da V1.

Evitar estética:

- gamer;
- RGB;
- neon excessivo;
- futurismo genérico;
- visual exageradamente espacial.

A identidade lunar deve ser sutil, geométrica e sofisticada.

Não utilizar várias luas competindo visualmente na mesma composição.

Deve existir, normalmente, apenas uma referência lunar protagonista.

A primeira impressão desejada deve ser:

"empresa de tecnologia sofisticada"

e não:

"site sobre espaço ou astronomia".


## 9. Logo e elementos gráficos

A direção do símbolo da Levanah utiliza uma interpretação geométrica e abstrata de:

- lua;
- sombra;
- luz;
- reflexão.

O símbolo deve funcionar bem em tamanhos pequenos, inclusive como favicon.

A marca deverá funcionar futuramente em versões:

- dourada sobre fundo escuro;
- branca;
- preta;
- monocromática.

Não criar novas versões do logo sem necessidade ou solicitação.

Elementos gráficos complementares podem utilizar:

- arcos;
- círculos incompletos;
- trajetórias;
- linhas de luz;
- referências sutis a órbita.

Esses elementos não devem transformar a interface em uma representação literal do espaço.


## 10. Motion Design

Princípio central do movimento:

"A interface da Levanah não apenas se move. Ela reage à luz."

Movimentos devem reforçar conceitos como:

- luz;
- reflexão;
- descoberta;
- tecnologia;
- resposta;
- órbita;
- evolução.

Exemplos apropriados:

- reflexo suave de luz em hover;
- iluminação azul discreta em elementos tecnológicos;
- reflexo dourado em ações importantes;
- conteúdo ganhando iluminação ao entrar na viewport;
- arcos ou linhas geométricas com movimento lento;
- iluminação discreta em links e menus;
- transições suaves entre seções.

Evitar:

- parallax excessivo;
- scroll hijacking;
- animações que atrasem o acesso ao conteúdo;
- movimento constante e distrativo;
- escalas exageradas;
- efeitos RGB;
- cursores personalizados sem necessidade;
- animações pesadas;
- bibliotecas grandes sem justificativa.

Priorizar CSS para animações simples.

Utilizar JavaScript somente quando necessário.

Respeitar:

`prefers-reduced-motion`

As animações devem degradar de maneira adequada em dispositivos móveis ou de menor desempenho.


## 11. Responsividade

O site deve funcionar corretamente desde o início em:

- smartphone;
- tablet;
- notebook;
- desktop.

Não tratar mobile como uma adaptação realizada somente depois da versão desktop.

Verificar responsividade durante o desenvolvimento de cada seção importante.

Evitar:

- textos cortados;
- overflow horizontal;
- botões pequenos demais;
- elementos sobrepostos;
- imagens deformadas;
- layouts dependentes de uma resolução específica.


## 12. Acessibilidade

Acessibilidade é requisito do projeto.

Garantir contraste adequado entre textos e fundos.

Elementos interativos devem possuir estados de foco visíveis.

Botões e links devem possuir identificação clara.

Formulários devem utilizar labels reais.

Mensagens de erro devem ser compreensíveis.

A navegação por teclado deve continuar funcional.

Imagens que transmitem informação devem possuir texto alternativo adequado.

Elementos puramente decorativos não devem gerar ruído desnecessário para tecnologias assistivas.


## 13. Performance

Performance é requisito do produto.

Manter JavaScript enviado ao navegador o menor possível.

Não enviar JavaScript para conteúdo que pode permanecer estático.

Otimizar imagens.

Utilizar formatos e dimensões adequados.

Evitar:

- vídeos de fundo pesados;
- imagens gigantes sem otimização;
- scripts externos desnecessários;
- bibliotecas grandes para pequenas funcionalidades.

Utilizar lazy loading quando apropriado, sem prejudicar conteúdo crítico ou estabilidade visual.

Sofisticação visual não deve transformar o site em uma experiência lenta.


## 14. SEO

SEO é importante para o site da Levanah Tech.

Utilizar estrutura HTML semântica.

Cada página pública deverá possuir, quando aplicável:

- título adequado;
- meta description;
- canonical;
- Open Graph;
- hierarquia correta de headings.

Utilizar corretamente:

- `h1`;
- `h2`;
- `h3`;
- elementos semânticos.

Escrever primeiro para pessoas.

Não criar textos apenas para repetir palavras-chave.

Dados estruturados devem representar somente informações verdadeiras.

Nunca inventar para SEO:

- avaliações;
- estrelas;
- endereço;
- serviços;
- clientes;
- dados empresariais;
- informações de organização.


## 15. Conteúdo e tom de voz

Todos os textos públicos devem utilizar português brasileiro, salvo quando houver necessidade específica.

O tom da Levanah deve ser:

- profissional sem ser rígido;
- tecnológico sem excesso de jargão;
- próximo sem parecer amador;
- sofisticado sem parecer inacessível;
- confiante sem fazer promessas exageradas.

Preferir explicações claras a termos técnicos utilizados apenas para impressionar.

A tecnologia deve aparecer como ferramenta para resolver problemas.

Tecnologia não é o objetivo final.

Evitar promessas como:

- "garantimos aumento de vendas";
- "IA vai transformar seu negócio";
- "resultados garantidos";
- "a melhor empresa";
- afirmações sem comprovação.

Não utilizar linguagem artificialmente grandiosa.


## 16. Essência da Levanah

O nome Levanah possui relação conceitual com a Lua.

A identidade nasce da ideia de reflexão de luz.

A origem cristã da marca pode ser apresentada de maneira apropriada principalmente em contextos institucionais, como a página Sobre.

A fé deve aparecer como origem de princípios e valores, e não como ferramenta comercial.

Conceito importante da marca:

"Queremos ser um reflexo de uma luz, e não um holofote na cara do cliente."

A referência à luz deve ser elegante e natural.

Evitar transformar todas as mensagens comerciais em metáforas lunares.


## 17. Experiência de contato

CTA principal:

"Conte seu desafio"

O visitante deve sentir que pode procurar a Levanah mesmo sem saber qual tecnologia necessita.

O formulário inicial deve ser curto.

Pode solicitar informações como:

- nome;
- empresa;
- contato;
- descrição do problema ou melhoria desejada;
- solução utilizada atualmente, opcionalmente;
- preferência de contato.

Não solicitar dados desnecessários.

Não inventar:

- telefone;
- WhatsApp;
- e-mail;
- domínio;
- redes sociais.

Se ainda não existir backend ou serviço configurado para envio de formulários, não simular que o formulário está funcionando.

Informar ou tratar claramente a integração como pendente até sua implementação.


## 18. Forma de trabalho do agente

Ler apenas o contexto necessário para realizar a tarefa atual.

Não ler todos os arquivos do projeto antes de qualquer pequena alteração.

Antes de alterações estruturais ou funcionalidades relevantes, definir brevemente a abordagem que será utilizada.

Para tarefas normais e seguras dentro do projeto, executar o trabalho solicitado sem pedir autorização a cada pequena alteração.

Utilizar bom senso para decisões menores de implementação que não alterem a estratégia do produto.

Solicitar aprovação antes de decisões que alterem significativamente:

- posicionamento da marca;
- identidade visual;
- arquitetura principal;
- stack;
- dependências importantes;
- coleta de dados;
- serviços externos;
- estratégia de deploy.

Nunca expor segredos.

Nunca inserir diretamente no código:

- senhas;
- tokens privados;
- API keys;
- credenciais.

Utilizar variáveis de ambiente quando necessário.

Nunca executar comandos destrutivos sem necessidade e aprovação.

Não realizar deploy sem solicitação explícita.

Não publicar o projeto sem solicitação explícita.

Não criar recursos pagos sem autorização.

Não alterar contas ou serviços externos sem autorização.

Não realizar `git push` sem solicitação explícita.

Não criar commits automaticamente sem solicitação explícita.


## 19. Validação

A validação deve ser proporcional à alteração realizada.

Após alterações relevantes de código, utilizar os testes, verificações ou comandos disponíveis que façam sentido para aquela mudança.

Após alterações estruturais importantes, verificar se o projeto consegue realizar build corretamente quando possível.

Ao modificar interface, verificar quando possível:

- responsividade;
- acessibilidade básica;
- erros visuais;
- regressões causadas pela alteração.

Corrigir problemas provocados pela própria alteração antes de considerar a tarefa concluída.

Não executar verificações excessivas e não relacionadas para mudanças triviais.


## 20. Aprendizado do proprietário

O proprietário deste projeto está desenvolvendo suas habilidades de programação enquanto utiliza inteligência artificial para construir produtos profissionais reais.

O objetivo não é apenas produzir código.

Também é importante que o proprietário compreenda gradualmente o sistema que está sendo construído.

Ao concluir tarefas relevantes, explicar brevemente em português brasileiro:

- o que foi alterado;
- por que foi feito dessa maneira;
- quais arquivos foram envolvidos;
- quais verificações foram realizadas.

Quando surgir um conceito de programação importante, explicá-lo de maneira simples e prática.

Não transformar toda tarefa em uma aula extensa.

A prioridade continua sendo entregar o projeto.

Os dois objetivos devem coexistir:

1. construir software profissional;
2. desenvolver gradualmente o conhecimento técnico do proprietário.


## 21. Princípio de engenharia

Quando várias abordagens puderem resolver o mesmo problema, preferir a solução mais simples que preserve:

- qualidade;
- acessibilidade;
- performance;
- manutenção;
- identidade visual;
- capacidade de evolução.

A tecnologia deve servir ao problema.

Não adicionar complexidade apenas porque existe uma solução tecnicamente mais sofisticada.


## 22. Evolução do projeto

Este documento representa as regras da versão atual do projeto.

Não adicionar novas regras ao AGENTS.md automaticamente sempre que surgir uma nova tarefa.

Adicionar apenas orientações que sejam realmente permanentes ou recorrentes.

Processos específicos, auditorias e fluxos ocasionais devem ser tratados por instruções específicas ou Skills quando apropriado.

Revisar este arquivo periodicamente.

Remover regras que deixarem de fazer sentido.

O AGENTS.md deve permanecer claro, útil e enxuto o suficiente para orientar o desenvolvimento sem gerar complexidade desnecessária.