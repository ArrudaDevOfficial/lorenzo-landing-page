import { useEffect, useState } from 'react'
import { IconWhatsapp } from '~/components/illustrations'

/**
 * Atalho flutuante para o WhatsApp, que aparece depois que o hero (com
 * seu próprio CTA) sai de vista — evita duplicar o convite acima da dobra.
 */
export function FloatingWhatsapp({ href }: Readonly<{ href: string }>) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const threshold = window.innerHeight * 0.7
    let ticking = false

    function onScroll() {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setVisible(window.scrollY > threshold)
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className={`fixed right-5 bottom-5 z-40 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 motion-reduce:hover:scale-100 sm:right-8 sm:bottom-8 ${
        visible
          ? 'translate-y-0 scale-100 opacity-100'
          : 'pointer-events-none translate-y-4 scale-90 opacity-0'
      }`}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-primary motion-safe:animate-pulse-ring"
      />
      <IconWhatsapp className="relative size-6" />
    </a>
  )
}
