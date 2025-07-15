import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Instalatron - Soportes Premium para TV',
  description: 'Encuentra el soporte perfecto para tu televisión. Calidad profesional y diseño moderno.',
  keywords: ['soportes tv', 'soporte television', 'montaje tv', 'soporte pared'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
} 