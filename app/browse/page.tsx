import React, { useState } from 'react'
import NavBar from '@/components/NavBar'
import FilterSidebar from '@/components/FilterSidebar'
import RecipeCard from '@/components/RecipeCard'
import PaginationControls from '@/components/PaginationControls'
import Footer from '@/components/Footer'

type Recipe = {
  id: number
  image: string
  title: string
  author: string
  rating: number
}

const allRecipes: Recipe[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  image: `https://via.placeholder.com/300x200?text=Recipe+${i + 1}`,
  title: `Recipe Title ${i + 1}`,
  author: `Author ${((i % 5) + 1)}`,
  rating: Math.round(Math.random() * 5 * 10) / 10,
}))

export default function BrowseRecipes(): JSX.Element {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const recipesPerPage = 12
  const totalPages = Math.ceil(allRecipes.length / recipesPerPage)
  const startIndex = (currentPage - 1) * recipesPerPage
  const currentRecipes = allRecipes.slice(startIndex, startIndex + recipesPerPage)

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex flex-1 container mx-auto px-4 py-6">
        <aside className="w-64 mr-6 hidden lg:block">
          <FilterSidebar />
        </aside>
        <main className="flex-1">
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