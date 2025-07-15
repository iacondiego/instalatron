'use client'

import { useState, useEffect } from 'react'
import { Folder, FolderOpen, ChevronRight, ChevronDown, Tv, Monitor } from 'lucide-react'
import { categories } from '@/data/products'

interface FolderItem {
  id: string
  name: string
  type: 'folder' | 'product'
  children?: FolderItem[]
  productCount?: number
  icon?: string
}

interface FolderExplorerProps {
  onCategorySelect: (categoryId: string | null) => void
  onSubcategorySelect: (subcategoryId: string | null) => void
  selectedCategory: string | null
  selectedSubcategory: string | null
}

export function FolderExplorer({ 
  onCategorySelect, 
  onSubcategorySelect, 
  selectedCategory, 
  selectedSubcategory 
}: FolderExplorerProps) {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set())

  // Convertir datos a estructura de carpetas
  const folderStructure: FolderItem[] = categories.map(category => ({
    id: category.id,
    name: category.name,
    type: 'folder' as const,
    productCount: category.subcategories.reduce((total, sub) => total + sub.count, 0),
    children: category.subcategories.map(sub => ({
      id: `${category.id}-${sub.id}`,
      name: sub.name,
      type: 'folder' as const,
      productCount: sub.count
    }))
  }))

  const toggleFolder = (folderId: string) => {
    const newExpanded = new Set(expandedFolders)
    if (newExpanded.has(folderId)) {
      newExpanded.delete(folderId)
    } else {
      newExpanded.add(folderId)
    }
    setExpandedFolders(newExpanded)
  }

  const selectFolder = (folderId: string, isSubcategory: boolean = false) => {
    if (isSubcategory) {
      // Es una subcategoría
      const [categoryId, subcategoryId] = folderId.split('-')
      onCategorySelect(categoryId)
      onSubcategorySelect(subcategoryId)
    } else {
      // Es una categoría principal
      onCategorySelect(folderId)
      onSubcategorySelect(null)
             // Auto-expandir la carpeta seleccionada
       setExpandedFolders(prev => new Set(Array.from(prev).concat(folderId)))
    }
  }

  const clearSelection = () => {
    onCategorySelect(null)
    onSubcategorySelect(null)
  }

  const renderFolderItem = (item: FolderItem, level: number = 0) => {
    const isExpanded = expandedFolders.has(item.id)
    const isSelected = level === 0 
      ? selectedCategory === item.id 
      : selectedSubcategory && item.id.includes(selectedSubcategory)
    const hasChildren = item.children && item.children.length > 0

    return (
      <div key={item.id}>
        <div
          className={`flex items-center space-x-2 py-2 px-3 cursor-pointer rounded-lg transition-all hover:bg-blue-50 ${
            isSelected ? 'bg-blue-100 border-l-2 border-blue-500' : ''
          }`}
          style={{ paddingLeft: `${12 + level * 20}px` }}
          onClick={() => {
            if (hasChildren) {
              toggleFolder(item.id)
            }
            selectFolder(item.id, level > 0)
          }}
        >
          {hasChildren && (
            <button className="w-4 h-4 flex items-center justify-center">
              {isExpanded ? (
                <ChevronDown className="w-3 h-3 text-gray-600" />
              ) : (
                <ChevronRight className="w-3 h-3 text-gray-600" />
              )}
            </button>
          )}
          
          {!hasChildren && <div className="w-4"></div>}
          
          <div className="flex items-center space-x-2 flex-1">
            {item.type === 'folder' ? (
              isExpanded ? (
                <FolderOpen className="w-4 h-4 text-blue-500" />
              ) : (
                <Folder className="w-4 h-4 text-blue-600" />
              )
            ) : (
              <Monitor className="w-4 h-4 text-gray-500" />
            )}
            
            <span className="text-sm text-gray-700 font-medium">{item.name}</span>
            
            {item.productCount && (
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                {item.productCount}
              </span>
            )}
          </div>
        </div>
        
        {hasChildren && isExpanded && (
          <div>
            {item.children!.map(child => renderFolderItem(child, level + 1))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="w-80 bg-white border-r border-gray-200 h-full overflow-y-auto">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Tv className="w-5 h-5 text-blue-500" />
            <h2 className="font-semibold text-gray-800">Categorías</h2>
          </div>
          {(selectedCategory || selectedSubcategory) && (
            <button
              onClick={clearSelection}
              className="text-xs text-blue-600 hover:text-blue-800 font-medium"
            >
              Ver todos
            </button>
          )}
        </div>
        {(selectedCategory || selectedSubcategory) && (
          <div className="mt-2 text-xs text-gray-600">
            {selectedSubcategory ? 
              `Mostrando: ${categories.find(c => c.id === selectedCategory)?.subcategories.find(s => s.id === selectedSubcategory)?.name}` :
              `Mostrando: ${categories.find(c => c.id === selectedCategory)?.name}`
            }
          </div>
        )}
      </div>
      
      <div className="p-2">
        {folderStructure.map(item => renderFolderItem(item))}
      </div>
    </div>
  )
} 