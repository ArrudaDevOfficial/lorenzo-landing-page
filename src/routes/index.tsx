import { createFileRoute } from '@tanstack/react-router'
import { Calendar, MapPin, Clock, ArrowRight, Menu, X } from 'lucide-react'
import { useEffect, useState, type CSSProperties, type PointerEvent, type ReactNode } from 'react'
import { useActiveSection } from '~/hooks/useActiveSection'
import { Reveal } from '~/components/Reveal'
import { GrowthRail, SECTION_IDS } from '~/components/GrowthRail'
import { FloatingWhatsapp } from '~/components/FloatingWhatsapp'
import { ServicesAccordion, type Service } from '~/components/ServicesAccordion'
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
  { href: '#servicos', label: 'Serviços' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#localizacao', label: 'Localização' },
] as const

function Home() {
  return (
    <main className="bg-background text-foreground">
      <SiteHeader />
      <GrowthRail />

      {/* HERO */}
      <section
        id="topo"
        onPointerMove={handleHeroPointerMove}
        className="group relative overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:radial-gradient(600px_circle_at_var(--spot-x,50%)_var(--spot-y,50%),oklch(68%_0.06_150/16%),transparent_70%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -right-40 size-[32rem] rounded-full bg-sage/20 blur-3xl motion-safe:animate-blob-float"
        />
        <div
          aria-hidden="true"
          style={{ animationDelay: '-5.5s' }}
          className="pointer-events-none absolute -bottom-24 -left-24 size-96 rounded-full bg-sand-warm/30 blur-3xl motion-safe:animate-blob-float"
        />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:px-8 md:grid-cols-2 md:items-center md:py-24 lg:py-28">
          <div className="order-2 md:order-1">
            <Eyebrow className="animate-fade-up">Cuidado que acompanha</Eyebrow>
            <h1
              style={{ animationDelay: '90ms' }}
              className="text-balance animate-fade-up mt-2 font-serif text-4xl leading-[1.1] font-medium tracking-tight text-foreground italic md:text-6xl"
            >
              Odontologia com calma, cuidado e confiança
            </h1>
            <p
              style={{ animationDelay: '180ms' }}
              className="animate-fade-up mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Sou o Dr. Lorenzo Noronha, cirurgião-dentista em{' '}
              <strong className="font-semibold text-foreground">Santo Ângelo</strong> e{' '}
              <strong className="font-semibold text-foreground">São Miguel das Missões</strong>.
              Aqui, todo tratamento começa com escuta — a explicação acontece
              no seu tempo, antes de qualquer decisão.
            </p>
            <div
              style={{ animationDelay: '270ms' }}
              className="animate-fade-up mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-medium text-primary-foreground shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.98] motion-reduce:hover:scale-100"
              >
                <Calendar className="size-5" aria-hidden="true" />
                Agendar avaliação
              </a>
              <a
                href="#servicos"
                className="group/cta inline-flex items-center gap-1.5 rounded-xl px-4 py-3.5 font-medium text-sage-deep underline-offset-4 hover:underline"
              >
                Conhecer os atendimentos
                <ArrowRight className="size-4 transition-transform group-hover/cta:translate-x-0.5" aria-hidden="true" />
              </a>
            </div>

            <ul
              style={{ animationDelay: '360ms' }}
              className="animate-fade-up mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-6 text-sm text-muted-foreground"
            >
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

          <div
            style={{ animationDelay: '140ms' }}
            className="animate-fade-up order-1 md:order-2"
          >
            <HeroPortrait className="mx-auto w-full max-w-sm drop-shadow-xl md:max-w-md" />
          </div>
        </div>
      </section>

      {/* SERVIÇOS — em destaque, logo após o hero */}
      <section id="servicos" className="mx-auto max-w-4xl px-6 py-16 sm:px-8 md:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-serif text-3xl font-medium tracking-tight italic md:text-4xl">
            Cuidado em cada etapa do seu sorriso
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
            Toque em um atendimento para ver como funciona.
          </p>
        </Reveal>

        <div className="mt-12">
          <ServicesAccordion services={SERVICES} />
        </div>
      </section>

      {/* SOBRE MIM */}
      <section id="sobre" className="border-t border-border bg-card">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center sm:px-8 md:py-24">
          <Reveal>
            <Eyebrow>Sobre mim</Eyebrow>
            <h2 className="text-balance mt-2 font-serif text-3xl font-medium tracking-tight italic md:text-4xl">
              Escuto antes de tratar
            </h2>
          </Reveal>
          <Reveal delay={120}>
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
          </Reveal>
        </div>
      </section>

      {/* AGENDAMENTO + REDES */}
      <section id="agendar" className="border-t border-border bg-sand/40">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center sm:px-8 md:py-24">
          <Reveal>
            <Eyebrow>Contato</Eyebrow>
            <h2 className="text-balance mt-2 font-serif text-3xl font-medium tracking-tight italic md:text-4xl">
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
              className="btn-shine mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-medium text-primary-foreground shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.98] motion-reduce:hover:scale-100"
            >
              <IconWhatsapp className="size-5" />
              Falar no WhatsApp
            </a>
          </Reveal>

          <Reveal delay={150} className="mt-10 flex items-center justify-center gap-5">
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
          </Reveal>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section id="localizacao" className="bg-sand/40">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 md:py-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>Onde estou</Eyebrow>
            <h2 className="text-balance mt-2 font-serif text-3xl font-medium tracking-tight italic md:text-4xl">
              Duas unidades para atender você
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {UNITS.map((unit, i) => (
              <Reveal
                key={unit.city}
                as="article"
                delay={i * 130}
                className="group rounded-2xl border border-border bg-card p-8 shadow-sm hover:shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-sage/15 text-sage-deep transition-transform duration-300 group-hover:scale-110">
                    <IconPin className="size-5" />
                  </span>
                  <h3 className="font-serif text-2xl font-medium italic">
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
      <FloatingWhatsapp href={WHATSAPP_LINK} />
    </main>
  )
}

/** Rótulo minimalista (linhas retas, sem cursiva) usado como "assinatura" de cada seção. */
function Eyebrow({
  children,
  className = '',
  style,
}: Readonly<{ children: ReactNode; className?: string; style?: CSSProperties }>) {
  return (
    <p
      style={style}
      className={`text-xs font-semibold tracking-[0.28em] text-sage-deep uppercase ${className}`}
    >
      {children}
    </p>
  )
}

function handleHeroPointerMove(event: PointerEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect()
  event.currentTarget.style.setProperty('--spot-x', `${event.clientX - rect.left}px`)
  event.currentTarget.style.setProperty('--spot-y', `${event.clientY - rect.top}px`)
}

function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useActiveSection(SECTION_IDS)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled
          ? 'border-border/70 bg-background/85 shadow-sm backdrop-blur-md'
          : 'border-transparent bg-background/40 backdrop-blur-sm'
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 transition-[padding] duration-300 sm:px-8 ${
          scrolled ? 'py-3' : 'py-4'
        }`}
      >
        <a href="#topo" className="font-serif text-lg tracking-tight italic">
          Lorenzo <span className="text-sage-deep">Noronha</span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.href.slice(1)
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-1 transition-colors hover:text-foreground ${
                  isActive ? 'text-foreground' : ''
                }`}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-sage-deep transition-transform duration-300 ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine hidden items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-transform hover:scale-[1.03] active:scale-[0.98] motion-reduce:hover:scale-100 sm:inline-flex"
          >
            Agendar
          </a>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex size-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-sage/10 md:hidden"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out md:hidden ${
          menuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="min-h-0">
          <nav
            aria-label="Principal (mobile)"
            className="flex flex-col gap-1 border-t border-border/70 bg-background/95 px-6 py-4 backdrop-blur-md"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-sage/10 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-sm"
            >
              <IconWhatsapp className="size-4" />
              Agendar avaliação
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:px-8 md:grid-cols-3">
        <Reveal>
          <p className="font-serif text-lg italic">
            Lorenzo <span className="text-sage-deep">Noronha</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Odontologia com calma, cuidado e confiança, em Santo Ângelo e São
            Miguel das Missões.
          </p>
        </Reveal>

        <Reveal delay={100}>
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
        </Reveal>

        <Reveal delay={200}>
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
        </Reveal>
      </div>

      <div className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Dr. Lorenzo Noronha — Odontologia. Santo
        Ângelo &amp; São Miguel das Missões, RS.
      </div>
    </footer>
  )
}
