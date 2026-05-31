import { NextPage } from 'next'
import { useRouter } from 'next/router'
import NavBar from '@/components/NavBar'
import CollectionCard from '@/components/CollectionCard'
import Footer from '@/components/Footer'

interface Collection {
  id: string
  name: string
  coverImage: string
  recipeCount: number
}

const collections: Collection[] = [
  {
    id: '1',
    name: 'Desserts',
    coverImage: '/images/collections/desserts.jpg',
    recipeCount: 12,
  },
  {
    id: '2',
    name: 'Healthy Choices',
    coverImage: '/images/collections/healthy.jpg',
    recipeCount: 8,
  },
  {
    id: '3',
    name: 'Quick Meals',
    coverImage: '/images/collections/quick.jpg',
    recipeCount: 15,
  },
]

export default function MyCollections(): JSX.Element {
  const router = useRouter()

  const handleViewCollection = (id: string) => {
    router.push(`/collections/${id}`)
  }

  const handleAddNewCollection = () => {
    router.push('/create-collection')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">My Collections</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {collections.map((collection) => (
            <CollectionCard
              key={collection.id}
              coverImage={collection.coverImage}
              name={collection.name}
              recipeCount={collection.recipeCount}
              onView={() => handleViewCollection(collection.id)}
            />
          ))}
          <div
            onClick={handleAddNewCollection}
            className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 transition"
          >
            <span className="text-xl font-medium text-gray-600">+ Add New Collection</span>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}