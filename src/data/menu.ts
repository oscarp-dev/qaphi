import qaphiGarden from '../assets/photos/hero.webp'
import huevosBenedict from '../assets/photos/tira-3.webp'
import matchaMango from '../assets/photos/destacado-matcha.webp'
import iceLatte from '../assets/photos/cafe-frio.webp'
import brunchCover from '../assets/photos/tira-2.webp'
import brunchCoverThumb from '../assets/photos/tira-2-thumb.webp'
import desayunoCoverThumb from '../assets/photos/tira-1-thumb.webp'
import specialtiesCoverThumb from '../assets/photos/tira-3-thumb.webp'
import blueLemon from '../assets/photos/bebida-1.webp'
import caramelIceLatte from '../assets/photos/coffee-1.webp'
import moccaIceLatte from '../assets/photos/coffee-2.webp'
import qaphiTropical from '../assets/photos/dulce-1.webp'
import sandwichKoreano from '../assets/photos/koreano.png'

export interface MenuItem {
  name: string
  price: string
  description?: string
  image?: string
  tag?: string
}

export interface MenuGroup {
  title?: string
  note?: string
  items: MenuItem[]
}

export interface MenuCategory {
  id: string
  label: string
  description: string
  image: string
  groups: MenuGroup[]
}

export const menu: MenuCategory[] = [
  {
    id: 'brunch',
    label: 'Brunch',
    description: 'Combinados y platos especiales para disfrutar sin prisa.',
    image: brunchCoverThumb,
    groups: [
      {
        title: 'Brunch combinado',
        note: 'Incluye café, zumo de naranja, bol de yogur y 1 mini. Las elaboraciones especiales no entran en la oferta del Brunch Clásico.',
        items: [
          {
            name: 'Brunch Clásico',
            price: '9,50 €',
            description: 'Café + tostada + 1 extra + zumo de naranja + bol de yogur y 1 mini.',
          },
          { name: 'Brunch Qaphi', price: '13,90 €', description: 'Café + 2 huevos fritos + bacon + pan de hogaza + zumo de naranja + bol de yogur y 1 mini.' },
          {
            name: 'Brunch Benedict',
            price: '18,80 €',
            description: 'Café + huevos benedictos + zumo de naranja + bol de yogur y 1 mini.',
            image: brunchCover,
            tag: 'Más vendido',
          },
          { name: 'Brunch Noruego', price: '19,80 €', description: 'Café + huevos benedictos con salmón + zumo de naranja + bol de yogur y 1 mini.' },
          { name: 'Brunch Koreano', price: '17,80 €', description: 'Café + sandwich koreano + zumo de naranja + bol de yogur y 1 mini.' },
        ],
      },
    ],
  },
  {
    id: 'specialties',
    label: 'Specialties',
    description: 'Nuestros benedict y sandwiches de la casa, a la carta.',
    image: specialtiesCoverThumb,
    groups: [
      {
        title: 'Specialties',
        items: [
          {
            name: 'Huevos Benedict',
            price: '9,90 €',
            description: 'Pan de hogaza de cereales, pavo, aguacate, huevos poché, salsa holandesa, cebollino y pimentón.',
            image: huevosBenedict,
            tag: 'Más vendido',
          },
          {
            name: 'Benedict Noruego',
            price: '10,90 €',
            description: 'Pan de hogaza de cereales, salmón, aguacate, huevos poché, salsa holandesa, cebollino y pimentón.',
          },
          {
            name: 'Croissant Benedict',
            price: '8,90 €',
            description: 'Croissant, pavo, aguacate, huevos poché, salsa holandesa, cebollino y pimentón.',
          },
          {
            name: 'Sandwich Koreano',
            price: '8,90 €',
            description: 'Pan de brioche, queso edam, jamón york, huevos revueltos, mayonesa y cebollino.',
            image: sandwichKoreano,
            tag: 'Más vendido',
          },
        ],
      },
    ],
  },
  {
    id: 'desayuno',
    label: 'Desayuno',
    description: 'Algo sencillo para empezar el día, café en mano.',
    image: desayunoCoverThumb,
    groups: [
      {
        title: 'Desayunos',
        note: 'Individuales. Las elaboraciones especiales no entran en esta oferta, no válida en festivos.',
        items: [
          { name: 'Desayuno Clásico', price: '3,20 €', description: 'Café + ½ tostada (aceite, tomate, mantequilla o mantequilla y mermelada).' },
          { name: 'Desayuno Dulce', price: '3,20 €', description: 'Café + croissant.' },
          { name: '½ Tostada', price: '1,60 €', description: 'Aceite, tomate, mantequilla o mantequilla y mermelada.' },
        ],
      },
      {
        title: 'Extras para tostadas',
        note: 'Precio por cada extra añadido a la tostada.',
        items: [
          { name: 'Queso fresco, atún, pavo o aguacate', price: '1,40 €' },
          { name: 'Queso semicurado, jamón York o jamón Serrano', price: '1,40 €' },
          { name: 'Monodosis de aceite, mantequilla o mermelada', price: '0,20 €' },
        ],
      },
      {
        title: 'Extras premium',
        items: [
          { name: 'Salmón', price: '2,50 €' },
          { name: 'Tortilla francesa', price: '2,50 €' },
        ],
      },
      {
        title: 'Zumos',
        items: [
          { name: 'Zumo de naranja grande', price: '3,20 €' },
          { name: 'Zumo de naranja pequeño', price: '2,60 €' },
        ],
      },
    ],
  },
  {
    id: 'dulces',
    label: 'Dulces',
    description: 'Tortitas, crepes y algo dulce para acompañar el café.',
    image: qaphiTropical,
    groups: [
      {
        title: 'Tortitas y crepes',
        note: 'Incluyen 1 topping + nata: nocilla, chocolate, chocolate blanco, lotus, dulce de leche o pistacho (+1 €).',
        items: [
          { name: 'Tortitas', price: '5,50 €' },
          { name: 'Crepes', price: '4,50 €' },
        ],
      },
      {
        title: 'Extras dulces',
        items: [
          { name: 'Fruta', price: '1,50 €' },
          { name: 'Bola de helado', price: '1,70 €', description: 'Chocolate, vainilla o fresa.' },
        ],
      },
      {
        title: 'French Toast',
        items: [
          {
            name: 'Parisino',
            price: '8,50 €',
            description: 'Big brioche a la plancha, nocilla, fruta de temporada y bola de helado de vainilla.',
          },
        ],
      },
      {
        title: 'Tortitas al estilo Qaphi',
        items: [
          {
            name: 'Qaphi Garden',
            price: '10,50 €',
            description:
              'Torre de tortitas esponjosas con capas de plátano fresco, bañadas en salsa de nocilla y coronadas con nata montada, frutos rojos, cama de galleta oreo y detalles florales.',
            image: qaphiGarden,
            tag: 'Más vendido',
          },
          {
            name: 'Qaphi Tropical',
            price: '10,50 €',
            description:
              'Torre de tortitas esponjosas con capas de frutos rojos, bañadas en chocolate blanco con nata montada, sobre puré de mango y galleta lotus.',
            image: qaphiTropical,
          },
        ],
      },
    ],
  },
  {
    id: 'cafe',
    label: 'Café',
    description: 'Nuestro espresso de casa, en todas sus formas.',
    image: caramelIceLatte,
    groups: [
      {
        title: 'Café caliente',
        items: [
          { name: 'Espresso', price: '1,50 €' },
          { name: 'Cortado', price: '1,70 €' },
          { name: 'Café con leche', price: '2,00 €' },
          { name: 'Americano', price: '1,80 €' },
          { name: 'Café doble', price: '2,50 €' },
          { name: 'Bombón', price: '2,00 €' },
          { name: 'Flat White', price: '2,70 €' },
          { name: 'Latte Macchiato', price: '2,70 €' },
          { name: 'Latte XL', price: '2,80 €' },
          { name: 'Capuchino', price: '3,00 €' },
          { name: 'Capuchino Qaphi', price: '3,70 €', description: 'Avellana o vainilla.' },
          { name: 'Chocolate caliente', price: '3,20 €' },
          { name: 'Chocolate & Cream', price: '3,70 €' },
          { name: 'Chai Latte Vainilla', price: '2,90 €' },
          { name: 'Mocca Latte', price: '3,80 €' },
          { name: 'Caramel Latte', price: '3,80 €' },
          { name: 'Matcha Latte', price: '3,80 €' },
          {
            name: 'Matcha Mango',
            price: '4,50 €',
            description: 'Matcha ceremonial con puré de mango.',
          },
          { name: 'Matcha Strawberries', price: '4,50 €' },
        ],
      },
      {
        title: 'Café frío',
        note: 'Leches especiales (sin lactosa, avena o soja) +0,20 € · Extra de hielo +0,10 €.',
        items: [
          { name: 'Ice Latte', price: '3,50 €', image: iceLatte },
          { name: 'Caramel Ice Latte', price: '4,50 €', image: caramelIceLatte, tag: 'Más vendido' },
          { name: 'Mocca Ice Latte', price: '4,50 €', image: moccaIceLatte },
          { name: 'Matcha Ice Latte', price: '4,70 €' },
          { name: 'Matcha Ice Strawberries', price: '5,00 €', image: matchaMango, tag: 'Más vendido' },
          { name: 'Matcha Ice Mango', price: '5,00 €' },
        ],
      },
      {
        title: 'Frappés',
        items: [
          { name: 'Qaphi Avellana', price: '4,20 €' },
          { name: 'Qaphi Vainilla', price: '4,20 €' },
          { name: 'Frappé de Oreo', price: '5,00 €' },
          { name: 'Frappé de Lotus', price: '5,00 €' },
          { name: 'Frappé de Cookies', price: '5,00 €' },
        ],
      },
    ],
  },
  {
    id: 'bebidas',
    label: 'Bebidas',
    description: 'Tés, infusiones y batidos tropicales para refrescar el día.',
    image: blueLemon,
    groups: [
      {
        title: 'Té caliente',
        items: [
          { name: 'Té verde con hierbabuena', price: '2,00 €' },
          { name: 'Té verde Sencha', price: '2,00 €' },
          { name: 'Té negro inglés', price: '2,00 €' },
          { name: 'Té negro canela', price: '2,00 €' },
          { name: 'Té negro Chai', price: '2,00 €' },
          { name: 'Blue Lemon', price: '2,80 €' },
          { name: 'Frutas del bosque', price: '2,00 €' },
          { name: 'Manzanilla', price: '2,00 €' },
          { name: 'Rooibos tropical', price: '2,00 €' },
          { name: 'Menta poleo', price: '2,00 €' },
          { name: 'Infusión + leche', price: '2,20 €' },
        ],
      },
      {
        title: 'Té frío',
        items: [
          { name: 'Té Frutas del Bosque', price: '4,20 €', description: 'Sabor intenso y dulce de frutos rojos en cada sorbo.' },
          { name: 'Té Verde Hierbabuena', price: '4,20 €', description: 'Refresca tu día con el sabor puro del té verde y hierbabuena.' },
          {
            name: 'Té Blue Lemon',
            price: '4,80 €',
            description: 'Bebida floral y refrescante, naturalmente azul, con un toque de limón.',
            image: blueLemon,
            tag: 'Más vendido',
          },
          { name: 'Té Rooibos Tropical', price: '4,20 €', description: 'Sabor tropical y natural, con la suavidad del rooibos.' },
        ],
      },
      {
        title: 'Batidos tropicales',
        note: 'Solo en temporada de verano.',
        items: [
          { name: 'Batido de Guanábana', price: '5,00 €', description: 'Dulzura tropical en cada sorbo.' },
          { name: 'Batido de Mora', price: '5,00 €', description: 'Intenso, cremoso y lleno de sabor a mora.' },
          { name: 'Batido de Maracuyá', price: '5,00 €', description: 'La frescura vibrante del maracuyá.' },
          { name: 'Batido de Mango', price: '5,00 €', description: 'El mango más dulce, ahora en batido.' },
        ],
      },
    ],
  },
]
