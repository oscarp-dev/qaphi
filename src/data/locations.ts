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

const MON_SAT = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const MON_WED = ['Monday', 'Tuesday', 'Wednesday']
const MON_THU = [...MON_WED, 'Thursday']

export const locations: Location[] = [
  {
    name: 'Qaphi — Plaza de Toros',
    address: 'Av. Alcalde Alfonso de Rojas, 6',
    postalCode: '03004',
    lat: 38.3522425,
    lng: -0.4865854,
    hours: 'Lun–Sáb 8:00–13:00 · Lun–Mié 17:00–20:00 · Dom cerrado',
    openingHours: [
      { days: MON_SAT, opens: '08:00', closes: '13:00' },
      { days: MON_WED, opens: '17:00', closes: '20:00' },
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
    hours: 'Lun–Sáb 8:00–13:00 · Lun–Jue 17:00–20:00 · Dom cerrado',
    openingHours: [
      { days: MON_SAT, opens: '08:00', closes: '13:00' },
      { days: MON_THU, opens: '17:00', closes: '20:00' },
    ],
    cid: '13728232508123488660',
    mapsUrl: 'https://maps.app.goo.gl/vdHgeyqod19UV18h7',
  },
]

export function isOpenNow(loc: Location, date = new Date()) {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Madrid',
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date)
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? ''
  const day = get('weekday')
  const time = `${get('hour')}:${get('minute')}`

  return loc.openingHours.some((oh) => oh.days.includes(day) && time >= oh.opens && time < oh.closes)
}
