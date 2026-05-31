import React from "react"
import NavBar from "@/components/NavBar"
import RecipeForm from "@/components/RecipeForm"
import Footer from "@/components/Footer"

export default function CreateRecipe(): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-semibold text-gray-900 mb-6">Create Recipe</h1>
        <div className="max-w-3xl mx-auto">
          <RecipeForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}