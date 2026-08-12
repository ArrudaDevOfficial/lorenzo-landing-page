/** Verifica a preferência do usuário por movimento reduzido (uso em efeitos via JS). */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
