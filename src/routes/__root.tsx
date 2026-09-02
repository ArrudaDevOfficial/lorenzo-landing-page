import {
  HeadContent,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import type { ReactNode } from 'react'
import appCss from '~/styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        title:
          'Dr. Lorenzo Noronha | Implantodontia em Santo Ângelo e São Miguel das Missões',
      },
      {
        name: 'description',
        content:
          'Segurança para sorrir, resultados feitos para durar. Dr. Lorenzo Noronha, CRO/RS 29.781, é especialista em Implantodontia e Reabilitação Oral em Santo Ângelo e São Miguel das Missões — implantes, sisos, prótese protocolo, prótese total e odontologia integrada.',
      },
      {
        name: 'keywords',
        content:
          'implantodontista Santo Ângelo, dentista São Miguel das Missões, implante dentário, prótese protocolo, prótese total, extração de siso, reabilitação oral',
      },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:title',
        content: 'Dr. Lorenzo Noronha | Segurança para sorrir, resultados feitos para durar',
      },
      {
        property: 'og:description',
        content:
          'Especialista em Implantodontia (CRO/RS 29.781). Planejamento individualizado, tecnologia e técnicas modernas em Santo Ângelo e São Miguel das Missões.',
      },
      { property: 'og:locale', content: 'pt_BR' },
      // Fundo do site é sempre branco (não segue o dark mode do sistema).
      { name: 'theme-color', content: '#f2f4f3' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        // Inter (fallback real de 'Creato Display' — fonte comercial, ver
        // styles.css). Iwona Light (títulos) é auto-hospedada via
        // @font-face em styles.css.
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap',
      },
      {
        rel: 'preload',
        href: '/fonts/IwonaLight-Regular.woff2',
        as: 'font',
        type: 'font/woff2',
        crossOrigin: 'anonymous',
      },
      { rel: 'icon', href: '/favicon.png', type: 'image/png' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
