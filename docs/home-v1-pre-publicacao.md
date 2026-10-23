# Revisão de pré-publicação — Home V1

Data: 23 de outubro de 2026.

## Aprovado tecnicamente

- Build de produção concluído: saída estática, uma página (`dist/index.html`), sem adaptador de servidor.
- Dependências locais resolvidas: Astro 7.3.5; Node.js 24.22.1 compatível com o requisito instalado (>=22.12.0). Lockfile presente. Nenhuma dependência adicionada. Não foi realizada auditoria online de vulnerabilidades.
- Onze testes de navegação e motion passaram em DOM simulado.
- Verificador do build passou: IDs únicos, âncoras existentes, um H1, conteúdo disponível sem JavaScript e cinco links do WhatsApp com proteção para nova aba.
- Número confirmado nos destinos: +55 (19) 98239-2167. Abertura do aplicativo e disponibilidade da conta não foram testadas.
- Arquivos locais referenciados por href/src e variantes responsivas srcset existem no build, incluindo favicon SVG provisório e imagens WebP.
- Título, descrição, idioma pt-BR, viewport, charset, theme-color e Open Graph básico presentes.
- Navegação divulga somente seções existentes da Home. Sem páginas internas inexistentes, links vazios ou formulário simulando envio.
- Conteúdo revisado sem clientes, depoimentos, resultados comerciais, certificações ou história de fundador inventados identificados.
- Inspeção das regras responsivas, menu nativo, foco visível, espaçamento das âncoras e suporte a movimento reduzido. Isso não substitui teste renderizado.
- `git diff --check` sem erros; apenas avisos de normalização de finais de linha em arquivos previamente alterados.

## Ajustes desta revisão

- `astro.config.mjs`: saída `static` explícita e leitura opcional de `SITE_URL` para alimentar os metadados já existentes no layout.
- `scripts/verify-home-build.mjs`: verificação independente do número informado e da existência dos arquivos locais e imagens responsivas geradas.
- `README.md`: parâmetros de publicação estática na Cloudflare Pages, versão local do Node e uso de `SITE_URL`.

Não houve alteração estética, novas seções, páginas, animações ou dependências. Alterações locais anteriores foram preservadas.

## Pendências para publicação

1. Confirmar a URL pública principal e definir `SITE_URL` no ambiente de build. Sem ela, canonical, og:url e og:image ficam ausentes. Não foi presumido domínio.
2. Conferir visualmente em desktop e celular: ausência de cortes/overflow, menu, rolagem das âncoras, foco por teclado e abertura do WhatsApp. O inventário da ferramenta retornou zero navegadores e aplicativos disponíveis, impedindo teste visual e inspeção de console nesta sessão.

O favicon provisório existente é funcional e não impede o lançamento. Fontes utilizam Google Fonts com alternativas locais; o carregamento remoto não foi exercitado.

## Parecer

Pronto tecnicamente para envio ao GitHub e configuração como site estático na Cloudflare Pages: build `npm run build`, saída `dist`, raiz do repositório, Node `24.22.1`. A aprovação final para publicação fica condicionada às duas pendências acima. Nenhum commit, push ou deploy executado.
