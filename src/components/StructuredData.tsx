import { locations } from '../data/locations'
import { SITE_URL, DEFAULT_OG_IMAGE } from '../lib/seo'

export function StructuredData() {
  const businesses = locations.map((loc) => ({
    '@context': 'https://schema.org',
    '@type': 'CafeOrCoffeeShop',
    name: loc.name,
    image: DEFAULT_OG_IMAGE,
    url: SITE_URL,
    telephone: '+34687288176',
    email: 'hola@qaphi.com',
    priceRange: '€€',
    servesCuisine: ['Café', 'Brunch', 'Repostería'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: loc.address,
      addressLocality: 'Alicante',
      addressRegion: 'Alicante',
      postalCode: loc.postalCode,
      addressCountry: 'ES',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: loc.lat,
      longitude: loc.lng,
    },
    hasMap: loc.mapsUrl,
    openingHoursSpecification: loc.openingHours.map((oh) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: oh.days,
      opens: oh.opens,
      closes: oh.closes,
    })),
    sameAs: ['https://www.instagram.com/qaphi__coffee/'],
  }))

  return <script type="application/ld+json">{JSON.stringify(businesses)}</script>
}
