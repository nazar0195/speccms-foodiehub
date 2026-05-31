import { FC } from "react"
import NavBar from "@/components/NavBar"
import RecipeCard from "@/components/RecipeCard"
import UserProfileCard from "@/components/UserProfileCard"
import Footer from "@/components/Footer"

type Recipe = {
  id: string
  image: string
  title: string
  author: string
  rating: number
}

type Chef = {
  id: string
  avatar: string
  name: string
  followers: number
}

const featuredRecipes: Recipe[] = [
  {
    id: "1",
    image: "/images/recipe1.jpg",
    title: "Spaghetti Carbonara",
    author: "Chef Mario",
    rating: 4.8,
  },
  {
    id: "2",
    image: "/images/recipe2.jpg",
    title: "Avocado Toast",
    author: "Chef Anna",
    rating: 4.5,
  },
  {
    id: "3",
    image: "/images/recipe3.jpg",
    title: "Chicken Tikka Masala",
    author: "Chef Priya",
    rating: 4.9,
  },
  {
    id: "4",
    image: "/images/recipe4.jpg",
    title: "Vegan Buddha Bowl",
    author: "Chef Sam",
    rating: 4.7,
  },
]

const trendingChefs: Chef[] = [
  {
    id: "1",
    avatar: "/avatars/chef1.jpg",
    name: "Mario Rossi",
    followers: 12000,
  },
  {
    id: "2",
    avatar: "/avatars/chef2.jpg",
    name: "Anna Schmidt",
    followers: 9800,
  },
  {
    id: "3",
    avatar: "/avatars/chef3.jpg",
    name: "Priya Patel",
    followers: 15000,
  },
  {
    id: "4",
    avatar: "/avatars/chef4.jpg",
    name: "Samuel Lee",
    followers: 8700,
  },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-8 space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Featured Recipes</h2>
          <div className="flex space-x-6 overflow-x-auto pb-2">
            {featuredRecipes.map((recipe) => (
              <div key={recipe.id} className="flex-shrink-0 w-64">
                <RecipeCard
                  image={recipe.image}
                  title={recipe.title}
                  author={recipe.author}
                  rating={recipe.rating}
                />
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Trending Chefs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {trendingChefs.map((chef) => (
              <UserProfileCard
                key={chef.id}
                avatar={chef.avatar}
                name={chef.name}
                followers={chef.followers}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}