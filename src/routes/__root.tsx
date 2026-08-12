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
        title: 'Dr. Lorenzo Noronha | Odontologia em Santo Ângelo e São Miguel das Missões',
      },
      {
        name: 'description',
        content:
          'Odontologia com calma, cuidado e confiança. Dr. Lorenzo Noronha atende em Santo Ângelo e São Miguel das Missões — implante, sisos, protocolo, prótese total e clínica geral. Agende sua avaliação online ou presencial.',
      },
      {
        name: 'keywords',
        content:
          'dentista Santo Ângelo, dentista São Miguel das Missões, implante dentário, cirurgia de sisos, protocolo dentário, prótese total, clínica geral odontológica',
      },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:title',
        content: 'Dr. Lorenzo Noronha | Odontologia com calma, cuidado e confiança',
      },
      {
        property: 'og:description',
        content:
          'Avaliação online ou presencial em Santo Ângelo e São Miguel das Missões. Escuta antes de tratar, no tempo do paciente.',
      },
      { property: 'og:locale', content: 'pt_BR' },
      {
        name: 'theme-color',
        content: '#f7f2e6',
        media: '(prefers-color-scheme: light)',
      },
      {
        name: 'theme-color',
        content: '#1c2a1a',
        media: '(prefers-color-scheme: dark)',
      },
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
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,500&family=Karla:wght@400;500;600;700&display=swap',
      },
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
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
