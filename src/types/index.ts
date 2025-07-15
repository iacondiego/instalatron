export interface TVSupport {
  id: string
  name: string
  price: number
  category: TVCategory
  image: string
  video?: string
  description: string
  specifications: Specification[]
  features: string[]
  inStock: boolean
}

export interface TVCategory {
  id: string
  name: string
  size: string
  description: string
  icon: string
  color: string
}

export interface Specification {
  label: string
  value: string
}

export interface NavigationItem {
  label: string
  href: string
  icon?: string
}

export interface FeatureItem {
  title: string
  description: string
  icon: string
} 