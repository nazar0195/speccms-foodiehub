import React from "react"
import Link from "next/link"
import NavBar from "@/components/NavBar"
import CollectionCard from "@/components/CollectionCard"
import Footer from "@/components/Footer"

type Collection = {
  id: string
  name: string
  coverImage: string
  recipeCount: number
}

const dummyCollections: Collection[] = [
  {
    id: "1",
    name: "Summer Salads",
    coverImage: "/images/collections/summer-salads.jpg",
    recipeCount: 12,
  },
  {
    id: "2",
    name: "Quick Breakfasts",
    coverImage: "/images/collections/quick-breakfasts.jpg",
    recipeCount: 8,
  },
  {
    id: "3",
    name: "Vegan Delights",
    coverImage: "/images/collections/vegan-delights.jpg",
    recipeCount: 15,
  },
  {
    id: "4",
    name: "Holiday Feasts",
    coverImage: "/images/collections/holiday-feasts.jpg",
    recipeCount: 10,
  },
]

export default function MyCollections() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">My Collections</h1>
        </header>
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <Link href="/my-collections/new">
              <a className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-gray-400 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span className="mt-2 text-gray-600 font-medium">Add New Collection</span>
              </a>
            </Link>
            {dummyCollections.map((collection) => (
              <CollectionCard
                key={collection.id}
                coverImage={collection.coverImage}
                name={collection.name}
                recipeCount={collection.recipeCount}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}