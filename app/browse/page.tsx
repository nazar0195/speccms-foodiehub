import React from "react"
import NavBar from "@/components/NavBar"
import FilterSidebar from "@/components/FilterSidebar"
import RecipeCard from "@/components/RecipeCard"
import PaginationControls from "@/components/PaginationControls"
import Footer from "@/components/Footer"

export default function BrowseRecipes(): JSX.Element {
  const recipes = Array.from({ length: 12 }, (_, i) => ({ id: i }))

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex flex-1 container mx-auto px-4 py-6">
        <aside className="w-1/4 pr-4">
          <FilterSidebar />
        </aside>
        <main className="w-3/4">
          <h1 className="text-2xl font-semibold mb-4">Browse Recipes</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} />
            ))}
          </div>
          <div className="mt-6">
            <PaginationControls />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}