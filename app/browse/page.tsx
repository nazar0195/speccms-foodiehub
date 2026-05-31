import React, { useState, useEffect } from "react"
import NavBar from "@/components/NavBar"
import FilterSidebar from "@/components/FilterSidebar"
import RecipeCard from "@/components/RecipeCard"
import Footer from "@/components/Footer"

type Recipe = {
  id: string
  image: string
  title: string
  author: string
  rating: number
}

type PaginationControlsProps = {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

function PaginationControls({ currentPage, totalPages, onPageChange }: PaginationControlsProps): JSX.Element {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  return (
    <nav className="flex items-center space-x-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
      >
        Previous
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded ${page === currentPage ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
      >
        Next
      </button>
    </nav>
  )
}

export default function BrowseRecipes(): JSX.Element {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8

  useEffect(() => {
    const fetched: Recipe[] = Array.from({ length: 32 }, (_, i) => ({
      id: `${i + 1}`,
      image: "/images/recipe-placeholder.jpg",
      title: `Recipe Title ${i + 1}`,
      author: `Author ${i + 1}`,
      rating: Math.floor(Math.random() * 5) + 1,
    }))
    setRecipes(fetched)
  }, [])

  const totalPages = Math.ceil(recipes.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentRecipes = recipes.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex flex-1">
        <aside className="hidden md:block w-64 bg-white border-r">
          <FilterSidebar />
        </aside>
        <main className="flex-1 p-6 bg-gray-50">
          <h1 className="text-2xl font-semibold mb-4">Browse Recipes</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                image={recipe.image}
                title={recipe.title}
                author={recipe.author}
                rating={recipe.rating}
              />
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <PaginationControls
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}