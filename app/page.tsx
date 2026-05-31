import React from 'react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import RecipeCard from '@/components/RecipeCard'
import UserProfileCard from '@/components/UserProfileCard'

type Recipe = {
  id: number
  image: string
  title: string
  author: string
  rating: number
}

type Chef = {
  id: number
  avatar: string
  name: string
  followerCount: number
}

export default function Home() {
  const featuredRecipes: Recipe[] = [
    { id: 1, image: '/images/recipe1.jpg', title: 'Spaghetti Bolognese', author: 'Chef Mario', rating: 4.5 },
    { id: 2, image: '/images/recipe2.jpg', title: 'Vegan Buddha Bowl', author: 'Chef Anna', rating: 4.8 },
    { id: 3, image: '/images/recipe3.jpg', title: 'Chocolate Lava Cake', author: 'Chef Lisa', rating: 4.9 },
    { id: 4, image: '/images/recipe4.jpg', title: 'Sushi Platter', author: 'Chef Ken', rating: 4.7 }
  ]

  const trendingChefs: Chef[] = [
    { id: 1, avatar: '/avatars/chef1.jpg', name: 'Chef Mario', followerCount: 12000 },
    { id: 2, avatar: '/avatars/chef2.jpg', name: 'Chef Anna', followerCount: 9800 },
    { id: 3, avatar: '/avatars/chef3.jpg', name: 'Chef Lisa', followerCount: 15000 },
    { id: 4, avatar: '/avatars/chef4.jpg', name: 'Chef Ken', followerCount: 11000 }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Featured Recipes</h2>
          <div className="overflow-x-auto">
            <div className="flex space-x-4">
              {featuredRecipes.map(recipe => (
                <RecipeCard
                  key={recipe.id}
                  image={recipe.image}
                  title={recipe.title}
                  author={recipe.author}
                  rating={recipe.rating}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Trending Chefs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {trendingChefs.map(chef => (
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