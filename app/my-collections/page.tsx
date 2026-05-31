import React from 'react'
import NavBar from "@/components/NavBar"
import CollectionCard from "@/components/CollectionCard"
import Footer from "@/components/Footer"

interface Collection {
  id: number
  name: string
  coverImage: string
  recipeCount: number
}

export default function MyCollections(): JSX.Element {
  const collections: Collection[] = [
    { id: 1, name: "Breakfast Favorites", coverImage: "/images/breakfast.jpg", recipeCount: 12 },
    { id: 2, name: "Healthy Dinners", coverImage: "/images/dinner.jpg", recipeCount: 8 },
    { id: 3, name: "Dessert Delights", coverImage: "/images/dessert.jpg", recipeCount: 15 },
    { id: 4, name: "Vegan Specials", coverImage: "/images/vegan.jpg", recipeCount: 10 },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-6">My Collections</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="flex flex-col justify-center items-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 p-6">
            <span className="text-4xl font-bold text-gray-400 mb-2">+</span>
            <span className="text-gray-600 font-medium">Add New Collection</span>
          </div>
          {collections.map(({ id, name, coverImage, recipeCount }) => (
            <CollectionCard
              key={id}
              coverImage={coverImage}
              name={name}
              recipeCount={recipeCount}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}