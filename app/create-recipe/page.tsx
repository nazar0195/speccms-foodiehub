import React from 'react'
import NavBar from '@/components/NavBar'
import RecipeForm from '@/components/RecipeForm'
import Footer from '@/components/Footer'

export default function CreateRecipe(): JSX.Element {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Create Recipe</h1>
        <RecipeForm />
      </main>
      <Footer />
    </div>
  )
}