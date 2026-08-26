export interface OpeningHours {
  days: string[]
  opens: string
  closes: string
}

export interface Location {
  name: string
  address: string
  postalCode: string
  lat: number
  lng: number
  hours: string
  openingHours: OpeningHours[]
  cid: string
  mapsUrl: string
}

const WEEKDAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
const WEEKEND = ['Saturday', 'Sunday']
const ALL_WEEK = [...WEEKDAYS, ...WEEKEND]

export const locations: Location[] = [
  {
    name: 'Qaphi — Plaza de Toros',
    address: 'Av. Alcalde Alfonso de Rojas, 6',
    postalCode: '03004',
    lat: 38.3522425,
    lng: -0.4865854,
    hours: 'Lun–Vie 8:00–19:00 · Sáb–Dom 9:00–20:00',
    openingHours: [
      { days: WEEKDAYS, opens: '08:00', closes: '19:00' },
      { days: WEEKEND, opens: '09:00', closes: '20:00' },
    ],
    cid: '10344719713758699532',
    mapsUrl: 'https://maps.app.goo.gl/KAmRsdCKRwUUT1yD8',
  },
  {
    name: 'Qaphi — San Blas',
    address: 'Glorieta Poeta Vicente Mojica, 6',
    postalCode: '03005',
    lat: 38.348015,
    lng: -0.4997652,
    hours: 'Todos los días 8:30–18:00',
    openingHours: [{ days: ALL_WEEK, opens: '08:30', closes: '18:00' }],
    cid: '13728232508123488660',
    mapsUrl: 'https://maps.app.goo.gl/vdHgeyqod19UV18h7',
  },
]
