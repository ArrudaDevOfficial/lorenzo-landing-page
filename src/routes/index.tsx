import { createFileRoute } from '@tanstack/react-router'
import { Calendar, MapPin, ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useActiveSection } from '~/hooks/useActiveSection'
import { Reveal } from '~/components/Reveal'
import { GrowthRail, SECTION_IDS } from '~/components/GrowthRail'
import { FloatingWhatsapp } from '~/components/FloatingWhatsapp'
import { ToothShowcase } from '~/components/ToothShowcase'
import { ServicesAccordion, type Service } from '~/components/ServicesAccordion'
import {
  IconImplante,
  IconSisos,
  IconProtocolo,
  IconProtese,
  IconIntegrada,
  IconWhatsapp,
  IconInstagram,
  IconFacebook,
  IconPin,
} from '~/components/illustrations'

export const Route = createFileRoute('/')({
  component: Home,
})

const CRO = 'CRO/RS 29.781'

// TODO: substituir pelo número real em formato internacional (ex: 5555988887777)
const WHATSAPP_NUMBER = '5555999999999'
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Olá, Dr. Lorenzo! Gostaria de agendar uma avaliação.',
)
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`

const SERVICES: Service[] = [
  {
    icon: IconSisos,
    title: 'Extração de Sisos',
    text: 'Os dentes do siso nem sempre possuem espaço suficiente para nascer corretamente, podendo causar dor, inflamações, infecções e alterações na posição dos demais dentes. A extração é indicada quando há risco à saúde bucal ou desconforto, sendo realizada com planejamento cuidadoso, técnicas modernas e foco na segurança e no conforto durante a recuperação.',
    image: '/images/servico-sisos.webp',
  },
  {
    icon: IconImplante,
    title: 'Implantes Dentários',
    text: 'Os implantes dentários são a solução para substituir um ou mais dentes perdidos com segurança, estabilidade e naturalidade. Seja para um implante unitário ou para a reabilitação de múltiplos dentes, cada tratamento é planejado de forma individualizada para restaurar a função mastigatória, a estética e a confiança ao sorrir.',
    image: '/images/servico-integrada.webp',
  },
  {
    icon: IconProtocolo,
    title: 'Prótese Protocolo',
    text: 'Indicada para pacientes que perderam todos os dentes de uma arcada ou possuem dentes com comprometimento irreversível, a prótese protocolo é fixada sobre implantes, proporcionando muito mais estabilidade do que as próteses removíveis convencionais. O tratamento devolve segurança para mastigar, falar e sorrir, com excelente estética e conforto.',
    image: '/images/servico-protocolo.webp',
  },
  {
    icon: IconProtese,
    title: 'Prótese Total',
    text: 'A prótese total é uma alternativa para reabilitar pacientes que perderam todos os dentes de uma ou de ambas as arcadas. Confeccionada de forma personalizada, busca restabelecer a mastigação, a fala e a harmonia facial, proporcionando melhor adaptação, conforto e qualidade de vida.',
    image: '/images/servico-protese-total.webp',
  },
  {
    icon: IconIntegrada,
    title: 'Odontologia Integrada',
    text: 'Além da implantodontia, oferecemos um atendimento completo por meio de uma equipe de especialistas. Realizamos tratamentos como endodontia (tratamento de canal), ortodontia, odontologia estética e clínica geral, garantindo que todas as etapas do seu tratamento sejam conduzidas de forma integrada, com planejamento e acompanhamento em um único lugar.',
    image: '/images/servico-implante.webp',
  },
]

const UNITS = [
  {
    city: 'Santo Ângelo',
    address: 'R. Vinte e Cinco de Julho, 350 — Centro, Santo Ângelo/RS, 98801-670',
    detail: '2º andar, ao lado do Restaurante do Chico',
  },
  {
    city: 'São Miguel das Missões',
    address: 'Rua Santo Ângelo, 1113 — São Miguel das Missões/RS',
    detail: 'Consultório Dra. Mariely Bedates, próximo à Prefeitura',
  },
] as const

const NAV_LINKS = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#tecnologia', label: 'Tecnologia' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#localizacao', label: 'Localização' },
] as const

function Home() {
  return (
    <main className="bg-background text-foreground">
      <SiteHeader />
      <GrowthRail />

      {/* HERO — foto de estúdio ocupando a largura toda, sem degradê: o
          homem fica à direita do quadro (fundo cinza contínuo até a borda
          esquerda) e o texto fica sobreposto do lado esquerdo em todas as
          telas, inclusive no mobile. Duas fotos recortadas especificamente
          pra cada proporção (ambas com a mesma técnica de fundo estendido
          sem costura): uma mais alta (4:3) até `lg`, com uma faixa cinza
          larga o bastante pro texto compacto caber ao lado dele mesmo em
          telas estreitas; e a panorâmica (2.1:1) a partir do desktop. A
          transição pro conteúdo seguinte é uma sombra suave (sem faixa de
          cor) — a foto "flutua" sobre a seção. */}
      <section id="topo" className="relative">
        <div className="relative aspect-[4/3] w-full overflow-hidden shadow-[0_32px_40px_-28px_rgba(19,26,30,0.45)] xl:aspect-[1.85/1]">
          <picture>
            <source media="(min-width: 1280px)" srcSet="/images/hero-lorenzo.webp" />
            <img
              src="/images/hero-lorenzo-mobile.webp"
              alt="Dr. Lorenzo Noronha, cirurgião-dentista especialista em Implantodontia, em estúdio"
              className="block size-full object-cover object-right"
            />
          </picture>
        </div>

        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
            <HeroCopy className="max-w-[10.5rem] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-[clamp(28rem,20rem_+_10vw,36rem)]" />
          </div>
        </div>
      </section>

      {/* SERVIÇOS — em destaque, logo após o hero */}
      <section id="servicos" className="mx-auto max-w-4xl px-6 py-16 sm:px-8 md:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-serif text-3xl font-medium tracking-tight md:text-4xl">
            Soluções completas para recuperar sua saúde bucal
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
            Toque em um atendimento para ver como funciona.
          </p>
        </Reveal>

        <div className="mt-12">
          <ServicesAccordion services={SERVICES} />
        </div>
      </section>

      {/* TECNOLOGIA — vitrine em tela cheia com efeito de scroll */}
      <ToothShowcase />

      {/* SOBRE MIM */}
      <section id="sobre" className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 md:py-24">
          <div className="grid gap-10 md:grid-cols-[minmax(0,22rem)_1fr] md:items-start md:gap-14">
            <Reveal className="mx-auto w-full max-w-xs md:mx-0 md:sticky md:top-28">
              <img
                src="/images/sobre-lorenzo-bw.webp"
                alt="Dr. Lorenzo Noronha, cirurgião-dentista"
                className="aspect-[4/5] w-full rounded-2xl object-cover shadow-lg"
              />
              <p className="mt-4 text-center text-sm text-muted-foreground md:text-left">
                <span className="font-semibold text-foreground">Dr. Lorenzo Noronha</span>
                <br />
                <span className="tabular-nums">{CRO}</span>
              </p>
            </Reveal>

            <div>
              <Reveal>
                <h2 className="text-balance font-serif text-3xl font-medium tracking-tight md:text-4xl">
                  Mais do que reabilitar sorrisos, meu compromisso é oferecer segurança e previsibilidade
                </h2>
              </Reveal>

              <Reveal delay={100}>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  Sou Dr. Lorenzo Noronha, cirurgião-dentista com atuação dedicada à{' '}
                  <strong className="font-semibold text-foreground">Implantodontia</strong> e à{' '}
                  <strong className="font-semibold text-foreground">Reabilitação Oral</strong>. Acredito que
                  um tratamento de excelência começa muito antes do procedimento: nasce de um diagnóstico
                  preciso, de um planejamento individualizado e de uma relação baseada na confiança e na
                  transparência.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  Cada paciente possui uma história, necessidades e expectativas diferentes. Por isso, cada
                  caso é conduzido de forma personalizada, respeitando critérios técnicos e utilizando
                  recursos que proporcionam maior previsibilidade, conforto e longevidade aos resultados.
                </p>
              </Reveal>
              <Reveal delay={260}>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  Atendendo em <strong className="font-semibold text-foreground">Santo Ângelo</strong> e{' '}
                  <strong className="font-semibold text-foreground">São Miguel das Missões</strong>, meu
                  propósito é devolver não apenas a função mastigatória e a estética do sorriso, mas também
                  a tranquilidade de saber que cada etapa do tratamento foi planejada com responsabilidade,
                  precisão e dedicação.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* AGENDAMENTO + REDES */}
      <section id="agendar" className="border-t border-border">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center sm:px-8 md:py-24">
          <Reveal>
            <h2 className="text-balance font-serif text-3xl font-medium tracking-tight md:text-4xl">
              Vamos cuidar do seu sorriso, com segurança.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
              Marque uma avaliação em Santo Ângelo ou São Miguel das Missões e conheça o
              plano de tratamento ideal para o seu caso.
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
              className="flex size-11 items-center justify-center rounded-full border border-border text-brand-deep transition-colors hover:bg-brand/10"
            >
              <IconWhatsapp className="size-5" />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Seguir no Instagram"
              className="flex size-11 items-center justify-center rounded-full border border-border text-brand-deep transition-colors hover:bg-brand/10"
            >
              <IconInstagram className="size-5" />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Seguir no Facebook"
              className="flex size-11 items-center justify-center rounded-full border border-border text-brand-deep transition-colors hover:bg-brand/10"
            >
              <IconFacebook className="size-5" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section id="localizacao" className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 md:py-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance font-serif text-3xl font-medium tracking-tight md:text-4xl">
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
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand-deep transition-transform duration-300 group-hover:scale-110">
                    <IconPin className="size-5" />
                  </span>
                  <h3 className="font-serif text-2xl font-medium">
                    {unit.city}
                  </h3>
                </div>
                <p className="mt-5 flex items-start gap-2.5 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                  <span className="min-w-0 text-justify">{unit.address}</span>
                </p>
                <p className="mt-2 pl-[1.625rem] text-sm text-muted-foreground/80">
                  {unit.detail}
                </p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${unit.address} ${unit.detail}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-deep underline-offset-4 hover:underline"
                >
                  Ver no mapa
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
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

/** Bloco de texto do hero — sempre sobreposto à foto (a faixa do topo é
 * panorâmica mesmo no mobile), então o texto é compacto em todas as
 * telas, com escala mobile-first: bem enxuto no celular (sem o parágrafo,
 * que não cabe na coluna estreita) e crescendo gradualmente até o
 * desktop, onde há mais espaço na foto. */
function HeroCopy({ className = '' }: Readonly<{ className?: string }>) {
  return (
    <div className={className}>
      <div
        style={{ animationDelay: '0ms' }}
        className="animate-fade-up inline-flex flex-nowrap items-center gap-1.5 rounded-full border border-brand/35 bg-card/80 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-nowrap text-brand-deep backdrop-blur md:gap-2 md:px-4 md:py-1.5 md:text-xs 2xl:px-5 2xl:py-2 2xl:text-sm"
      >
        <span className="tabular-nums">{CRO}</span>
        <span aria-hidden="true" className="hidden size-1 rounded-full bg-brand-deep/50 md:block" />
        <span className="hidden md:inline">Especialista em Implantodontia</span>
      </div>

      <h1
        style={{ animationDelay: '90ms' }}
        className="text-balance animate-fade-up mt-3 font-serif leading-[1.1] font-medium tracking-tight text-foreground sm:mt-4 sm:text-2xl sm:leading-[1.08] md:text-3xl lg:text-4xl xl:text-[clamp(3rem,0.5rem_+_3.125vw,5.5rem)] text-xl"
      >
        Segurança para sorrir, resultados feitos para durar.
      </h1>
      <p
        style={{ animationDelay: '180ms' }}
        className="animate-fade-up mt-3 hidden text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:block lg:text-base xl:max-w-[clamp(32rem,24rem_+_10vw,40rem)] xl:text-[clamp(1rem,0.75rem_+_0.3125vw,1.25rem)] max-w-lg"
      >
        Acredito que devolver um sorriso vai muito além da estética. É
        devolver <strong className="font-semibold text-foreground">segurança para falar</strong>,{' '}
        <strong className="font-semibold text-foreground">liberdade para sorrir</strong> e qualidade de
        vida para viver cada momento com confiança.
      </p>
      <div
        style={{ animationDelay: '270ms' }}
        className="animate-fade-up mt-4 flex flex-wrap items-center gap-2 sm:mt-5 sm:gap-3"
      >
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-shine inline-flex items-center gap-1 rounded-md bg-primary px-2.5 py-1.5 text-xs font-medium text-primary-foreground shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.98] motion-reduce:hover:scale-100 sm:gap-2 sm:rounded-xl sm:px-6 sm:py-3.5 sm:text-base 2xl:px-8 2xl:py-4 2xl:text-lg"
        >
          <Calendar className="size-3.5 sm:size-5 2xl:size-6" aria-hidden="true" />
          Agendar avaliação
        </a>
        <a
          href="#servicos"
          className="group/cta hidden items-center gap-1.5 rounded-xl px-4 py-3.5 font-medium text-brand-deep underline-offset-4 hover:underline sm:inline-flex 2xl:text-lg"
        >
          Conhecer os atendimentos
          <ArrowRight className="size-4 transition-transform group-hover/cta:translate-x-0.5 2xl:size-5" aria-hidden="true" />
        </a>
      </div>
    </div>
  )
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
        <a href="#topo" className="flex items-center gap-2.5 leading-tight">
          <img
            src="/images/logo-icon.webp"
            alt=""
            aria-hidden="true"
            className="h-8 w-auto shrink-0 sm:h-9"
          />
          <span className="flex flex-col">
            <span className="font-serif text-lg font-medium tracking-tight">
              Lorenzo <span className="text-brand-deep">Noronha</span>
            </span>
            <span className="hidden font-serif text-[11px] font-medium tracking-[0.16em] text-muted-foreground uppercase sm:block">
              Implantodontia
            </span>
          </span>
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
                  className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-brand-deep transition-transform duration-300 ${
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
            className="flex size-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-brand/10 md:hidden"
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
                className="rounded-lg px-2 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-brand/10 hover:text-foreground"
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
          <div className="flex items-center gap-2.5">
            <img src="/images/logo-icon.webp" alt="" aria-hidden="true" className="h-8 w-auto shrink-0" />
            <p className="font-serif text-lg font-medium">
              Lorenzo <span className="text-brand-deep">Noronha</span>
            </p>
          </div>
          <p className="mt-2 font-serif text-xs font-medium tracking-wide text-muted-foreground uppercase">
            Implantodontia · <span className="tabular-nums normal-case">{CRO}</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Segurança para sorrir, resultados feitos para durar — em Santo Ângelo e São
            Miguel das Missões.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <p className="font-serif text-sm font-semibold tracking-wide text-foreground uppercase">
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
          <p className="font-serif text-sm font-semibold tracking-wide text-foreground uppercase">
            Contato
          </p>
          <div className="mt-3 flex gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Conversar no WhatsApp"
              className="flex size-9 items-center justify-center rounded-full border border-border text-brand-deep transition-colors hover:bg-brand/10"
            >
              <IconWhatsapp className="size-4" />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Seguir no Instagram"
              className="flex size-9 items-center justify-center rounded-full border border-border text-brand-deep transition-colors hover:bg-brand/10"
            >
              <IconInstagram className="size-4" />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Seguir no Facebook"
              className="flex size-9 items-center justify-center rounded-full border border-border text-brand-deep transition-colors hover:bg-brand/10"
            >
              <IconFacebook className="size-4" />
            </a>
          </div>
        </Reveal>
      </div>

      <div className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Dr. Lorenzo Noronha — Implantodontia. Santo
        Ângelo &amp; São Miguel das Missões, RS.
      </div>
    </footer>
  )
}
