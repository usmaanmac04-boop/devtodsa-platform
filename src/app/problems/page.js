'use client'

import { useState, useEffect } from 'react'
import ProblemCard from '@/components/problems/ProblemCard'
import { Search } from 'lucide-react'
import { problemsAPI } from '@/lib/api'

export default function ProblemsPage() {
  const [allProblems, setAllProblems] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDifficulty, setSelectedDifficulty] = useState('All')

  // Fetch problems from backend
  useEffect(() => {
    const fetchProblems = async () => {
      try {
        setLoading(true)
        const response = await problemsAPI.getAll()
        setAllProblems(response.data)
      } catch (error) {
        console.error('Error fetching problems:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProblems()
  }, [])

  // Filter logic
  const filteredProblems = allProblems.filter(problem => {
    const matchesSearch = problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         problem.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDifficulty = selectedDifficulty === 'All' || problem.difficulty === selectedDifficulty
    return matchesSearch && matchesDifficulty
  })

  // Calculate stats
  const totalSolved = allProblems.filter(p => p.solved).length
  const totalRemaining = allProblems.length - totalSolved

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading problems...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Practice Problems</h1>
          <p className="text-gray-600">Solve coding challenges and improve your skills</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search problems..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Difficulty Filter */}
            <div className="flex gap-2">
              {['All', 'Easy', 'Medium', 'Hard'].map((diff) => (
                <button
                  key={diff}
                  onClick={() => setSelectedDifficulty(diff)}
                  className={`px-6 py-3 rounded-lg font-medium transition ${
                    selectedDifficulty === diff
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {diff}
                </button>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-6 mt-6 pt-6 border-t border-gray-200">
            <div>
              <p className="text-sm text-gray-500">Total Problems</p>
              <p className="text-2xl font-bold text-gray-900">{allProblems.length}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Solved</p>
              <p className="text-2xl font-bold text-green-600">{totalSolved}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Remaining</p>
              <p className="text-2xl font-bold text-blue-600">{totalRemaining}</p>
            </div>
          </div>
        </div>

        {/* Problems List */}
        <div className="space-y-4">
          {filteredProblems.length > 0 ? (
            filteredProblems.map((problem) => (
              <ProblemCard key={problem._id} problem={problem} />
            ))
          ) : (
            <div className="bg-white rounded-lg p-12 text-center">
              <p className="text-gray-500 text-lg">No problems found matching your criteria</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}