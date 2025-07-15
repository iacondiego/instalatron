'use client'

import { useState } from 'react'
import { FolderExplorer } from '@/components/FolderExplorer'
import { TopBar } from '@/components/TopBar'
import { ProductGrid } from '@/components/ProductGrid'

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <TopBar />
      <div className="flex h-screen pt-16">
        <FolderExplorer 
          onCategorySelect={setSelectedCategory}
          onSubcategorySelect={setSelectedSubcategory}
          selectedCategory={selectedCategory}
          selectedSubcategory={selectedSubcategory}
        />
        <ProductGrid 
          selectedCategory={selectedCategory}
          selectedSubcategory={selectedSubcategory}
        />
      </div>
    </div>
  )
} 