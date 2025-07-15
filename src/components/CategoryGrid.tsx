'use client'

import { TVCategory } from '@/types'

const categories: TVCategory[] = [
  {
    id: '32',
    name: 'Soportes 32"',
    size: '32',
    description: 'Perfectos para televisores de 32 pulgadas',
    icon: '📺',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: '42',
    name: 'Soportes 42"',
    size: '42',
    description: 'Ideales para televisores de 42 pulgadas',
    icon: '📺',
    color: 'from-green-500 to-green-600'
  },
  {
    id: '55',
    name: 'Soportes 55"',
    size: '55',
    description: 'Diseñados para televisores de 55 pulgadas',
    icon: '📺',
    color: 'from-purple-500 to-purple-600'
  }
]

export function CategoryGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary-900 mb-4">
            Categorías de Productos
          </h2>
          <p className="text-xl text-secondary-600">
            Explora nuestra colección organizada por tamaño de televisión
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden card-hover"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <div className="p-8 text-center">
                <div className="text-6xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-secondary-600 mb-6">{category.description}</p>
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                  Ver Productos
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 