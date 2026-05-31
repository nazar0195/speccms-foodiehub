import React from 'react'
import NavBar from '@/components/NavBar'
import RecipeCard from '@/components/RecipeCard'
import UserProfileCard from '@/components/UserProfileCard'
import Footer from '@/components/Footer'

interface Recipe {
  id: number
  image: string
  title: string
  author: string
  rating: number
}

interface Chef {
  id: number
  avatar: string
  name: string
  followerCount: number
}

export default function Home(): JSX.Element {
  const featuredRecipes: Recipe[] = [
    { id: 1, image: '/images/recipe1.jpg', title: 'Spaghetti Bolognese', author: 'Chef Anna', rating: 4.5 },
    { id: 2, image: '/images/recipe2.jpg', title: 'Classic Cheesecake', author: 'Chef Ben', rating: 4.8 },
    { id: 3, image: '/images/recipe3.jpg', title: 'Grilled Salmon', author: 'Chef Clara', rating: 4.7 },
    { id: 4, image: '/images/recipe4.jpg', title: 'Vegan Buddha Bowl', author: 'Chef Daniel', rating: 4.6 },
  ]

  const trendingChefs: Chef[] = [
    { id: 1, avatar: '/avatars/chef1.jpg', name: 'Chef Anna', followerCount: 1200 },
    { id: 2, avatar: '/avatars/chef2.jpg', name: 'Chef Ben', followerCount: 1100 },
    { id: 3, avatar: '/avatars/chef3.jpg', name: 'Chef Clara', followerCount: 1500 },
    { id: 4, avatar: '/avatars/chef4.jpg', name: 'Chef Daniel', followerCount: 900 },
    { id: 5, avatar: '/avatars/chef5.jpg', name: 'Chef Eva', followerCount: 1300 },
    { id: 6, avatar: '/avatars/chef6.jpg', name: 'Chef Frank', followerCount: 800 },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Featured Recipes</h2>
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {featuredRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                image={recipe.image}
                title={recipe.title}
                author={recipe.author}
                rating={recipe.rating}
              />
            ))}
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Trending Chefs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {trendingChefs.map((chef) => (
              <UserProfileCard
                key={chef.id}
                avatar={chef.avatar}
                name={chef.name}
                followerCount={chef.followerCount}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}