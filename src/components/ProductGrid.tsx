'use client'

import { useState, useMemo } from 'react'
import { Play, Eye, Heart, Star, Zap, Tv, X } from 'lucide-react'
import { products, Product } from '@/data/products'

interface ProductGridProps {
  selectedCategory: string | null
  selectedSubcategory: string | null
}

export function ProductGrid({ selectedCategory, selectedSubcategory }: ProductGridProps) {
  const [favorites, setFavorites] = useState<Set<string>>(new Set())
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState<string | null>(null)
  const [currentProductName, setCurrentProductName] = useState<string | null>(null)

  const toggleFavorite = (productId: string) => {
    const newFavorites = new Set(favorites)
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId)
    } else {
      newFavorites.add(productId)
    }
    setFavorites(newFavorites)
  }

  const openVideoModal = (videoUrl: string, productName: string) => {
    setCurrentVideo(videoUrl)
    setCurrentProductName(productName)
    setVideoModalOpen(true)
  }

  const closeVideoModal = () => {
    setVideoModalOpen(false)
    setCurrentVideo(null)
    setCurrentProductName(null)
  }

  // Filtrar productos según la selección
  const filteredProducts = useMemo(() => {
    if (!selectedCategory) {
      return products
    }

    let filtered = products.filter(product => product.category === selectedCategory)

    if (selectedSubcategory) {
      filtered = filtered.filter(product => product.subcategory === selectedSubcategory)
    }

    return filtered
  }, [selectedCategory, selectedSubcategory])

  const getTitle = () => {
    if (!selectedCategory) {
      return "Todos los Productos"
    }
    
    const categoryNames: Record<string, string> = {
      '32': 'Soportes 32 Pulgadas',
      '42': 'Soportes 42 Pulgadas', 
      '55': 'Soportes 55 Pulgadas'
    }

    const subcategoryNames: Record<string, string> = {
      'fixed': 'Soportes Fijos',
      'tilt': 'Soportes Inclinables',
      'full': 'Soportes Articulados',
      'corner': 'Soportes Esquineros',
      'motorized': 'Soportes Motorizados',
      'ceiling': 'Soportes de Techo'
    }

    if (selectedSubcategory) {
      return `${subcategoryNames[selectedSubcategory]} - ${categoryNames[selectedCategory]}`
    }

    return categoryNames[selectedCategory] || "Productos"
  }

  const getDescription = () => {
    if (!selectedCategory) {
      return "Explora nuestra colección completa de soportes premium para TV"
    }

    if (selectedSubcategory) {
      const descriptions: Record<string, string> = {
        'fixed': 'Soportes fijos para montaje seguro y estable',
        'tilt': 'Soportes inclinables para ajustar el ángulo de visión',
        'full': 'Soportes articulados con movimiento completo',
        'corner': 'Soportes especiales para instalación en esquinas',
        'motorized': 'Soportes motorizados con control remoto',
        'ceiling': 'Soportes para montaje en techo'
      }
      return descriptions[selectedSubcategory] || "Productos especializados"
    }

    const descriptions: Record<string, string> = {
      '32': 'Soportes especializados para televisores de 32 pulgadas',
      '42': 'Soportes ideales para televisores de 42 pulgadas',
      '55': 'Soportes robustos para televisores de 55 pulgadas'
    }

    return descriptions[selectedCategory] || "Productos de calidad premium"
  }

  return (
    <div className="flex-1 bg-gray-50 h-full overflow-y-auto">
      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{getTitle()}</h2>
          <p className="text-gray-600">{getDescription()}</p>
          <div className="text-sm text-gray-500 mt-1">
            {filteredProducts.length} producto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Tv className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-600 mb-2">
              No hay productos en esta categoría
            </h3>
            <p className="text-gray-500">
              Selecciona otra categoría para ver productos disponibles
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-1"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Imagen del producto */}
                <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200">
                  {product.video ? (
                    // Mostrar video como portada si está disponible
                    <video
                      src={product.video}
                      muted
                      loop
                      autoPlay
                      playsInline
                      className="w-full h-full object-cover"
                      onMouseEnter={(e) => {
                        const video = e.target as HTMLVideoElement
                        video.currentTime = 0
                        video.play()
                      }}
                    />
                  ) : (
                    // Mostrar placeholder si no hay video
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{product.category}&quot;</span>
                      </div>
                    </div>
                  )}
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col space-y-1">
                    {product.isNew && (
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        Nuevo
                      </span>
                    )}
                    {product.isBestSeller && (
                      <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        Más Vendido
                      </span>
                    )}
                  </div>

                  {/* Controles de hover */}
                  <div className={`absolute top-3 right-3 flex flex-col space-y-2 transition-opacity duration-300 ${
                    hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        favorites.has(product.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
                      }`}
                    >
                      <Heart className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-500 hover:text-white transition-all">
                      <Eye className="w-4 h-4" />
                    </button>
                    {product.video && (
                      <button 
                        onClick={() => openVideoModal(product.video!, product.name)}
                        className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center text-gray-600 hover:bg-green-500 hover:text-white transition-all"
                        title="Ver video completo"
                      >
                        <Play className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Información del producto */}
                <div className="p-4">
                  {/* Código del producto */}
                  <div className="bg-gray-100 text-gray-700 text-xs font-mono px-2 py-1 rounded mb-2 inline-block">
                    {product.code}
                  </div>
                  
                  <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-500 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Características principales */}
                  <div className="mb-3">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-1 text-xs text-gray-600">
                        <Zap className="w-3 h-3 text-blue-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Precio */}
                  <div className="border-t pt-3 mt-3">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        €{product.price}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Precio incluye IVA
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Información adicional */}
        <div className="mt-8 text-center">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              ¿Necesitas ayuda con la instalación?
            </h3>
            <p className="text-gray-600">
              Contacta con nuestro equipo técnico para asesoramiento personalizado
            </p>
          </div>
        </div>
      </div>

      {/* Modal de Video */}
      {videoModalOpen && currentVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh]">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold text-gray-800">
                Video: {currentProductName}
              </h3>
              <button
                onClick={closeVideoModal}
                className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            <div className="aspect-video">
              <video
                src={currentVideo}
                controls
                autoPlay
                className="w-full h-full"
                onError={(e) => {
                  console.error('Error loading video:', e)
                }}
              >
                Tu navegador no soporta la reproducción de video.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 