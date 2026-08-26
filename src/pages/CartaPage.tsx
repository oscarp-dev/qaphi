import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { menu, type MenuItem } from '../data/menu'
import { Reveal } from '../components/Reveal'
import { Carousel } from '../components/Carousel'
import { CategoryCards } from '../components/CategoryCards'
import { useSeo } from '../hooks/useSeo'

function PhotoCard({ item }: { item: MenuItem & { image: string } }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
        <img
          src={item.image}
          alt={item.name}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        {item.tag && (
          <span className="absolute top-5 left-5 rounded-full bg-accent px-4 py-1.5 text-[11px] font-medium uppercase tracking-[.08em] text-cream">
            {item.tag}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-2.5 px-1">
        <div className="flex items-start justify-between gap-6">
          <span className="font-serif text-[23px] font-medium leading-tight text-ink">{item.name}</span>
          <span className="shrink-0 font-serif text-[19px] tabular-nums text-accent">{item.price}</span>
        </div>
        {item.description && <span className="text-[14px] leading-relaxed text-ink/60">{item.description}</span>}
      </div>
    </div>
  )
}

function ListRow({ item }: { item: MenuItem }) {
  return (
    <div className="flex items-start gap-6 py-5 border-b border-ink/10 last:border-b-0">
      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        <div className="flex flex-wrap items-baseline gap-3">
          <span className="font-serif text-[18px] font-medium text-ink">{item.name}</span>
          {item.tag && (
            <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[.08em] text-accent">
              {item.tag}
            </span>
          )}
        </div>
        {item.description && <span className="text-[13px] leading-relaxed text-ink/60">{item.description}</span>}
      </div>
      <span className="mt-2 hidden h-px min-w-[24px] flex-1 self-center border-b border-dotted border-ink/25 sm:block" />
      <span className="shrink-0 font-serif text-[16px] tabular-nums text-ink">{item.price}</span>
    </div>
  )
}

function groupAccent(title?: string) {
  if (!title) return 'bg-ink/25'
  const t = title.toLowerCase()
  if (t.includes('frío') || t.includes('frio')) return 'bg-sky-400'
  if (t.includes('caliente')) return 'bg-amber-500'
  if (t.includes('tropical') || t.includes('batido')) return 'bg-emerald-400'
  return 'bg-accent/70'
}

function GroupPanel({ group }: { group: (typeof menu)[number]['groups'][number] }) {
  const items = group.items.filter((i) => !i.image)
  if (items.length === 0) return null

  return (
    <div className="rounded-3xl border border-ink/10 bg-bone/60 p-6 sm:p-8">
      {group.title && (
        <div className="mb-4 flex flex-col gap-1.5">
          <div className="flex items-center gap-2.5">
            <span className={`h-2 w-2 shrink-0 rounded-full ${groupAccent(group.title)}`} aria-hidden />
            <h2 className="m-0 font-serif text-[19px] font-medium text-ink">{group.title}</h2>
          </div>
          {group.note && <p className="m-0 pl-[18px] text-[12px] leading-relaxed text-ink/50">{group.note}</p>}
        </div>
      )}
      <div>
        {items.map((item) => (
          <ListRow key={item.name} item={item} />
        ))}
      </div>
    </div>
  )
}

export function CartaPage() {
  useSeo({
    title: 'La Carta — Café, Brunch y Dulces | Qaphi Alicante',
    description:
      'Descubre la carta de Qaphi: café, brunch, batidos y repostería casera en nuestras cafeterías de Plaza de Toros y San Blas, Alicante.',
    path: '/carta',
  })

  const [active, setActive] = useState(menu[0].id)
  const category = menu.find((c) => c.id === active) ?? menu[0]
  const reduceMotion = useReducedMotion()

  const photoItems = category.groups
    .flatMap((g) => g.items)
    .filter((i): i is MenuItem & { image: string } => Boolean(i.image))

  return (
    <div className="pt-14 pb-24 md:pt-20 md:pb-32">
      <div className="relative">
        <div
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-accent/25 blur-[100px] sm:h-[420px] sm:w-[420px]"
          aria-hidden
        />
        <Reveal className="flex flex-col items-center gap-5 px-[6vw] text-center">
          <Link
            to="/"
            className="text-[12px] font-medium uppercase tracking-[.1em] text-ink/50 transition-colors hover:text-accent"
          >
            ← Volver al inicio
          </Link>
          <h1 className="m-0 font-script text-[clamp(52px,9vw,96px)] leading-none text-accent">La Carta</h1>
          <p className="m-0 max-w-[560px] font-serif font-medium text-[clamp(24px,3.4vw,36px)] leading-[1.2] text-ink">
            Un momento distinto para cada hora del día.
          </p>
          <p className="m-0 max-w-[480px] text-[15px] leading-[1.7] text-ink/65 sm:text-[16px]">
            Elige tu categoría y descubre lo que más nos piden.
          </p>
        </Reveal>
      </div>

      <Reveal delay={100} className="mt-10 md:mt-14">
        <CategoryCards categories={menu} active={active} onSelect={setActive} />
      </Reveal>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -16 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 md:mt-20"
        >
          {photoItems.length === 1 && (
            <div className="mx-auto max-w-[440px] px-6 sm:px-0">
              <PhotoCard item={photoItems[0]} />
            </div>
          )}

          {photoItems.length === 2 && (
            <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-10 px-6 sm:grid-cols-2 sm:gap-6 sm:px-[6vw]">
              {photoItems.map((item) => (
                <PhotoCard key={item.name} item={item} />
              ))}
            </div>
          )}

          {photoItems.length > 2 && (
            <Carousel className="mx-auto max-w-[1200px]" slideClassName="basis-[80%] sm:basis-[52%] lg:basis-[44%]">
              {photoItems.map((item) => (
                <PhotoCard key={item.name} item={item} />
              ))}
            </Carousel>
          )}

          <div className={`mx-auto flex max-w-[760px] flex-col gap-5 px-[6vw] ${photoItems.length > 0 ? 'mt-16 md:mt-20' : ''}`}>
            {category.groups.map((group, gi) => (
              <GroupPanel key={group.title ?? gi} group={group} />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
