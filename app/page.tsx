import React from 'react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import RecipeCard from '@/components/RecipeCard'
import UserProfileCard from '@/components/UserProfileCard'

type Recipe = {
  id: number
  title: string
  author: string
  image: string
  rating: number
}

type Chef = {
  id: number
  name: string
  avatar: string
  followers: number
}

export default function Home(): JSX.Element {
  const featuredRecipes: Recipe[] = [
    { id: 1, title: 'Avocado Toast', author: 'Jane Doe', image: '/images/avocado-toast.jpg', rating: 4.5 },
    { id: 2, title: 'Spicy Ramen', author: 'John Smith', image: '/images/spicy-ramen.jpg', rating: 4.8 },
    { id: 3, title: 'Vegan Tacos', author: 'Alice Johnson', image: '/images/vegan-tacos.jpg', rating: 4.7 },
    { id: 4, title: 'Chocolate Cake', author: 'Bob Brown', image: '/images/chocolate-cake.jpg', rating: 4.9 },
  ]

  const trendingChefs: Chef[] = [
    { id: 1, name: 'Chef Emma', avatar: '/avatars/emma.jpg', followers: 12000 },
    { id: 2, name: 'Chef Liam', avatar: '/avatars/liam.jpg', followers: 9800 },
    { id: 3, name: 'Chef Olivia', avatar: '/avatars/olivia.jpg', followers: 15000 },
    { id: 4, name: 'Chef Noah', avatar: '/avatars/noah.jpg', followers: 11000 },
    { id: 5, name: 'Chef Ava', avatar: '/avatars/ava.jpg', followers: 13000 },
    { id: 6, name: 'Chef Mason', avatar: '/avatars/mason.jpg', followers: 9000 },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <section aria-labelledby="featured-recipes" className="mb-12">
          <h2 id="featured-recipes" className="text-2xl font-semibold mb-4">Featured Recipes</h2>
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {featuredRecipes.map(recipe => (
              <div key={recipe.id} className="min-w-[250px]">
                <RecipeCard
                  image={recipe.image}
                  title={recipe.title}
                  author={recipe.author}
                  rating={recipe.rating}
                  onAction={() => {}}
                />
              </div>
            ))}
          </div>
        </section>
        <section aria-labelledby="trending-chefs" className="mb-12">
          <h2 id="trending-chefs" className="text-2xl font-semibold mb-4">Trending Chefs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {trendingChefs.map(chef => (
              <UserProfileCard
                key={chef.id}
                avatar={chef.avatar}
                name={chef.name}
                followers={chef.followers}
                onFollow={() => {}}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}