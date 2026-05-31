import React, { useState, useEffect } from "react"
import NavBar from "@/components/NavBar"
import FilterSidebar from "@/components/FilterSidebar"
import RecipeCard from "@/components/RecipeCard"
import PaginationControls from "@/components/PaginationControls"
import Footer from "@/components/Footer"

interface Recipe {
  id: string
  title: string
  author: string
  rating: number
  image: string
}

export default function BrowseRecipes(): JSX.Element {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(1)

  useEffect(() => {
    async function fetchRecipes() {
      // fetch logic here
      const data = await Promise.resolve({ items: [], totalPages: 1 })
      setRecipes(data.items)
      setTotalPages(data.totalPages)
    }
    fetchRecipes()
  }, [currentPage])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex flex-1">
        <aside className="hidden lg:block w-64 p-4 border-r border-gray-200">
          <FilterSidebar />
        </aside>
        <main className="flex-1 p-4">
          <h1 className="text-3xl font-semibold mb-6">Browse Recipes</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                id={recipe.id}
                title={recipe.title}
                author={recipe.author}
                rating={recipe.rating}
                image={recipe.image}
              />
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <PaginationControls
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}