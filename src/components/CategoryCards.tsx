import type { MenuCategory } from '../data/menu'
import { Carousel } from './Carousel'

function CategoryCard({
  category,
  isActive,
  onSelect,
}: {
  category: MenuCategory
  isActive: boolean
  onSelect: () => void
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isActive}
      className={`group relative block aspect-square w-full overflow-hidden rounded-2xl text-center transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
        isActive ? 'ring-2 ring-accent ring-offset-2 ring-offset-cream' : 'ring-1 ring-inset ring-cream/25'
      }`}
    >
      <img
        src={category.image}
        alt={category.label}
        className="absolute inset-0 h-full w-full scale-105 object-cover blur-[1.5px] transition-transform duration-700 group-hover:scale-115"
        loading="lazy"
      />
      <div className={`absolute inset-0 transition-colors duration-300 ${isActive ? 'bg-ink/40' : 'bg-ink/30 group-hover:bg-ink/40'}`} />
      <div className="absolute inset-0 flex items-center justify-center p-3">
        <span className="font-serif text-[21px] font-medium leading-tight text-cream drop-shadow-sm sm:text-[25px]">
          {category.label}
        </span>
      </div>
    </button>
  )
}

export function CategoryCards({
  categories,
  active,
  onSelect,
}: {
  categories: MenuCategory[]
  active: string
  onSelect: (id: string) => void
}) {
  return (
    <>
      <div className="sm:hidden">
        <Carousel slideClassName="basis-[38%]">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              isActive={category.id === active}
              onSelect={() => onSelect(category.id)}
            />
          ))}
        </Carousel>
      </div>
      <div className="hidden gap-4 px-[6vw] sm:grid sm:grid-cols-3 lg:grid-cols-6">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            isActive={category.id === active}
            onSelect={() => onSelect(category.id)}
          />
        ))}
      </div>
    </>
  )
}
