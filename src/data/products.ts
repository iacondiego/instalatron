export interface Product {
  id: string
  code: string
  name: string
  price: number
  image: string
  video?: string
  rating: number
  reviews: number
  category: string
  subcategory: string
  features: string[]
  specifications: Record<string, string>
  isNew?: boolean
  isBestSeller?: boolean
  inStock: boolean
  description: string
}

export const products: Product[] = [
  // Soportes 32 Pulgadas (Solo 3 productos)
  {
    id: '32-fixed-01',
    code: 'SF32-001',
    name: 'Soporte Fijo Básico 32"',
    price: 35.99,
    image: '/images/32-fixed-01.jpg',
    video: 'https://res.cloudinary.com/dwv8eikxe/video/upload/v1752545772/1_jgkgsg.mp4',
    rating: 4.2,
    reviews: 87,
    category: '32',
    subcategory: 'fixed',
    features: ['Hasta 20kg', 'VESA 200x200', 'Instalación rápida'],
    specifications: {
      'Peso máximo': '20kg',
      'VESA': '200x200mm',
      'Perfil': '2.8cm',
      'Material': 'Acero pintado',
      'Garantía': '2 años'
    },
    inStock: true,
    description: 'Soporte fijo económico para TVs de 32 pulgadas.'
  },
  {
    id: '32-tilt-01',
    code: 'SI32-002',
    name: 'Soporte Inclinable Smart 32"',
    price: 49.99,
    image: '/images/32-tilt-01.jpg',
    video: 'https://res.cloudinary.com/dwv8eikxe/video/upload/v1752545783/2_hzmvzf.mp4',
    rating: 4.6,
    reviews: 134,
    category: '32',
    subcategory: 'tilt',
    features: ['Inclinación ±12°', 'Fácil ajuste', 'Hardware incluido'],
    specifications: {
      'Peso máximo': '25kg',
      'VESA': '200x200mm',
      'Inclinación': '±12°',
      'Material': 'Acero galvanizado',
      'Garantía': '3 años'
    },
    isBestSeller: true,
    inStock: true,
    description: 'Soporte inclinable ideal para reducir reflejos.'
  },
  {
    id: '32-full-01',
    code: 'SA32-003',
    name: 'Soporte Articulado Pro 32"',
    price: 79.99,
    image: '/images/32-full-01.jpg',
    video: 'https://res.cloudinary.com/dwv8eikxe/video/upload/v1752545788/13_seulu8.mp4',
    rating: 4.8,
    reviews: 203,
    category: '32',
    subcategory: 'full',
    features: ['Extensión 35cm', 'Rotación 180°', 'Gestión cables'],
    specifications: {
      'Peso máximo': '22kg',
      'VESA': '200x200mm',
      'Extensión': '35cm',
      'Rotación': '180°',
      'Garantía': '5 años'
    },
    isNew: true,
    inStock: true,
    description: 'Soporte con movimiento completo para máxima flexibilidad.'
  },

  // Soportes 42 Pulgadas (4 productos)
  {
    id: '42-fixed-01',
    code: 'SF42-001',
    name: 'Soporte Fijo Robusto 42"',
    price: 59.99,
    image: '/images/42-fixed-01.jpg',
    rating: 4.4,
    reviews: 156,
    category: '42',
    subcategory: 'fixed',
    features: ['Hasta 35kg', 'VESA 400x400', 'Montaje seguro'],
    specifications: {
      'Peso máximo': '35kg',
      'VESA': '400x400mm',
      'Perfil': '3.2cm',
      'Material': 'Acero reforzado',
      'Garantía': '5 años'
    },
    inStock: true,
    description: 'Soporte fijo resistente para TVs medianos.'
  },
  {
    id: '42-tilt-01',
    code: 'SI42-002',
    name: 'Soporte Inclinable Premium 42"',
    price: 89.99,
    image: '/images/42-tilt-01.jpg',
    rating: 4.5,
    reviews: 67,
    category: '42',
    subcategory: 'tilt',
    features: ['Inclinación ±20°', 'Sistema anti-vibración', 'Fácil instalación'],
    specifications: {
      'Peso máximo': '40kg',
      'VESA': '400x400mm',
      'Inclinación': '±20°',
      'Material': 'Aleación premium',
      'Garantía': '3 años'
    },
    inStock: true,
    description: 'Soporte inclinable con tecnología anti-vibración.'
  },
  {
    id: '42-full-01',
    code: 'SA42-003',
    name: 'Soporte Articulado Elite 42"',
    price: 149.99,
    image: '/images/42-full-01.jpg',
    video: '/videos/42-full-demo.mp4',
    rating: 4.8,
    reviews: 298,
    category: '42',
    subcategory: 'full',
    features: ['Extensión 50cm', 'Rotación 180°', 'Sistema hidráulico'],
    specifications: {
      'Peso máximo': '38kg',
      'VESA': '400x400mm',
      'Extensión': '50cm',
      'Rotación': '180°',
      'Garantía': '7 años'
    },
    isBestSeller: true,
    inStock: true,
    description: 'Soporte premium con movimiento hidráulico suave.'
  },
  {
    id: '42-corner-01',
    code: 'SE42-004',
    name: 'Soporte Esquinero 42"',
    price: 119.99,
    image: '/images/42-corner-01.jpg',
    rating: 4.3,
    reviews: 89,
    category: '42',
    subcategory: 'corner',
    features: ['Montaje esquina', 'Ajuste angular', 'Base reforzada'],
    specifications: {
      'Peso máximo': '35kg',
      'VESA': '400x400mm',
      'Ángulo': '45°-90°',
      'Material': 'Acero estructural',
      'Garantía': '4 años'
    },
    inStock: true,
    description: 'Soporte especializado para instalación en esquinas.'
  },

  // Soportes 55 Pulgadas (5 productos)
  {
    id: '55-fixed-01',
    code: 'SF55-001',
    name: 'Soporte Fijo Heavy Duty 55"',
    price: 89.99,
    image: '/images/55-fixed-01.jpg',
    rating: 4.9,
    reviews: 342,
    category: '55',
    subcategory: 'fixed',
    features: ['Hasta 50kg', 'VESA 600x400', 'Certificación TÜV'],
    specifications: {
      'Peso máximo': '50kg',
      'VESA': '600x400mm',
      'Perfil': '4cm',
      'Material': 'Acero industrial',
      'Garantía': '10 años'
    },
    isBestSeller: true,
    inStock: true,
    description: 'Soporte ultra resistente para TVs grandes.'
  },
  {
    id: '55-tilt-01',
    code: 'SI55-002',
    name: 'Soporte Inclinable Deluxe 55"',
    price: 129.99,
    image: '/images/55-tilt-01.jpg',
    rating: 4.7,
    reviews: 198,
    category: '55',
    subcategory: 'tilt',
    features: ['Inclinación ±25°', 'Micro-ajustes', 'Sistema bloqueo'],
    specifications: {
      'Peso máximo': '45kg',
      'VESA': '600x400mm',
      'Inclinación': '±25°',
      'Material': 'Aluminio aeronáutico',
      'Garantía': '5 años'
    },
    inStock: true,
    description: 'Soporte inclinable de lujo con micro-ajustes.'
  },
  {
    id: '55-full-01',
    code: 'SA55-003',
    name: 'Soporte Articulado Master 55"',
    price: 199.99,
    image: '/images/55-full-01.jpg',
    video: '/videos/55-full-demo.mp4',
    rating: 4.8,
    reviews: 267,
    category: '55',
    subcategory: 'full',
    features: ['Extensión 60cm', 'Rotación 180°', 'Control remoto'],
    specifications: {
      'Peso máximo': '48kg',
      'VESA': '600x400mm',
      'Extensión': '60cm',
      'Rotación': '180°',
      'Garantía': '8 años'
    },
    inStock: true,
    description: 'Soporte master con control remoto integrado.'
  },
  {
    id: '55-motorized-01',
    code: 'SM55-004',
    name: 'Soporte Motorizado Elite 55"',
    price: 349.99,
    image: '/images/55-motorized-01.jpg',
    video: '/videos/55-motorized-demo.mp4',
    rating: 4.9,
    reviews: 89,
    category: '55',
    subcategory: 'motorized',
    features: ['Control app', 'Movimiento silencioso', 'Memoria posiciones'],
    specifications: {
      'Peso máximo': '45kg',
      'VESA': '600x400mm',
      'Extensión': '60cm',
      'Control': 'WiFi + RF',
      'Garantía': '5 años'
    },
    isNew: true,
    inStock: true,
    description: 'Soporte motorizado de última generación.'
  },
  {
    id: '55-ceiling-01',
    code: 'ST55-005',
    name: 'Soporte Techo 55"',
    price: 159.99,
    image: '/images/55-ceiling-01.jpg',
    rating: 4.5,
    reviews: 112,
    category: '55',
    subcategory: 'ceiling',
    features: ['Montaje techo', 'Altura ajustable', 'Rotación 360°'],
    specifications: {
      'Peso máximo': '40kg',
      'VESA': '600x400mm',
      'Altura': '30-60cm',
      'Rotación': '360°',
      'Garantía': '6 años'
    },
    inStock: true,
    description: 'Soporte para montaje en techo con rotación completa.'
  }
]

export const categories = [
  {
    id: '32',
    name: 'Soportes 32 Pulgadas',
    description: 'Soportes especializados para TVs de 32 pulgadas',
    subcategories: [
      { id: 'fixed', name: 'Soportes Fijos', count: 1 },
      { id: 'tilt', name: 'Soportes Inclinables', count: 1 },
      { id: 'full', name: 'Soportes Articulados', count: 1 }
    ]
  },
  {
    id: '42',
    name: 'Soportes 42 Pulgadas',
    description: 'Soportes ideales para TVs de 42 pulgadas',
    subcategories: [
      { id: 'fixed', name: 'Soportes Fijos', count: 1 },
      { id: 'tilt', name: 'Soportes Inclinables', count: 1 },
      { id: 'full', name: 'Soportes Articulados', count: 1 },
      { id: 'corner', name: 'Soportes Esquineros', count: 1 }
    ]
  },
  {
    id: '55',
    name: 'Soportes 55 Pulgadas',
    description: 'Soportes robustos para TVs de 55 pulgadas',
    subcategories: [
      { id: 'fixed', name: 'Soportes Fijos', count: 1 },
      { id: 'tilt', name: 'Soportes Inclinables', count: 1 },
      { id: 'full', name: 'Soportes Articulados', count: 1 },
      { id: 'motorized', name: 'Soportes Motorizados', count: 1 },
      { id: 'ceiling', name: 'Soportes Techo', count: 1 }
    ]
  }
] 