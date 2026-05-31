import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import NavBar from '@/components/NavBar'
import RecipeCard from '@/components/RecipeCard'
import UserProfileCard from '@/components/UserProfileCard'
import ReviewForm from '@/components/ReviewForm'
import Footer from '@/components/Footer'

type Review = {
  id: string
  reviewerName: string
  rating: number
  comment: string
}

function ReviewList({ reviews }: { reviews: Review[] }) {
  if (reviews.length === 0) {
    return <p className="text-gray-500">No reviews yet.</p>
  }
  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div key={review.id} className="border rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-semibold">{review.reviewerName}</span>
            <span className="text-yellow-500">{'★'.repeat(review.rating)}</span>
          </div>
          <p className="text-gray-700">{review.comment}</p>
        </div>
      ))}
    </div>
  )
}

export default function RecipeDetail() {
  const router = useRouter()
  const { id } = router.query
  const [reviews, setReviews] = useState<Review[]>([])

  useEffect(() => {
    if (id) {
      // fetch reviews for recipe id
      fetch(`/api/recipes/${id}/reviews`)
        .then((res) => res.json())
        .then((data) => setReviews(data))
        .catch(() => setReviews([]))
    }
  }, [id])

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow container mx-auto px-4 py-8 space-y-12">
        <section>
          <RecipeCard recipeId={typeof id === 'string' ? id : ''} />
        </section>
        <section className="bg-white shadow rounded-lg p-6">
          <UserProfileCard />
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">Reviews</h2>
          <ReviewList reviews={reviews} />
        </section>
        <section className="bg-white shadow rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Submit a Review</h2>
          <ReviewForm recipeId={typeof id === 'string' ? id : ''} />
        </section>
      </main>
      <Footer />
    </div>
  )
}