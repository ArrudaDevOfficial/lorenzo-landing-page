import { useState, type ComponentType } from 'react'
import { ChevronDown, Image as ImageIcon, Maximize2 } from 'lucide-react'
import { Reveal } from '~/components/Reveal'
import { Lightbox } from '~/components/Lightbox'

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
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

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
                className="group flex w-full items-center gap-5 px-6 py-6 text-left transition-colors hover:bg-brand/5 sm:gap-6 sm:px-8 sm:py-7"
              >
                <span
                  className={`flex size-14 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                    isOpen
                      ? 'bg-brand-deep text-primary-foreground'
                      : 'bg-brand/15 text-brand-deep group-hover:bg-brand/25'
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
                    isOpen ? 'rotate-180 text-brand-deep' : ''
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
                  <ServiceThumb
                    service={service}
                    onOpen={(src, alt) => setLightbox({ src, alt })}
                  />
                </div>
              </div>
            </div>
          </Reveal>
        )
      })}

      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </div>
  )
}

/** Degradê que funde a borda esquerda da foto com o fundo do card — só se
 * aplica no layout lado a lado (sm+); no mobile a foto fica de largura
 * cheia, sem fundir bordas. */
const PHOTO_FADE =
  'sm:[mask-image:linear-gradient(to_left,black_58%,transparent_100%)] sm:[-webkit-mask-image:linear-gradient(to_left,black_58%,transparent_100%)]'

function ServiceThumb({
  service,
  onOpen,
}: Readonly<{ service: Service; onOpen: (src: string, alt: string) => void }>) {
  if (service.image) {
    const alt = `Foto ilustrativa do procedimento de ${service.title}`
    return (
      <button
        type="button"
        onClick={() => onOpen(service.image!, alt)}
        aria-label={`Ampliar foto de ${service.title}`}
        className="group/thumb relative block w-full overflow-hidden rounded-[1.75rem] text-left sm:w-40 sm:shrink-0 md:w-48"
      >
        <img
          src={service.image}
          alt={alt}
          width={192}
          height={240}
          loading="lazy"
          className={`aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover/thumb:scale-105 sm:aspect-[4/5] ${PHOTO_FADE}`}
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover/thumb:bg-black/15"
        >
          <Maximize2 className="size-5 text-white opacity-0 drop-shadow transition-opacity duration-300 group-hover/thumb:opacity-100" />
        </span>
      </button>
    )
  }

  return (
    <div className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-2 rounded-[1.75rem] border-2 border-dashed border-brand/25 bg-gradient-to-br from-brand/15 via-card to-mist/30 sm:aspect-[4/5] sm:w-40 sm:shrink-0 md:w-48">
      <service.icon className="size-12 opacity-70" />
      <span className="inline-flex items-center gap-1 text-[10px] font-medium tracking-wide text-muted-foreground uppercase">
        <ImageIcon className="size-3" aria-hidden="true" />
        Em breve
      </span>
    </div>
  )
}
