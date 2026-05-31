import React, { useState } from 'react'
import { useRouter } from 'next/router'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import RecipeCard from '@/components/RecipeCard'
import UserProfileCard from '@/components/UserProfileCard'
import CollectionCard from '@/components/CollectionCard'

export default function UserProfile(): JSX.Element {
  const router = useRouter()
  const { userId } = router.query as { userId: string }
  const tabs = ['Recipes', 'Collections', 'Followers', 'Following', 'Saved Recipes']
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0])

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <section className="mb-8">
          <UserProfileCard />
        </section>
        <section>
          <nav className="flex space-x-4 border-b">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`py-2 px-4 -mb-px border-b-2 ${
                  selectedTab === tab
                    ? 'border-blue-500 text-blue-500'
                    : 'border-transparent text-gray-600 hover:text-gray-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
          <div className="mt-6">
            {selectedTab === 'Recipes' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, idx) => (
                  <RecipeCard key={idx} />
                ))}
              </div>
            )}
            {selectedTab === 'Collections' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <CollectionCard key={idx} />
                ))}
              </div>
            )}
            {selectedTab === 'Followers' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <UserProfileCard key={idx} />
                ))}
              </div>
            )}
            {selectedTab === 'Following' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <UserProfileCard key={idx} />
                ))}
              </div>
            )}
            {selectedTab === 'Saved Recipes' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, idx) => (
                  <RecipeCard key={idx} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}