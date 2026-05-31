import type { NextPage } from 'next'
import Link from 'next/link'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CollectionCard from '@/components/CollectionCard'

interface Collection {
  id: string
  name: string
  coverImage: string
  recipeCount: number
}

const collectionData: Collection[] = [
  { id: '1', name: 'Healthy Eats', coverImage: '/images/collections/healthy-eats.jpg', recipeCount: 12 },
  { id: '2', name: 'Dessert Delights', coverImage: '/images/collections/dessert-delights.jpg', recipeCount: 8 },
  { id: '3', name: 'Quick & Easy', coverImage: '/images/collections/quick-easy.jpg', recipeCount: 15 }
]

const MyCollections: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">My Collections</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Link href="/my-collections/new">
            <a className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 text-gray-500 hover:border-gray-400 hover:text-gray-700 transition">
              <span className="text-4xl mb-2">+</span>
              <span className="font-medium">Add New Collection</span>
            </a>
          </Link>
          {collectionData.map((collection) => (
            <CollectionCard
              key={collection.id}
              coverImage={collection.coverImage}
              name={collection.name}
              recipeCount={collection.recipeCount}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default MyCollections