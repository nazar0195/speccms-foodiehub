import React, { useState } from 'react'
import { useRouter } from 'next/router'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import UserProfileCard from '@/components/UserProfileCard'
import RecipeCard from '@/components/RecipeCard'
import CollectionCard from '@/components/CollectionCard'

type TabKey = 'recipes' | 'collections' | 'followers' | 'following' | 'saved'

export default function UserProfile() {
  const router = useRouter()
  const { userId } = router.query
  const id = Array.isArray(userId) ? userId[0] : userId || ''
  const [activeTab, setActiveTab] = useState<TabKey>('recipes')

  const tabs: { key: TabKey; label: string }[] = [
    { key: 'recipes', label: 'Recipes' },
    { key: 'collections', label: 'Collections' },
    { key: 'followers', label: 'Followers' },
    { key: 'following', label: 'Following' },
    { key: 'saved', label: 'Saved Recipes' },
  ]

  // Placeholder data arrays
  const placeholderCount = 6
  const recipes = Array.from({ length: placeholderCount }, (_, i) => i)
  const collections = Array.from({ length: placeholderCount }, (_, i) => i)
  const followers = Array.from({ length: placeholderCount }, (_, i) => i)
  const following = Array.from({ length: placeholderCount }, (_, i) => i)
  const saved = Array.from({ length: placeholderCount }, (_, i) => i)

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <UserProfileCard />
        </div>
        <div className="mb-6 border-b border-gray-200">
          <nav className="-mb-px flex space-x-4">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`pb-2 px-3 font-medium ${
                  activeTab === tab.key
                    ? 'border-b-2 border-blue-500 text-blue-600'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
        <div>
          {activeTab === 'recipes' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {recipes.map((i) => (
                <RecipeCard key={i} />
              ))}
            </div>
          )}
          {activeTab === 'collections' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {collections.map((i) => (
                <CollectionCard key={i} />
              ))}
            </div>
          )}
          {activeTab === 'followers' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {followers.map((i) => (
                <UserProfileCard key={i} />
              ))}
            </div>
          )}
          {activeTab === 'following' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {following.map((i) => (
                <UserProfileCard key={i} />
              ))}
            </div>
          )}
          {activeTab === 'saved' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {saved.map((i) => (
                <RecipeCard key={i} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}