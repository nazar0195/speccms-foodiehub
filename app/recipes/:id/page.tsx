import React from "react"
import { useRouter } from "next/router"
import type { NextPage } from "next"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
import RecipeCard from "@/components/RecipeCard"
import UserProfileCard from "@/components/UserProfileCard"
import ReviewList from "@/components/ReviewList"
import ReviewForm from "@/components/ReviewForm"

const RecipeDetail: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow container mx-auto p-4 space-y-8">
        <section>
          <RecipeCard recipeId={id as string} />
        </section>
        <section>
          <UserProfileCard userId="author-id" />
        </section>
        <section>
          <ReviewList recipeId={id as string} />
        </section>
        <section>
          <ReviewForm recipeId={id as string} />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default RecipeDetail