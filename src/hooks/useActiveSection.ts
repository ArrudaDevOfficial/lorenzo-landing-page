import { useEffect, useState } from 'react'

/**
 * Rastreia qual seção (por id) está "ativa" — cruzando a faixa central da
 * viewport — para acender links de navegação e o rail de progresso.
 */
export function useActiveSection(ids: readonly string[]): string {
  // Começa vazio (nenhum link "ativo") até o observer confirmar a seção
  // realmente visível — evita assumir a primeira da lista antes da hora.
  const [active, setActive] = useState('')

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0 || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids])

  return active
}
