import { NextPage } from "next"
import NavBar from "@/components/NavBar"
import RecipeForm from "@/components/RecipeForm"
import Footer from "@/components/Footer"

const CreateRecipe: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-6">Create Recipe</h1>
        <RecipeForm />
      </main>
      <Footer />
    </div>
  )
}

export default CreateRecipe