'use client'

import { FeatureItem } from '@/types'

const features: FeatureItem[] = [
  {
    title: 'Instalación Segura',
    description: 'Todos nuestros soportes incluyen herrajes de alta calidad para una instalación 100% segura',
    icon: '🔧'
  },
  {
    title: 'Diseño Moderno',
    description: 'Estética minimalista que se adapta perfectamente a cualquier decoración',
    icon: '🎨'
  },
  {
    title: 'Garantía Extendida',
    description: 'Respaldamos la calidad de nuestros productos con garantía extendida',
    icon: '🛡️'
  },
  {
    title: 'Soporte Técnico',
    description: 'Asesoramiento profesional para elegir el soporte ideal para tu TV',
    icon: '💬'
  }
]

export function Features() {
  return (
    <section className="py-20 bg-secondary-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary-900 mb-4">
            ¿Por qué elegir nuestros soportes?
          </h2>
          <p className="text-xl text-secondary-600">
            Calidad, seguridad y diseño en cada producto
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-secondary-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 