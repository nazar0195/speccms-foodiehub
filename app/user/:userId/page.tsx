import React, { useState } from 'react'
import { useRouter } from 'next/router'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import UserProfileCard from '@/components/UserProfileCard'
import RecipeCard from '@/components/RecipeCard'
import CollectionCard from '@/components/CollectionCard'

type Tab = 'Recipes' | 'Collections' | 'Followers' | 'Following' | 'Saved Recipes'

export default function UserProfile() {
  const router = useRouter()
  const { userId } = router.query
  const [selectedTab, setSelectedTab] = useState<Tab>('Recipes')

  const recipes = Array.from({ length: 8 })
  const collections = Array.from({ length: 6 })
  const followers = Array.from({ length: 12 })
  const following = Array.from({ length: 10 })
  const savedRecipes = Array.from({ length: 5 })

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <UserProfileCard />
        <div className="mt-8">
          <nav className="flex space-x-6 border-b">
            {(['Recipes', 'Collections', 'Followers', 'Following', 'Saved Recipes'] as Tab[]).map((tab) => (
              <button
                key={tab}
                className={`pb-2 ${
                  selectedTab === tab
                    ? 'border-b-2 border-blue-500 text-blue-500'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setSelectedTab(tab)}
              >
                {tab}
              </button>
            ))}
          </nav>
          <div className="mt-6">
            {selectedTab === 'Recipes' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {recipes.map((_, idx) => (
                  <RecipeCard key={idx} />
                ))}
              </div>
            )}
            {selectedTab === 'Collections' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {collections.map((_, idx) => (
                  <CollectionCard key={idx} />
                ))}
              </div>
            )}
            {selectedTab === 'Followers' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {followers.map((_, idx) => (
                  <UserProfileCard key={idx} />
                ))}
              </div>
            )}
            {selectedTab === 'Following' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {following.map((_, idx) => (
                  <UserProfileCard key={idx} />
                ))}
              </div>
            )}
            {selectedTab === 'Saved Recipes' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {savedRecipes.map((_, idx) => (
                  <RecipeCard key={idx} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}