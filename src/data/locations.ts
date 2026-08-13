export interface Location {
  name: string
  address: string
  hours: string
  cid: string
  mapsUrl: string
}

export const locations: Location[] = [
  {
    name: 'Qaphi — Plaza de Toros',
    address: 'Av. Alcalde Alfonso de Rojas, 6',
    hours: 'Lun–Vie 8:00–19:00 · Sáb–Dom 9:00–20:00',
    cid: '10344719713758699532',
    mapsUrl: 'https://maps.app.goo.gl/KAmRsdCKRwUUT1yD8',
  },
  {
    name: 'Qaphi — San Blas',
    address: 'Glorieta Poeta Vicente Mojica, 6',
    hours: 'Todos los días 8:30–18:00',
    cid: '13728232508123488660',
    mapsUrl: 'https://maps.app.goo.gl/vdHgeyqod19UV18h7',
  },
]
