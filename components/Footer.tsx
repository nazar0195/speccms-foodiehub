import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-semibold mb-4">FoodieHub</h3>
          <ul>
            <li className="mb-2"><Link href="/"><a className="hover:text-white">Home</a></Link></li>
            <li className="mb-2"><Link href="/recipes"><a className="hover:text-white">Recipes</a></Link></li>
            <li className="mb-2"><Link href="/create"><a className="hover:text-white">Create Recipe</a></Link></li>
            <li className="mb-2"><Link href="/about"><a className="hover:text-white">About Us</a></Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul>
            <li className="mb-2"><Link href="/blog"><a className="hover:text-white">Blog</a></Link></li>
            <li className="mb-2"><Link href="/terms"><a className="hover:text-white">Terms of Service</a></Link></li>
            <li className="mb-2"><Link href="/privacy"><a className="hover:text-white">Privacy Policy</a></Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul>
            <li className="mb-2"><Link href="/contact"><a className="hover:text-white">Contact Us</a></Link></li>
            <li className="mb-2"><Link href="/help"><a className="hover:text-white">Help Center</a></Link></li>
            <li className="mb-2"><Link href="/faq"><a className="hover:text-white">FAQ</a></Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 2.999a10.9 10.9 0 01-3.14.86 5.48 5.48 0 002.4-3.03 10.92 10.92 0 01-3.47 1.33 5.47 5.47 0 00-9.32 4.99A15.52 15.52 0 012 4.77a5.47 5.47 0 001.69 7.29 5.44 5.44 0 01-2.48-.68v.07a5.47 5.47 0 004.38 5.36 5.48 5.48 0 01-2.47.09 5.47 5.47 0 005.11 3.8A10.96 10.96 0 010 21.54a15.48 15.48 0 008.39 2.45c10.07 0 15.58-8.36 15.58-15.6 0-.24-.01-.48-.02-.72A11.14 11.14 0 0023 2.999z"/>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.6 9.87v-6.99h-2.6v-2.88h2.6V9.5c0-2.57 1.54-4 3.9-4 1.13 0 2.32.2 2.32.2v2.55h-1.31c-1.29 0-1.7.81-1.7 1.64v1.97h2.89l-.46 2.88h-2.43V21.9A10 10 0 0022 12z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="2"/>
                <path d="M17.5 6.5h.01" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-gray-500">
          © {currentYear} FoodieHub. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer