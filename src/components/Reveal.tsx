import type { ElementType, HTMLAttributes, ReactNode, Ref } from 'react'
import { useReveal } from '~/hooks/useReveal'

type RevealProps = Omit<HTMLAttributes<HTMLElement>, 'children'> & {
  children: ReactNode
  /** Elemento HTML a renderizar (padrão: div). */
  as?: ElementType
  /** Atraso em ms antes de iniciar a transição, para efeito de cascata. */
  delay?: number
}

/**
 * Revela o conteúdo com um leve deslocamento + fade quando entra na
 * viewport. Único disparo (não reanima ao rolar de volta) e respeita
 * `prefers-reduced-motion`.
 */
export function Reveal({
  children,
  as = 'div',
  delay = 0,
  className = '',
  style,
  ...rest
}: Readonly<RevealProps>) {
  const { ref, visible } = useReveal()
  const Tag = as

  return (
    <Tag
      ref={ref as Ref<never>}
      className={[
        'transition-all duration-700 ease-out',
        'motion-reduce:opacity-100! motion-reduce:translate-y-0!',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ transitionDelay: visible ? `${delay}ms` : undefined, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
