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
  followers: number
}

export default function Home() {
  const featuredRecipes: Recipe[] = [
    { id: 1, image: '/images/recipe1.jpg', title: 'Spicy Ramen', author: 'Chef Aiko', rating: 4.8 },
    { id: 2, image: '/images/recipe2.jpg', title: 'Avocado Toast', author: 'Chef Marco', rating: 4.5 },
    { id: 3, image: '/images/recipe3.jpg', title: 'Chocolate Cake', author: 'Chef Lina', rating: 4.9 },
    { id: 4, image: '/images/recipe4.jpg', title: 'Quinoa Salad', author: 'Chef Raj', rating: 4.6 },
    { id: 5, image: '/images/recipe5.jpg', title: 'Pancakes', author: 'Chef Emma', rating: 4.7 },
  ]

  const trendingChefs: Chef[] = [
    { id: 1, avatar: '/avatars/chef1.jpg', name: 'Chef Aiko', followers: 12400 },
    { id: 2, avatar: '/avatars/chef2.jpg', name: 'Chef Marco', followers: 9800 },
    { id: 3, avatar: '/avatars/chef3.jpg', name: 'Chef Lina', followers: 11200 },
    { id: 4, avatar: '/avatars/chef4.jpg', name: 'Chef Raj', followers: 8700 },
    { id: 5, avatar: '/avatars/chef5.jpg', name: 'Chef Emma', followers: 10200 },
    { id: 6, avatar: '/avatars/chef6.jpg', name: 'Chef Oliver', followers: 9400 },
    { id: 7, avatar: '/avatars/chef7.jpg', name: 'Chef Sofia', followers: 11500 },
    { id: 8, avatar: '/avatars/chef8.jpg', name: 'Chef Lucas', followers: 8900 },
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