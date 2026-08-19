import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'

/**
 * Visualização ampliada de uma imagem, sobre um scrim escurecido —
 * usada ao tocar/clicar na foto de um card de serviço. Fecha com Esc,
 * clique fora da imagem ou no botão "X"; bloqueia o scroll da página
 * enquanto aberta e devolve o foco ao elemento que a abriu.
 */
export function Lightbox({
  src,
  alt,
  onClose,
}: Readonly<{ src: string; alt: string; onClose: () => void }>) {
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const triggerRef = useRef<Element | null>(null)

  useEffect(() => {
    triggerRef.current = document.activeElement
    closeBtnRef.current?.focus()

    const prevOverflow = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.documentElement.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKeyDown)
      if (triggerRef.current instanceof HTMLElement) triggerRef.current.focus()
    }
  }, [onClose])

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
      className="lightbox-scrim fixed inset-0 z-50 flex items-center justify-center bg-black/88 p-4 backdrop-blur-sm sm:p-10"
    >
      <button
        ref={closeBtnRef}
        type="button"
        onClick={onClose}
        aria-label="Fechar imagem"
        className="absolute top-4 right-4 flex size-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:top-6 sm:right-6"
      >
        <X className="size-5" aria-hidden="true" />
      </button>

      <figure
        className="lightbox-figure m-0 max-h-full max-w-full"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="max-h-[85vh] max-w-[92vw] rounded-lg object-contain shadow-2xl"
        />
      </figure>
    </div>,
    document.body,
  )
}
