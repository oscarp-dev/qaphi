import type { AnchorHTMLAttributes } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link, type LinkProps } from 'react-router-dom'

interface PillButtonProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  variant?: 'solid' | 'outline' | 'glass'
  href?: string
  to?: LinkProps['to']
}

const VARIANTS = {
  solid: 'bg-accent border border-accent text-cream shadow-lg shadow-accent/20 hover:bg-accent-dark hover:border-accent-dark',
  outline: 'bg-transparent border border-ink text-ink hover:bg-ink hover:text-cream',
  glass: 'bg-ink/5 border border-ink/30 text-ink backdrop-blur-md hover:bg-ink/10 hover:border-ink/50',
}

export function PillButton({ variant = 'solid', className = '', children, href, to, ...props }: PillButtonProps) {
  const reduceMotion = useReducedMotion()
  const classes = `inline-flex items-center justify-center rounded-full px-8 py-3.5 text-xs font-normal uppercase tracking-[.08em] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${VARIANTS[variant]} ${className}`

  return (
    <motion.div
      whileHover={reduceMotion ? undefined : { scale: 1.04 }}
      whileTap={reduceMotion ? undefined : { scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className="inline-block"
    >
      {to ? (
        <Link to={to} className={classes} {...props}>
          {children}
        </Link>
      ) : (
        <a href={href} className={classes} {...props}>
          {children}
        </a>
      )}
    </motion.div>
  )
}
