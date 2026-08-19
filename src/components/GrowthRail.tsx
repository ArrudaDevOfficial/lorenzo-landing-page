import { useActiveSection } from '~/hooks/useActiveSection'

export const SECTIONS = [
  { id: 'topo', label: 'Início' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'tecnologia', label: 'Tecnologia' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'agendar', label: 'Agendar' },
  { id: 'localizacao', label: 'Localização' },
] as const

/** Todos os ids de seção, na ordem da página — reutilizado pelo header para
 * o scroll-spy não "pular" seções ao atravessar trechos fora do menu. */
export const SECTION_IDS = SECTIONS.map((s) => s.id)

/**
 * Trilha de progresso fixa e navegável: uma haste que cresce conforme a
 * leitura avança. A seção atual ganha um anel de foco — a mesma referência
 * visual do refletor clínico usada no hero — em vez de um marcador genérico.
 * Só em telas grandes, onde há espaço de sobra.
 */
export function GrowthRail() {
  const activeId = useActiveSection(SECTION_IDS)
  const activeIndex = Math.max(
    0,
    SECTIONS.findIndex((s) => s.id === activeId),
  )
  const fillPercent =
    SECTIONS.length > 1 ? (activeIndex / (SECTIONS.length - 1)) * 100 : 0

  return (
    <nav
      aria-label="Progresso da página"
      className="fixed top-1/2 left-6 z-30 hidden -translate-y-1/2 xl:block"
    >
      <div className="relative flex h-56 flex-col items-center justify-between">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-border"
        />
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 w-px -translate-x-1/2 bg-brand-deep transition-[height] duration-500 ease-out motion-reduce:transition-none"
          style={{ height: `${fillPercent}%` }}
        />

        {SECTIONS.map((section, i) => {
          const isActive = i === activeIndex
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-current={isActive ? 'true' : undefined}
              className="group relative flex size-5 items-center justify-center"
            >
              <span className="sr-only">{section.label}</span>
              {isActive ? (
                <>
                  <span
                    aria-hidden="true"
                    className="absolute size-4 rounded-full border border-brand-deep/50 motion-safe:animate-ring-pulse"
                  />
                  <span
                    aria-hidden="true"
                    className="block size-2 rounded-full bg-brand-deep motion-safe:animate-focus-bloom"
                  />
                </>
              ) : (
                <span className="block size-2.5 rounded-full border-2 border-brand/40 bg-background transition-all duration-300 group-hover:scale-110 group-hover:border-brand-deep" />
              )}
              <span className="pointer-events-none absolute left-7 top-1/2 -translate-y-1/2 rounded-md bg-foreground px-2.5 py-1 text-xs font-medium whitespace-nowrap text-background opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {section.label}
              </span>
            </a>
          )
        })}
      </div>
    </nav>
  )
}
