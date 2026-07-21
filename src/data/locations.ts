export interface Location {
  name: string
  address: string
  hours: string
}

export const locations: Location[] = [
  {
    name: 'Qaphi — Plaza de Toros',
    address: 'Av. Alcalde Alfonso de Rojas, 6',
    hours: 'Lun–Vie 8:00–19:00 · Sáb–Dom 9:00–20:00',
  },
  {
    name: 'Qaphi — San Blas',
    address: 'Glorieta Poeta Vicente Mojica, 6',
    hours: 'Todos los días 8:30–18:00',
  },
]
