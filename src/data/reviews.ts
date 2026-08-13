export interface ReviewLocation {
  id: string
  name: string
  rating: number
  count: number
  url: string
}

export const reviewLocations: ReviewLocation[] = [
  { id: 'plaza-de-toros', name: 'Plaza de Toros', rating: 4.9, count: 232, url: 'https://maps.app.goo.gl/KAmRsdCKRwUUT1yD8' },
  { id: 'san-blas', name: 'San Blas', rating: 4.7, count: 314, url: 'https://maps.app.goo.gl/vdHgeyqod19UV18h7' },
]

export interface Review {
  locationId: string
  author: string
  rating: number
  date: string
  text: string
}

// Contenido de muestra: sustituir por reseñas reales copiadas del perfil de Google Maps de cada local.
export const reviews: Review[] = [
  {
    locationId: 'plaza-de-toros',
    author: 'Marta S.',
    rating: 5,
    date: 'Hace 2 semanas',
    text: 'El Brunch Benedict es una pasada y el sitio tiene una luz preciosa por la mañana. Se nota el cariño en cada plato.',
  },
  {
    locationId: 'plaza-de-toros',
    author: 'Javier R.',
    rating: 5,
    date: 'Hace 3 semanas',
    text: 'Vengo casi todos los sábados a por el Caramel Ice Latte. El café de casa se nota muchísimo, tiene un cuerpo distinto al resto.',
  },
  {
    locationId: 'plaza-de-toros',
    author: 'Carmen P.',
    rating: 5,
    date: 'Hace 2 meses',
    text: 'Mi lugar favorito para trabajar con el portátil entre semana. El Flat White es de los mejores que he tomado en Alicante.',
  },
  {
    locationId: 'san-blas',
    author: 'Lucía M.',
    rating: 5,
    date: 'Hace 1 mes',
    text: 'Descubrí el Qaphi Garden por Instagram y no defrauda nada, está aún mejor en persona. Volveré a por las Matcha Ice Strawberries.',
  },
  {
    locationId: 'san-blas',
    author: 'Diego A.',
    rating: 4,
    date: 'Hace 1 mes',
    text: 'Ambiente muy cuidado y personal atento. Un poco de espera los domingos por la mañana, pero se entiende porque siempre está lleno.',
  },
  {
    locationId: 'san-blas',
    author: 'Pablo G.',
    rating: 5,
    date: 'Hace 3 semanas',
    text: 'El Sandwich Koreano es una pasada, no me lo esperaba tan bueno. Este local de San Blas tiene un ambiente más tranquilo, ideal para desayunar sin prisa.',
  },
]
