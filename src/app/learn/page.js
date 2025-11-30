'use client'

import Link from 'next/link'
import { BookOpen, Code, Clock, ChevronRight, Star } from 'lucide-react'

export default function LearnPage() {
  // Dummy tutorial data - baad mein backend se aayega
  const topics = [
    {
      id: 1,
      category: "Arrays",
      icon: "📊",
      color: "from-blue-500 to-cyan-500",
      tutorials: [
        { title: "Introduction to Arrays", duration: "10 min", difficulty: "Beginner", rating: 4.8, lessons: 5 },
        { title: "Two Pointer Technique", duration: "15 min", difficulty: "Intermediate", rating: 4.9, lessons: 7 },
        { title: "Sliding Window Pattern", duration: "20 min", difficulty: "Intermediate", rating: 4.7, lessons: 8 }
      ]
    },
    {
      id: 2,
      category: "Linked Lists",
      icon: "🔗",
      color: "from-green-500 to-emerald-500",
      tutorials: [
        { title: "Linked List Basics", duration: "12 min", difficulty: "Beginner", rating: 4.6, lessons: 6 },
        { title: "Fast & Slow Pointers", duration: "18 min", difficulty: "Intermediate", rating: 4.8, lessons: 9 },
        { title: "Reversing Linked Lists", duration: "15 min", difficulty: "Intermediate", rating: 4.9, lessons: 7 }
      ]
    },
    {
      id: 3,
      category: "Trees & Graphs",
      icon: "🌳",
      color: "from-purple-500 to-pink-500",
      tutorials: [
        { title: "Binary Tree Traversals", duration: "20 min", difficulty: "Intermediate", rating: 4.7, lessons: 10 },
        { title: "Graph BFS & DFS", duration: "25 min", difficulty: "Advanced", rating: 4.9, lessons: 12 },
        { title: "Shortest Path Algorithms", duration: "30 min", difficulty: "Advanced", rating: 4.8, lessons: 15 }
      ]
    },
    {
      id: 4,
      category: "Dynamic Programming",
      icon: "💎",
      color: "from-orange-500 to-red-500",
      tutorials: [
        { title: "DP Introduction", duration: "15 min", difficulty: "Intermediate", rating: 4.5, lessons: 8 },
        { title: "1D DP Problems", duration: "20 min", difficulty: "Intermediate", rating: 4.7, lessons: 10 },
        { title: "2D DP & Optimization", duration: "30 min", difficulty: "Advanced", rating: 4.9, lessons: 14 }
      ]
    },
    {
      id: 5,
      category: "Sorting & Searching",
      icon: "🔍",
      color: "from-yellow-500 to-amber-500",
      tutorials: [
        { title: "Sorting Algorithms", duration: "18 min", difficulty: "Beginner", rating: 4.6, lessons: 9 },
        { title: "Binary Search Mastery", duration: "22 min", difficulty: "Intermediate", rating: 4.8, lessons: 11 },
        { title: "Advanced Search Techniques", duration: "25 min", difficulty: "Advanced", rating: 4.7, lessons: 13 }
      ]
    },
    {
      id: 6,
      category: "Strings",
      icon: "📝",
      color: "from-indigo-500 to-blue-500",
      tutorials: [
        { title: "String Manipulation Basics", duration: "12 min", difficulty: "Beginner", rating: 4.5, lessons: 6 },
        { title: "Pattern Matching", duration: "20 min", difficulty: "Intermediate", rating: 4.8, lessons: 10 },
        { title: "Advanced String Algorithms", duration: "28 min", difficulty: "Advanced", rating: 4.9, lessons: 14 }
      ]
    }
  ]

  const difficultyColors = {
    Beginner: 'bg-green-100 text-green-700',
    Intermediate: 'bg-yellow-100 text-yellow-700',
    Advanced: 'bg-red-100 text-red-700'
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <BookOpen className="text-blue-600" size={40} />
            Learn DSA
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Master data structures and algorithms through structured tutorials and interactive lessons
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <p className="text-4xl font-bold text-blue-600 mb-2">50+</p>
            <p className="text-gray-600">Total Tutorials</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <p className="text-4xl font-bold text-green-600 mb-2">6</p>
            <p className="text-gray-600">Categories</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <p className="text-4xl font-bold text-purple-600 mb-2">15hrs</p>
            <p className="text-gray-600">Content</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <p className="text-4xl font-bold text-orange-600 mb-2">4.8★</p>
            <p className="text-gray-600">Avg Rating</p>
          </div>
        </div>

        {/* Topics Grid */}
        <div className="space-y-8">
          {topics.map((topic) => (
            <div key={topic.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${topic.color} p-6`}>
                <div className="flex items-center gap-4">
                  <span className="text-5xl">{topic.icon}</span>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-1">{topic.category}</h2>
                    <p className="text-white/90">{topic.tutorials.length} tutorials available</p>
                  </div>
                </div>
              </div>

              {/* Tutorials List */}
              <div className="p-6">
                <div className="grid md:grid-cols-3 gap-4">
                  {topic.tutorials.map((tutorial, index) => (
                    <Link 
                      key={index}
                      href={`/learn/${topic.category.toLowerCase().replace(/\s+/g, '-')}/${index + 1}`}
                    >
                      <div className="border border-gray-200 rounded-lg p-5 hover:shadow-lg hover:border-blue-400 transition cursor-pointer group">
                        
                        {/* Tutorial Title */}
                        <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition">
                          {tutorial.title}
                        </h3>

                        {/* Metadata */}
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Clock size={16} />
                            <span>{tutorial.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Code size={16} />
                            <span>{tutorial.lessons} lessons</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Star size={16} className="text-yellow-500 fill-yellow-500" />
                            <span className="font-semibold text-gray-900">{tutorial.rating}</span>
                          </div>
                        </div>

                        {/* Difficulty Badge */}
                        <div className="flex items-center justify-between">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${difficultyColors[tutorial.difficulty]}`}>
                            {tutorial.difficulty}
                          </span>
                          <ChevronRight className="text-gray-400 group-hover:text-blue-600 transition" size={20} />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-blue-100 mb-6 text-lg">
            Pick a topic and begin your journey to mastering DSA
          </p>
          <Link 
            href="/problems"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          >
            Practice Problems →
          </Link>
        </div>
      </div>
    </div>
  )
}