import Link from 'next/link'
import React from 'react'

type NavBarProps = {}

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-bold text-gray-800">FoodieHub</a>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/">
                <a className="text-gray-600 hover:text-gray-800">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/browse">
                <a className="text-gray-600 hover:text-gray-800">Browse</a>
              </Link>
            </li>
            <li>
              <Link href="/create-recipe">
                <a className="text-gray-600 hover:text-gray-800">Create Recipe</a>
              </Link>
            </li>
            <li>
              <Link href="/collections">
                <a className="text-gray-600 hover:text-gray-800">My Collections</a>
              </Link>
            </li>
          </ul>
        </nav>
        <form action="/search" method="get" className="flex items-center border border-gray-300 rounded overflow-hidden">
          <input
            type="text"
            name="q"
            placeholder="Search recipes"
            className="px-3 py-1 w-48 focus:outline-none"
          />
          <button type="submit" className="px-3 py-1 bg-gray-100 hover:bg-gray-200">
            Search
          </button>
        </form>
        <Link href="/profile">
          <a className="ml-6 text-gray-600 hover:text-gray-800">Profile</a>
        </Link>
      </div>
    </header>
  )
}

export default NavBar