import { useState, type ComponentType } from 'react'
import { ChevronDown, Image as ImageIcon } from 'lucide-react'
import { Reveal } from '~/components/Reveal'

export type Service = {
  icon: ComponentType<{ className?: string }>
  title: string
  text: string
  /** Caminho da foto real do procedimento. Deixe undefined para manter o placeholder reservado. */
  image?: string
}

/**
 * Serviços como abas expansíveis: um item aberto por vez, com transição
 * de altura suave (grid-template-rows) e o "quadro" de foto/ícone
 * revelado junto do texto — dá destaque visual sem precisar de grid estático.
 */
export function ServicesAccordion({ services }: Readonly<{ services: Service[] }>) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
      {services.map((service, i) => {
        const isOpen = openIndex === i
        const panelId = `servico-painel-${i}`
        const buttonId = `servico-botao-${i}`

        return (
          <Reveal key={service.title} delay={i * 70} className={i > 0 ? 'border-t border-border' : ''}>
            <h3 className="contents">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="group flex w-full items-center gap-5 px-6 py-6 text-left transition-colors hover:bg-sage/5 sm:gap-6 sm:px-8 sm:py-7"
              >
                <span
                  className={`flex size-14 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                    isOpen
                      ? 'bg-sage-deep text-primary-foreground'
                      : 'bg-sage/15 text-sage-deep group-hover:bg-sage/25'
                  }`}
                >
                  <service.icon className="size-7" />
                </span>
                <span className="flex-1 font-serif text-2xl font-medium tracking-tight text-foreground italic sm:text-3xl">
                  {service.title}
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className={`size-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-sage-deep' : ''
                  }`}
                />
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <div className="grid gap-6 px-6 pb-8 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-8 sm:px-8 sm:pl-[5.25rem]">
                  <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
                    {service.text}
                  </p>
                  <ServiceThumb service={service} />
                </div>
              </div>
            </div>
          </Reveal>
        )
      })}
    </div>
  )
}

/** Degradê que funde a borda esquerda da foto com o fundo do card —
 * mesma sensação da referência, sem recorte reto. Só faz sentido com uma
 * foto real por trás; o placeholder de ícone fica com borda normal. */
const PHOTO_FADE = 'linear-gradient(to left, black 58%, transparent 100%)'

function ServiceThumb({ service }: Readonly<{ service: Service }>) {
  if (service.image) {
    return (
      <img
        src={service.image}
        alt={`Foto ilustrativa do procedimento de ${service.title}`}
        width={192}
        height={240}
        loading="lazy"
        className="hidden aspect-[4/5] w-40 shrink-0 rounded-[1.75rem] object-cover sm:block md:w-48"
        style={{ maskImage: PHOTO_FADE, WebkitMaskImage: PHOTO_FADE }}
      />
    )
  }

  return (
    <div className="hidden aspect-[4/5] w-40 shrink-0 flex-col items-center justify-center gap-2 rounded-[1.75rem] border-2 border-dashed border-sage/25 bg-gradient-to-br from-sage/15 via-card to-sand/30 sm:flex md:w-48">
      <service.icon className="size-12 opacity-70" />
      <span className="inline-flex items-center gap-1 text-[10px] font-medium tracking-wide text-muted-foreground uppercase">
        <ImageIcon className="size-3" aria-hidden="true" />
        Em breve
      </span>
    </div>
  )
}
