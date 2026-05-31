import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import UserProfileCard from '@/components/UserProfileCard'
import RecipeCard from '@/components/RecipeCard'
import CollectionCard from '@/components/CollectionCard'

type Tab = 'Recipes' | 'Collections' | 'Followers' | 'Following' | 'Saved Recipes'

export default function UserProfile(): JSX.Element {
  const router = useRouter()
  const { userId } = router.query
  const [activeTab, setActiveTab] = useState<Tab>('Recipes')
  const [userProfile, setUserProfile] = useState<any>(null)
  const [recipes, setRecipes] = useState<any[]>([])
  const [collections, setCollections] = useState<any[]>([])
  const [followers, setFollowers] = useState<any[]>([])
  const [following, setFollowing] = useState<any[]>([])
  const [savedRecipes, setSavedRecipes] = useState<any[]>([])

  useEffect(() => {
    if (userId) {
      // Fetch user profile, recipes, collections, followers, following, saved recipes
      // and set state accordingly
    }
  }, [userId])

  const tabs: Tab[] = ['Recipes', 'Collections', 'Followers', 'Following', 'Saved Recipes']

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          {userProfile && <UserProfileCard {...userProfile} />}
          <div className="mt-4 flex space-x-2">
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Follow</button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded">Edit Profile</button>
          </div>
        </div>
        <div>
          <nav className="border-b mb-4">
            <ul className="flex space-x-4">
              {tabs.map(tab => (
                <li key={tab}>
                  <button
                    onClick={() => setActiveTab(tab)}
                    className={`py-2 ${
                      activeTab === tab
                        ? 'border-b-2 border-blue-500 text-blue-500'
                        : 'text-gray-600'
                    }`}
                  >
                    {tab}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            {activeTab === 'Recipes' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {recipes.map(recipe => (
                  <RecipeCard key={recipe.id} {...recipe} />
                ))}
              </div>
            )}
            {activeTab === 'Collections' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {collections.map(collection => (
                  <CollectionCard key={collection.id} {...collection} />
                ))}
              </div>
            )}
            {activeTab === 'Followers' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {followers.map(user => (
                  <UserProfileCard key={user.id} {...user} />
                ))}
              </div>
            )}
            {activeTab === 'Following' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {following.map(user => (
                  <UserProfileCard key={user.id} {...user} />
                ))}
              </div>
            )}
            {activeTab === 'Saved Recipes' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {savedRecipes.map(recipe => (
                  <RecipeCard key={recipe.id} {...recipe} />
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