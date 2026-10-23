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
- `astro.config.mjs`: configuração mínima do Astro.
- `tsconfig.json`: configuração do TypeScript.
- `AGENTS.md`: instruções do projeto.

O conteúdo é renderizado pelo Astro e permanece disponível sem JavaScript. Motion utiliza CSS e APIs nativas, com suporte a movimento reduzido. Consulte `docs/home-v1-review.md` para as evidências e as verificações visuais pendentes.
