import React from 'react'
import Link from 'next/link'

type CollectionCardProps = {
  id: string
  name: string
  coverImageUrl: string
  recipeCount: number
}

const CollectionCard: React.FC<CollectionCardProps> = ({ id, name, coverImageUrl, recipeCount }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={coverImageUrl} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-sm text-gray-500 mb-4">
          {recipeCount} {recipeCount === 1 ? 'Recipe' : 'Recipes'}
        </p>
        <Link
          href={`/collections/${id}`}
          className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          View
        </Link>
      </div>
    </div>
  )
}

export default CollectionCard