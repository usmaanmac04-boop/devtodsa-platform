'use client'

import { useState } from 'react'
import ProblemCard from '@/components/problems/ProblemCard'
import { Search } from 'lucide-react'

export default function ProblemsPage() {
  // Dummy data - baad mein backend se aayega
  const allProblems = [
    {
      id: 1,
      title: "Two Sum",
      description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
      difficulty: "Easy",
      tags: ["Array", "Hash Table"],
      acceptance: 49,
      solved: false
    },
    {
      id: 2,
      title: "Add Two Numbers",
      description: "You are given two non-empty linked lists representing two non-negative integers. Add the two numbers and return the sum as a linked list.",
      difficulty: "Medium",
      tags: ["Linked List", "Math"],
      acceptance: 38,
      solved: false
    },
    {
      id: 3,
      title: "Longest Substring Without Repeating Characters",
      description: "Given a string s, find the length of the longest substring without repeating characters.",
      difficulty: "Medium",
      tags: ["String", "Sliding Window"],
      acceptance: 33,
      solved: true
    },
    {
      id: 4,
      title: "Median of Two Sorted Arrays",
      description: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
      difficulty: "Hard",
      tags: ["Array", "Binary Search"],
      acceptance: 35,
      solved: false
    },
    {
      id: 5,
      title: "Reverse Integer",
      description: "Given a signed 32-bit integer x, return x with its digits reversed.",
      difficulty: "Easy",
      tags: ["Math"],
      acceptance: 26,
      solved: false
    },
    {
      id: 6,
      title: "Merge Two Sorted Lists",
      description: "You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list.",
      difficulty: "Easy",
      tags: ["Linked List", "Recursion"],
      acceptance: 62,
      solved: true
    }
  ]

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDifficulty, setSelectedDifficulty] = useState('All')

  // Filter logic
  const filteredProblems = allProblems.filter(problem => {
    const matchesSearch = problem.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         problem.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDifficulty = selectedDifficulty === 'All' || problem.difficulty === selectedDifficulty
    return matchesSearch && matchesDifficulty
  })

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
              <p className="text-2xl font-bold text-green-600">
                {allProblems.filter(p => p.solved).length}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Remaining</p>
              <p className="text-2xl font-bold text-blue-600">
                {allProblems.filter(p => !p.solved).length}
              </p>
            </div>
          </div>
        </div>

        {/* Problems List */}
        <div className="space-y-4">
          {filteredProblems.length > 0 ? (
            filteredProblems.map((problem) => (
              <ProblemCard key={problem.id} problem={problem} />
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