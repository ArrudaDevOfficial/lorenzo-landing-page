# Dr. Lorenzo Noronha — Landing Page

Landing page de captação de leads para odontologia, construída com [TanStack Start](https://tanstack.com/start) (React 19 full-stack, SSR) e Tailwind CSS v4.

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Build de produção

```bash
npm run build
npm run start
```

## Estrutura

- `src/routes/__root.tsx` — layout raiz, metadados de SEO e fontes (Cormorant Garamond, Parisienne, Karla).
- `src/routes/index.tsx` — página única: hero, sobre mim, serviços, localização e agendamento.
- `src/components/illustrations.tsx` — ilustrações SVG originais (placeholders) usadas no hero e nos cards de serviço.
- `src/styles.css` — tokens de tema (`@theme inline`) em `oklch`, com paleta sálvia/areia para modo claro e escuro.

## Adicionando as fotos reais dos serviços

Os cards de "Serviços" em `src/routes/index.tsx` reservam um espaço com proporção fixa (4:5) para cada foto, para não quebrar o layout quando as imagens chegarem. Enquanto `image` não é informado, o card mostra o placeholder tracejado com o ícone e "Foto em breve".

Para ativar uma foto, edite o array `SERVICES` e informe o caminho do arquivo (coloque a imagem em `public/services/` e aponte para `/services/arquivo.jpg`):

```ts
{
  icon: IconImplante,
  title: 'Implante',
  text: '...',
  image: '/services/implante.jpg', // ative assim que tiver a foto
},
```

## Antes de publicar

- [ ] Adicionar as fotos reais dos 5 serviços (veja acima) e o retrato do Dr. Lorenzo (`HeroPortrait` em `src/components/illustrations.tsx`).
- [ ] Atualizar `WHATSAPP_NUMBER` em `src/routes/index.tsx` com o número real (formato internacional, ex: `5555988887777`).
- [ ] Atualizar os links de Instagram e Facebook em `src/routes/index.tsx`.
- [ ] Confirmar endereços e horários das unidades de Santo Ângelo e São Miguel das Missões.
