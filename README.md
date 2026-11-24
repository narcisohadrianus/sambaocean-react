# Site institucional — SAMBA OCEAN

Site da **SAMBA OCEAN – PRESTAÇÃO DE SERVIÇOS, Lda.** (Talatona, Luanda, Angola):
logística, transporte interprovincial, equipas de estiva e aluguer de máquinas com operador.

Feito em **React + Vite**, sem servidor (site estático). Os textos vêm da Apresentação Comercial 2026
(`conteudo/apresentacao.md`).

## Páginas

| Endereço       | Página                                                                   |
| -------------- | ------------------------------------------------------------------------ |
| `/`            | Início (hero, quem somos, serviços, como actuamos, sectores, porquê nós) |
| `/sobre`       | Sobre Nós (quem somos, missão, visão, valores, qualidade, dados oficiais) |
| `/servicos`    | Serviços (`#transporte`, `#estiva`, `#maquinas`, `#como-actuamos`)       |
| `/sectores`    | Sectores, capacidade de resposta e rede (mapa de cobertura)              |
| `/porque-nos`  | Porquê a Samba Ocean? (seis diferenciais, qualidade e execução)          |
| `/contactos`   | Contactos, mapa e formulário de pedido de proposta (e-mail / WhatsApp)   |

## Como correr no computador

É preciso ter o [Node.js](https://nodejs.org) (versão 18 ou mais recente).

```bash
npm install      # só da primeira vez
npm run dev      # abre em http://localhost:5173
```

## Como gerar a versão final

```bash
npm run build
```

O site pronto fica na pasta **`dist/`**. Para ver essa versão localmente: `npm run preview`.

## Onde alterar textos e imagens

- **Textos** (serviços, contactos, missão, valores, títulos das páginas, etc.): `src/data/site.js`.
  Altere o texto entre aspas e volte a correr `npm run build`.
- **Imagens**: pasta `public/img/`. Para trocar uma foto, substitua o ficheiro mantendo o mesmo nome
  (ou altere o caminho e as medidas `w`/`h` em `src/data/site.js`, na secção `images`).
- **Logótipos**: `public/img/logo.png`, `logo-branco.png`, `simbolo.png`, `simbolo-branco.png`.
- **Ícone do separador**: `public/favicon.ico`, `public/favicon-32.png`, `public/apple-touch-icon.png`.
- **Cores e tipos de letra**: `src/styles/base.css` (variáveis no início do ficheiro).
- **Dados para o Google / partilha** (título, descrição, dados da empresa): `index.html`.

## Publicar na Hostinger

1. Corra `npm run build`.
2. No hPanel da Hostinger, abra **Ficheiros → Gestor de Ficheiros** e entre na pasta `public_html`
   do domínio `sambaocean.com`.
3. Apague o conteúdo antigo de `public_html` (se houver) e envie **todo o conteúdo** da pasta `dist/`
   (não a pasta em si): `index.html`, `assets/`, `img/`, `.htaccess`, `robots.txt`, `sitemap.xml`
   e os ícones.
4. Confirme que o ficheiro **`.htaccess`** foi enviado (é um ficheiro oculto). Ele faz com que endereços
   como `/servicos` ou `/contactos` funcionem ao recarregar a página, e define a cache dos ficheiros.
5. Depois de activar o SSL (HTTPS) na Hostinger, pode retirar o `#` das linhas
   "Forçar HTTPS e www" no `.htaccess` para redireccionar sempre para `https://www.sambaocean.com`.

## Formulário de proposta

O formulário não usa servidor: depois de validar os campos, abre uma mensagem já preenchida no
programa de e-mail (para `geral@sambaocean.com`) ou no WhatsApp (+244 924 188 376). Os dados
não ficam guardados no site.
