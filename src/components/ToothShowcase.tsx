import { Reveal } from '~/components/Reveal'

/**
 * Vitrine em tela cheia com um leve zoom ao rolar. O zoom roda em CSS puro
 * (`animation-timeline: view()`, sem listener de scroll nem re-render em
 * JS) — a rolagem continua 100% fluida; em navegadores sem suporte a
 * scroll-timelines a imagem só fica estática, sem quebrar nada (ver
 * `.showcase-media` em styles.css).
 */
export function ToothShowcase() {
  return (
    <section id="tecnologia" aria-label="Tecnologia e precisão">
      <div className="relative h-[80vh] min-h-[440px] overflow-hidden bg-[#0b0b0b] sm:h-[88vh]">
        <img
          src="/images/showcase-implante.webp"
          alt="Coroa protética sobre implante dentário, ao lado do parafuso de fixação"
          className="showcase-media absolute inset-0 size-full object-cover"
          loading="lazy"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.42) 32%, rgba(0,0,0,0.42) 68%, rgba(0,0,0,0.85) 100%)',
          }}
        />

        <div className="relative mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-6 text-center sm:px-8">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.28em] text-white/70 uppercase">
              Tecnologia a serviço do sorriso
            </p>
            <h2 className="text-balance mt-3 font-serif text-3xl font-medium tracking-tight text-white italic sm:text-4xl md:text-5xl">
              Cada implante é uma peça de precisão, planejada antes de ser instalada
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/80 md:text-lg">
              Planejamento individualizado, tecnologia de ponta e técnicas modernas —
              para que o resultado seja não só bonito, mas seguro e duradouro.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
