import React from "react"
import NavBar from "@/components/NavBar"
import CollectionCard from "@/components/CollectionCard"
import Footer from "@/components/Footer"

interface Collection {
  id: string
  name: string
  recipeCount: number
  coverImage: string
}

export default function MyCollections(): JSX.Element {
  const collections: Collection[] = [
    {
      id: "1",
      name: "Italian Favorites",
      recipeCount: 12,
      coverImage: "https://via.placeholder.com/300x200?text=Italian+Favorites",
    },
    {
      id: "2",
      name: "Healthy Salads",
      recipeCount: 8,
      coverImage: "https://via.placeholder.com/300x200?text=Healthy+Salads",
    },
    {
      id: "3",
      name: "Quick Desserts",
      recipeCount: 5,
      coverImage: "https://via.placeholder.com/300x200?text=Quick+Desserts",
    },
    {
      id: "4",
      name: "Vegan Delights",
      recipeCount: 10,
      coverImage: "https://via.placeholder.com/300x200?text=Vegan+Delights",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-6">My Collections</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {collections.map((collection) => (
            <CollectionCard
              key={collection.id}
              coverImage={collection.coverImage}
              name={collection.name}
              recipeCount={collection.recipeCount}
            />
          ))}
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-gray-400 transition">
            <span className="text-4xl text-gray-500 mb-2">+</span>
            <p className="text-gray-700 font-medium">Add New Collection</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}