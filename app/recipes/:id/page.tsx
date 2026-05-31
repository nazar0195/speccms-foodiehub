import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import RecipeCard from '@/components/RecipeCard'
import UserProfileCard from '@/components/UserProfileCard'
import ReviewList from '@/components/ReviewList'
import ReviewForm from '@/components/ReviewForm'

interface Recipe {
  id: string
  title: string
  images: string[]
  description: string
  rating: number
  categories: string[]
  ingredients: string[]
  steps: string[]
  authorId: string
}

interface User {
  id: string
  name: string
  avatarUrl: string
  followers: number
}

interface Review {
  id: string
  reviewerName: string
  rating: number
  comment: string
}

export default function RecipeDetail() {
  const router = useRouter()
  const { id } = router.query

  const [recipe, setRecipe] = useState<Recipe | null>(null)
  const [author, setAuthor] = useState<User | null>(null)
  const [reviews, setReviews] = useState<Review[]>([])

  useEffect(() => {
    if (typeof id === 'string') {
      // Fetch or load recipe, author, and reviews here
      // Placeholder data for structure
      setRecipe({
        id,
        title: 'Sample Recipe Title',
        images: ['/images/1.jpg', '/images/2.jpg'],
        description: 'Delicious sample recipe description.',
        rating: 4.5,
        categories: ['Dessert', 'Vegetarian'],
        ingredients: ['1 cup flour', '2 eggs', '1/2 cup sugar'],
        steps: ['Mix ingredients', 'Bake at 350°F for 20 minutes'],
        authorId: 'author1',
      })
      setAuthor({
        id: 'author1',
        name: 'Chef Example',
        avatarUrl: '/avatars/chef.jpg',
        followers: 1234,
      })
      setReviews([
        { id: 'r1', reviewerName: 'Alice', rating: 5, comment: 'Loved it!' },
        { id: 'r2', reviewerName: 'Bob', rating: 4, comment: 'Pretty good.' },
      ])
    }
  }, [id])

  return (
    <>
      <NavBar />
      <main className="container mx-auto px-4 py-8 space-y-12">
        {recipe && <RecipeCard recipe={recipe} />}
        {author && <UserProfileCard user={author} />}
        {reviews.length > 0 && <ReviewList reviews={reviews} />}
        {typeof id === 'string' && <ReviewForm recipeId={id} />}
      </main>
      <Footer />
    </>
  )
}