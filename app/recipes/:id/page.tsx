import React from "react"
import NavBar from "@/components/NavBar"
import RecipeCard from "@/components/RecipeCard"
import UserProfileCard from "@/components/UserProfileCard"
import ReviewForm from "@/components/ReviewForm"
import Footer from "@/components/Footer"

export default function RecipeDetail(): JSX.Element {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      <main className="flex-grow container mx-auto px-6 py-8 space-y-12">
        <section>
          <RecipeCard />
        </section>
        <section>
          <UserProfileCard />
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
          <div className="space-y-6">
            <div className="bg-white shadow rounded p-4">
              <p className="text-gray-500">No reviews yet.</p>
            </div>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Submit a Review</h2>
          <ReviewForm />
        </section>
      </main>
      <Footer />
    </div>
  )
}