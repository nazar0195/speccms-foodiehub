import NavBar from "@/components/NavBar";
import FilterSidebar from "@/components/FilterSidebar";
import RecipeCard from "@/components/RecipeCard";
import PaginationControls from "@/components/PaginationControls";
import Footer from "@/components/Footer";

export default function BrowseRecipes(): JSX.Element {
  const recipes = Array.from({ length: 12 }, (_, i) => i);

  return (
    <>
      <NavBar />
      <main className="container mx-auto px-4 py-6 flex flex-col lg:flex-row">
        <aside className="w-full lg:w-1/4 mb-6 lg:mb-0 lg:pr-4">
          <FilterSidebar />
        </aside>
        <section className="w-full lg:w-3/4">
          <h1 className="text-2xl font-bold mb-4">Browse Recipes</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {recipes.map((id) => (
              <RecipeCard key={id} />
            ))}
          </div>
          <div className="mt-6">
            <PaginationControls />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}