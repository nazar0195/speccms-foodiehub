import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import RecipeCard from '@/components/RecipeCard'
import UserProfileCard from '@/components/UserProfileCard'
import CollectionCard from '@/components/CollectionCard'

interface User {
  id: string
  name: string
  avatarUrl: string
  bio: string
  followerCount: number
  isFollowing: boolean
}

interface Recipe {
  id: string
  imageUrl: string
  title: string
  author: string
  rating: number
}

interface Collection {
  id: string
  coverImageUrl: string
  name: string
  count: number
}

type Tab = 'Recipes' | 'Collections' | 'Followers' | 'Following' | 'Saved Recipes'

export default function UserProfile(): JSX.Element {
  const router = useRouter()
  const { userId } = router.query
  const [user, setUser] = useState<User | null>(null)
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [collections, setCollections] = useState<Collection[]>([])
  const [followers, setFollowers] = useState<User[]>([])
  const [following, setFollowing] = useState<User[]>([])
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([])
  const [activeTab, setActiveTab] = useState<Tab>('Recipes')

  useEffect(() => {
    if (!userId) return
    async function fetchData() {
      const [userRes, recipesRes, collectionsRes, followersRes, followingRes, savedRes] = await Promise.all([
        fetch(`/api/users/${userId}`),
        fetch(`/api/users/${userId}/recipes`),
        fetch(`/api/users/${userId}/collections`),
        fetch(`/api/users/${userId}/followers`),
        fetch(`/api/users/${userId}/following`),
        fetch(`/api/users/${userId}/saved`)
      ])
      const userData: User = await userRes.json()
      const recipesData: Recipe[] = await recipesRes.json()
      const collectionsData: Collection[] = await collectionsRes.json()
      const followersData: User[] = await followersRes.json()
      const followingData: User[] = await followingRes.json()
      const savedData: Recipe[] = await savedRes.json()
      setUser(userData)
      setRecipes(recipesData)
      setCollections(collectionsData)
      setFollowers(followersData)
      setFollowing(followingData)
      setSavedRecipes(savedData)
    }
    fetchData()
  }, [userId])

  if (!user) {
    return (
      <>
        <NavBar />
        <div className="flex items-center justify-center h-screen">Loading...</div>
        <Footer />
      </>
    )
  }

  const tabs: Tab[] = ['Recipes', 'Collections', 'Followers', 'Following', 'Saved Recipes']

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <UserProfileCard
          id={user.id}
          name={user.name}
          avatarUrl={user.avatarUrl}
          bio={user.bio}
          followerCount={user.followerCount}
          isFollowing={user.isFollowing}
        />
        <div className="mt-8">
          <nav className="flex space-x-4 border-b">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 ${
                  activeTab === tab ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
          <div className="mt-6">
            {activeTab === 'Recipes' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {recipes.map(recipe => (
                  <RecipeCard
                    key={recipe.id}
                    id={recipe.id}
                    imageUrl={recipe.imageUrl}
                    title={recipe.title}
                    author={recipe.author}
                    rating={recipe.rating}
                  />
                ))}
              </div>
            )}
            {activeTab === 'Collections' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {collections.map(collection => (
                  <CollectionCard
                    key={collection.id}
                    id={collection.id}
                    coverImageUrl={collection.coverImageUrl}
                    name={collection.name}
                    count={collection.count}
                  />
                ))}
              </div>
            )}
            {activeTab === 'Followers' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {followers.map(f => (
                  <UserProfileCard
                    key={f.id}
                    id={f.id}
                    name={f.name}
                    avatarUrl={f.avatarUrl}
                    bio={f.bio}
                    followerCount={f.followerCount}
                    isFollowing={f.isFollowing}
                  />
                ))}
              </div>
            )}
            {activeTab === 'Following' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {following.map(f => (
                  <UserProfileCard
                    key={f.id}
                    id={f.id}
                    name={f.name}
                    avatarUrl={f.avatarUrl}
                    bio={f.bio}
                    followerCount={f.followerCount}
                    isFollowing={f.isFollowing}
                  />
                ))}
              </div>
            )}
            {activeTab === 'Saved Recipes' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {savedRecipes.map(recipe => (
                  <RecipeCard
                    key={recipe.id}
                    id={recipe.id}
                    imageUrl={recipe.imageUrl}
                    title={recipe.title}
                    author={recipe.author}
                    rating={recipe.rating}
                  />
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