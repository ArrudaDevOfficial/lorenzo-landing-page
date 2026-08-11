import { createFileRoute } from '@tanstack/react-router'
import { Calendar, MapPin, Clock, ArrowRight, Image as ImageIcon } from 'lucide-react'
import type { ComponentType } from 'react'
import {
  HeroPortrait,
  IconImplante,
  IconSisos,
  IconProtocolo,
  IconProtese,
  IconClinicaGeral,
  IconWhatsapp,
  IconInstagram,
  IconFacebook,
  IconPin,
} from '~/components/illustrations'

export const Route = createFileRoute('/')({
  component: Home,
})

// TODO: substituir pelo número real em formato internacional (ex: 5555988887777)
const WHATSAPP_NUMBER = '5555999999999'
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Olá, Dr. Lorenzo! Gostaria de agendar uma avaliação.',
)
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

type Service = {
  icon: ComponentType<{ className?: string }>
  title: string
  text: string
  /** Caminho da foto real do procedimento. Deixe undefined para manter o placeholder reservado. */
  image?: string
}

const SERVICES: Service[] = [
  {
    icon: IconImplante,
    title: 'Implante',
    text: 'Reposição de dentes ausentes com planejamento cuidadoso, do exame ao acompanhamento pós-cirúrgico.',
  },
  {
    icon: IconSisos,
    title: 'Sisos',
    text: 'Avaliação e extração de terceiros molares com conforto, explicando cada etapa antes de começar.',
  },
  {
    icon: IconProtocolo,
    title: 'Protocolo',
    text: 'Prótese fixa sobre implantes para devolver função e naturalidade ao sorriso, com estabilidade no dia a dia.',
  },
  {
    icon: IconProtese,
    title: 'Prótese Total',
    text: 'Reabilitação completa pensada no seu conforto ao falar, mastigar e sorrir com segurança.',
  },
  {
    icon: IconClinicaGeral,
    title: 'Clínica Geral',
    text: 'Prevenção, restaurações e cuidado contínuo — a base de uma saúde bucal tranquila e duradoura.',
  },
]

const UNITS = [
  {
    city: 'Santo Ângelo',
    address: 'Rua Antônio Manoel, 1200 — Centro, Santo Ângelo/RS',
    hours: 'Segunda a sexta, 8h às 18h',
  },
  {
    city: 'São Miguel das Missões',
    address: 'Av. das Missões, 350 — Centro, São Miguel das Missões/RS',
    hours: 'Terças e quintas, 8h às 17h',
  },
] as const

const NAV_LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#localizacao', label: 'Localização' },
] as const

function Home() {
  return (
    <main className="bg-background text-foreground">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -right-40 size-[32rem] rounded-full bg-sage/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-24 size-96 rounded-full bg-sand-warm/30 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:px-8 md:grid-cols-2 md:items-center md:py-24 lg:py-28">
          <div className="order-2 md:order-1">
            <p className="font-script text-3xl text-sage-deep sm:text-4xl">
              cuidado que acompanha
            </p>
            <h1 className="text-balance mt-2 font-serif text-4xl leading-[1.1] font-medium text-foreground md:text-6xl">
              Odontologia com calma, cuidado e confiança
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              Sou o Dr. Lorenzo Noronha, cirurgião-dentista em{' '}
              <strong className="font-semibold text-foreground">Santo Ângelo</strong> e{' '}
              <strong className="font-semibold text-foreground">São Miguel das Missões</strong>.
              Aqui, todo tratamento começa com escuta — a explicação acontece
              no seu tempo, antes de qualquer decisão.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-medium text-primary-foreground shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.98] motion-reduce:hover:scale-100"
              >
                <Calendar className="size-5" aria-hidden="true" />
                Agendar avaliação
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center gap-1.5 rounded-xl px-4 py-3.5 font-medium text-sage-deep underline-offset-4 hover:underline"
              >
                Conhecer os atendimentos
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-6 text-sm text-muted-foreground">
              {['Escuta ativa', 'Avaliação sem pressa', 'Duas unidades na região'].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="size-1.5 shrink-0 rounded-full bg-sage" aria-hidden="true" />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="order-1 md:order-2">
            <HeroPortrait className="mx-auto w-full max-w-sm drop-shadow-xl md:max-w-md" />
          </div>
        </div>
      </section>

      {/* SOBRE MIM */}
      <section id="sobre" className="border-y border-border bg-card">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center sm:px-8 md:py-24">
          <p className="font-script text-3xl text-sage-deep sm:text-4xl">
            sobre mim
          </p>
          <h2 className="text-balance mt-2 font-serif text-3xl font-medium md:text-4xl">
            Escuto antes de tratar
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Ao longo da minha trajetória em odontologia, aprendi que um bom
            tratamento começa muito antes da cadeira: começa na conversa. Cada
            pessoa chega com uma história diferente com o dentista, e é essa
            história que eu ouço primeiro. Explico cada etapa no tempo de
            quem está sendo atendido, sem pressa, para que a decisão sobre o
            próprio sorriso seja sempre tranquila e informada. A avaliação
            pode ser feita online ou presencialmente, em Santo Ângelo ou em
            São Miguel das Missões — o primeiro passo é sempre simples.
          </p>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="mx-auto max-w-6xl px-6 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-script text-3xl text-sage-deep sm:text-4xl">
            serviços
          </p>
          <h2 className="text-balance mt-2 font-serif text-3xl font-medium md:text-4xl">
            Cuidado em cada etapa do seu sorriso
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section id="localizacao" className="border-y border-border bg-sand/40">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-script text-3xl text-sage-deep sm:text-4xl">
              onde estou
            </p>
            <h2 className="text-balance mt-2 font-serif text-3xl font-medium md:text-4xl">
              Duas unidades para atender você
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {UNITS.map((unit) => (
              <article
                key={unit.city}
                className="rounded-2xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-sage/15 text-sage-deep">
                    <IconPin className="size-5" />
                  </span>
                  <h3 className="font-serif text-2xl font-medium">
                    {unit.city}
                  </h3>
                </div>
                <p className="mt-5 flex items-start gap-2.5 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  <span className="min-w-0">{unit.address}</span>
                </p>
                <p className="mt-2 flex items-start gap-2.5 text-sm text-muted-foreground">
                  <Clock className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  <span className="min-w-0">{unit.hours}</span>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AGENDAMENTO + REDES */}
      <section id="agendar" className="mx-auto max-w-4xl px-6 py-16 text-center sm:px-8 md:py-24">
        <h2 className="text-balance font-serif text-3xl font-medium md:text-4xl">
          Vamos cuidar do seu sorriso, no seu tempo.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
          Marque uma avaliação online ou presencial em Santo Ângelo ou São
          Miguel das Missões.
        </p>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-medium text-primary-foreground shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.98] motion-reduce:hover:scale-100"
        >
          <IconWhatsapp className="size-5" />
          Falar no WhatsApp
        </a>

        <div className="mt-10 flex items-center justify-center gap-5">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Conversar no WhatsApp"
            className="flex size-11 items-center justify-center rounded-full border border-border text-sage-deep transition-colors hover:bg-sage/10"
          >
            <IconWhatsapp className="size-5" />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Seguir no Instagram"
            className="flex size-11 items-center justify-center rounded-full border border-border text-sage-deep transition-colors hover:bg-sage/10"
          >
            <IconInstagram className="size-5" />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Seguir no Facebook"
            className="flex size-11 items-center justify-center rounded-full border border-border text-sage-deep transition-colors hover:bg-sage/10"
          >
            <IconFacebook className="size-5" />
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 sm:px-8">
        <a href="#" className="font-serif text-lg tracking-tight">
          Lorenzo <span className="text-sage-deep">Noronha</span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-transform hover:scale-[1.03] active:scale-[0.98] motion-reduce:hover:scale-100"
        >
          Agendar
        </a>
      </div>
    </header>
  )
}

function ServiceCard({ service }: Readonly<{ service: Service }>) {
  const { icon: Icon, title, text, image } = service

  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:hover:translate-y-0">
      <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-sage/15 via-card to-sand/30">
        {image ? (
          <img
            src={image}
            alt={`Foto ilustrativa do procedimento de ${title}`}
            width={640}
            height={800}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-3 flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-sage/25">
            <Icon className="size-14 opacity-80" />
            <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              <ImageIcon className="size-3.5" aria-hidden="true" />
              Foto em breve
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-medium">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {text}
        </p>
      </div>
    </article>
  )
}

function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-serif text-lg">
            Lorenzo <span className="text-sage-deep">Noronha</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Odontologia com calma, cuidado e confiança, em Santo Ângelo e São
            Miguel das Missões.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-wide text-foreground uppercase">
            Navegação
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold tracking-wide text-foreground uppercase">
            Contato
          </p>
          <div className="mt-3 flex gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Conversar no WhatsApp"
              className="flex size-9 items-center justify-center rounded-full border border-border text-sage-deep transition-colors hover:bg-sage/10"
            >
              <IconWhatsapp className="size-4" />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Seguir no Instagram"
              className="flex size-9 items-center justify-center rounded-full border border-border text-sage-deep transition-colors hover:bg-sage/10"
            >
              <IconInstagram className="size-4" />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Seguir no Facebook"
              className="flex size-9 items-center justify-center rounded-full border border-border text-sage-deep transition-colors hover:bg-sage/10"
            >
              <IconFacebook className="size-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Dr. Lorenzo Noronha — Odontologia. Santo
        Ângelo &amp; São Miguel das Missões, RS.
      </div>
    </footer>
  )
}
