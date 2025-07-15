'use client'

export function Hero() {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-secondary-900 mb-6">
            Soportes Premium para{' '}
            <span className="gradient-text">Tu Televisión</span>
          </h1>
          <p className="text-xl text-secondary-600 mb-8 leading-relaxed">
            Encuentra el soporte perfecto para tu TV con nuestra colección de productos
            de alta calidad, diseñados para brindar seguridad y estilo a tu hogar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Ver Productos
            </button>
            <button className="border border-primary-500 text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-lg font-medium transition-colors">
              Contactar
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 