import { motion, useReducedMotion, type Variants } from 'framer-motion'

const LINES = [['El', 'café', 'es', 'solo'], ['el']]

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

const word: Variants = {
  hidden: { opacity: 0, y: '0.6em', filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export function Declaracion() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-accent text-cream border-t border-cream/15 px-[8vw] py-32 md:py-40">
      <span
        className="pointer-events-none absolute -right-[4vw] top-1/2 -translate-y-1/2 select-none font-script text-[clamp(140px,26vw,380px)] leading-none text-cream/[0.08]"
        aria-hidden="true"
      >
        Qaphi
      </span>

      <motion.h2
        initial={reduceMotion ? 'visible' : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={container}
        className="relative m-0 max-w-[900px] w-full break-words font-serif font-medium uppercase tracking-wide leading-[1.08] text-[clamp(40px,7.2vw,108px)]"
      >
        {LINES.map((line, i) => (
          <span key={i} className="block">
            {line.map((w) => (
              <motion.span key={w} variants={word} className="mr-[0.25em] inline-block">
                {w}
              </motion.span>
            ))}
            {i === 1 && (
              <motion.span variants={word} className="relative inline-block text-ink">
                principio
                <svg
                  viewBox="0 0 300 20"
                  preserveAspectRatio="none"
                  className="absolute -bottom-[0.12em] left-0 h-[0.18em] w-full text-cream"
                  aria-hidden="true"
                >
                  <motion.path
                    d="M3 14 C 70 4, 160 4, 297 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    variants={{
                      hidden: { pathLength: 0 },
                      visible: { pathLength: 1, transition: { delay: 0.5, duration: 0.9, ease: 'easeInOut' } },
                    }}
                  />
                </svg>
              </motion.span>
            )}
            {i === 1 && <motion.span variants={word} className="inline-block">.</motion.span>}
          </span>
        ))}
      </motion.h2>
    </section>
  )
}
