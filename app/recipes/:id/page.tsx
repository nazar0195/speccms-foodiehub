import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import NavBar from '@/components/NavBar'
import RecipeCard from '@/components/RecipeCard'
import UserProfileCard from '@/components/UserProfileCard'
import ReviewList from '@/components/ReviewList'
import ReviewForm from '@/components/ReviewForm'
import Footer from '@/components/Footer'

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
  followerCount: number
}

interface Review {
  id: string
  reviewerName: string
  rating: number
  comment: string
}

export default function RecipeDetail(): JSX.Element {
  const router = useRouter()
  const { id } = router.query as { id?: string }

  const [recipe, setRecipe] = useState<Recipe | null>(null)
  const [author, setAuthor] = useState<User | null>(null)
  const [reviews, setReviews] = useState<Review[]>([])

  useEffect(() => {
    if (id) {
      fetchRecipe()
      fetchReviews()
    }
  }, [id])

  const fetchRecipe = async () => {
    const res = await fetch(`/api/recipes/${id}`)
    const data: Recipe = await res.json()
    setRecipe(data)
    const userRes = await fetch(`/api/users/${data.authorId}`)
    const userData: User = await userRes.json()
    setAuthor(userData)
  }

  const fetchReviews = async () => {
    const res = await fetch(`/api/recipes/${id}/reviews`)
    const data: Review[] = await res.json()
    setReviews(data)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 container mx-auto px-4 py-8 space-y-12">
        {recipe && (
          <section>
            <h2 className="text-3xl font-bold mb-6">Recipe Details</h2>
            <RecipeCard
              id={recipe.id}
              title={recipe.title}
              images={recipe.images}
              description={recipe.description}
              rating={recipe.rating}
              categories={recipe.categories}
              ingredients={recipe.ingredients}
              steps={recipe.steps}
            />
          </section>
        )}
        {author && (
          <section>
            <h2 className="text-2xl font-bold mb-4">Author Profile</h2>
            <UserProfileCard
              id={author.id}
              name={author.name}
              avatarUrl={author.avatarUrl}
              followerCount={author.followerCount}
            />
          </section>
        )}
        <section>
          <h2 className="text-2xl font-bold mb-4">Reviews</h2>
          <ReviewList reviews={reviews} />
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Submit Review</h2>
          <ReviewForm recipeId={id ?? ''} />
        </section>
      </main>
      <Footer />
    </div>
  )
}