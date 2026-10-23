# Levanah Tech

Base técnica do site oficial, com Astro e TypeScript em modo estrito.

## Comandos

Execute na raiz do projeto:

```sh
npm install
npm run dev
npm run build
npm run preview
npm test
```

No PowerShell, utilize `npm.cmd` se a política de execução bloquear `npm.ps1`.

- `dev`: inicia o servidor local de desenvolvimento.
- `build`: gera o site estático na pasta `dist/`.
- `preview`: permite conferir localmente o build gerado.
- `test`: verifica os comportamentos de navegação e motion em ambiente simulado, com Node.js 24 ou superior. Não substitui os testes no navegador.

Após o build, execute `node scripts/verify-home-build.mjs` para verificar conteúdo estático, âncoras e destinos do WhatsApp no HTML gerado.

## Estrutura

- `src/pages/`: páginas e rotas do Astro. A Home V1 está em `index.astro`.
- `src/components/`: seções da Home; `HomeMotion.astro` coordena a navegação e as entradas opcionais.
- `astro.config.mjs`: saída estática e URL pública opcional via `SITE_URL`.
- `tsconfig.json`: configuração do TypeScript.
- `AGENTS.md`: instruções do projeto.

O conteúdo é renderizado pelo Astro e permanece disponível sem JavaScript. Motion utiliza CSS e APIs nativas, com suporte a movimento reduzido. Consulte `docs/home-v1-review.md` para as evidências e as verificações visuais pendentes.

## Publicação estática na Cloudflare Pages

- Diretório raiz: raiz deste repositório.
- Comando de build: `npm run build`.
- Diretório de saída: `dist`.
- Variável de ambiente `NODE_VERSION`: `24.22.1` (versão usada na revisão local).
- Variável de ambiente `SITE_URL`: URL pública principal completa, com `https://`, assim que confirmada. Essa variável é pública e gera canonical, `og:url` e a URL absoluta da imagem de compartilhamento. Após defini-la ou mudar o domínio, é necessário gerar um novo build.

Não é necessário adaptador de servidor, Workers ou backend para esta Home. O contato funciona por links do WhatsApp; não há formulário de envio simulado. Sem `SITE_URL`, o site funciona, mas os metadados que dependem da URL pública ficam ausentes.

Antes de publicar, conferir o build em navegador desktop e celular, incluindo menu, âncoras e abertura do WhatsApp. Consulte `docs/home-v1-pre-publicacao.md` para o resultado da revisão técnica.
