import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
  }).format(price)
}

export function getTVSizeLabel(size: string): string {
  const sizeMap: Record<string, string> = {
    '32': '32 Pulgadas',
    '42': '42 Pulgadas',
    '55': '55 Pulgadas',
  }
  return sizeMap[size] || size
} 