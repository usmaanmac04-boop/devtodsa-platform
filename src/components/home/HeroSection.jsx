'use client'

import Link from 'next/link'
import { Code, Trophy, BookOpen, Users } from 'lucide-react'

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white">
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Master Data Structures & Algorithms
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
            Practice coding problems, learn concepts, and compete with developers worldwide — completely free!
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link 
              href="/problems"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Practicing →
            </Link>
            <Link 
              href="/learn"
              className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition shadow-lg"
            >
              Explore Tutorials
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
              <Code size={40} className="mx-auto mb-2" />
              <p className="text-3xl font-bold">500+</p>
              <p className="text-gray-200">Problems</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
              <Users size={40} className="mx-auto mb-2" />
              <p className="text-3xl font-bold">10K+</p>
              <p className="text-gray-200">Learners</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
              <BookOpen size={40} className="mx-auto mb-2" />
              <p className="text-3xl font-bold">50+</p>
              <p className="text-gray-200">Tutorials</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6">
              <Trophy size={40} className="mx-auto mb-2" />
              <p className="text-3xl font-bold">Free</p>
              <p className="text-gray-200">Forever</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}