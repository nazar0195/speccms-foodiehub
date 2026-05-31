import { NextPage } from "next";
import NavBar from "@/components/NavBar";
import RecipeForm from "@/components/RecipeForm";
import Footer from "@/components/Footer";

const CreateRecipe: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header>
        <NavBar />
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Create Recipe</h1>
        <RecipeForm />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default CreateRecipe;