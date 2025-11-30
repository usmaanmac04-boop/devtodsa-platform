'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Code2 } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition">
            <Code2 size={32} className="text-white" />
            <span className="text-2xl font-bold">DevToDsa</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/problems" className="hover:text-gray-200 transition font-medium">
              Problems
            </Link>
            <Link href="/learn" className="hover:text-gray-200 transition font-medium">
              Learn
            </Link>
            <Link href="/leaderboard" className="hover:text-gray-200 transition font-medium">
              Leaderboard
            </Link>
            <Link href="/profile" className="hover:text-gray-200 transition font-medium">
              Profile
            </Link>
            <Link 
              href="/login" 
              className="bg-white text-blue-600 px-5 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-blue-700 transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <Link 
              href="/problems" 
              className="block py-2 hover:bg-blue-600 px-3 rounded transition"
              onClick={toggleMenu}
            >
              Problems
            </Link>
            <Link 
              href="/learn" 
              className="block py-2 hover:bg-blue-600 px-3 rounded transition"
              onClick={toggleMenu}
            >
              Learn
            </Link>
            <Link 
              href="/leaderboard" 
              className="block py-2 hover:bg-blue-600 px-3 rounded transition"
              onClick={toggleMenu}
            >
              Leaderboard
            </Link>
            <Link 
              href="/profile" 
              className="block py-2 hover:bg-blue-600 px-3 rounded transition"
              onClick={toggleMenu}
            >
              Profile
            </Link>
            <Link 
              href="/login" 
              className="block bg-white text-blue-600 py-2 px-3 rounded-lg font-semibold hover:bg-gray-100 transition text-center"
              onClick={toggleMenu}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}