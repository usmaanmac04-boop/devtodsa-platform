'use client'

import { Trophy, Target, Zap, Calendar, Award } from 'lucide-react'

export default function ProfilePage() {
  // Dummy user data - baad mein backend/Firebase se aayega
  const user = {
    name: "Usmaan Ansari",
    email: "usmaan@devtodsa.com",
    avatar: "https://ui-avatars.com/api/?name=Usmaan+Ansari&background=3b82f6&color=fff&size=200",
    joinedDate: "Jan 2025",
    rank: 1247,
    totalSolved: 87,
    easy: 45,
    medium: 32,
    hard: 10,
    streak: 12,
    badges: [
      { name: "First Blood", icon: "🎯", desc: "Solved first problem" },
      { name: "Week Warrior", icon: "⚡", desc: "7 day streak" },
      { name: "Speed Demon", icon: "🚀", desc: "Solved in under 5 mins" },
      { name: "Hard Core", icon: "💪", desc: "Solved 10 hard problems" }
    ],
    recentSubmissions: [
      { problem: "Two Sum", difficulty: "Easy", status: "Accepted", time: "2 hours ago" },
      { problem: "Merge Intervals", difficulty: "Medium", status: "Accepted", time: "5 hours ago" },
      { problem: "Binary Tree Max Path", difficulty: "Hard", status: "Wrong Answer", time: "1 day ago" },
      { problem: "Valid Parentheses", difficulty: "Easy", status: "Accepted", time: "2 days ago" }
    ]
  }

  const difficultyColors = {
    Easy: 'text-green-600',
    Medium: 'text-yellow-600',
    Hard: 'text-red-600'
  }

  const statusColors = {
    'Accepted': 'bg-green-100 text-green-700',
    'Wrong Answer': 'bg-red-100 text-red-700',
    'Time Limit': 'bg-yellow-100 text-yellow-700'
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            
            {/* Avatar */}
            <img 
              src={user.avatar} 
              alt={user.name}
              className="w-32 h-32 rounded-full border-4 border-blue-500"
            />

            {/* User Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{user.name}</h1>
              <p className="text-gray-600 mb-4">{user.email}</p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-gray-400" />
                  <span className="text-gray-600">Joined {user.joinedDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy size={16} className="text-yellow-500" />
                  <span className="text-gray-900 font-semibold">Rank #{user.rank}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={16} className="text-orange-500" />
                  <span className="text-gray-900 font-semibold">{user.streak} day streak 🔥</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Left Column - Stats */}
          <div className="md:col-span-1 space-y-6">
            
            {/* Progress Card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Target size={24} className="text-blue-600" />
                Progress
              </h2>

              <div className="space-y-4">
                {/* Total */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">Total Solved</span>
                    <span className="text-2xl font-bold text-blue-600">{user.totalSolved}</span>
                  </div>
                </div>

                {/* Easy */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-green-600 font-medium">Easy</span>
                    <span className="text-xl font-bold text-green-600">{user.easy}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: `${(user.easy/200)*100}%`}}></div>
                  </div>
                </div>

                {/* Medium */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-yellow-600 font-medium">Medium</span>
                    <span className="text-xl font-bold text-yellow-600">{user.medium}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{width: `${(user.medium/200)*100}%`}}></div>
                  </div>
                </div>

                {/* Hard */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-red-600 font-medium">Hard</span>
                    <span className="text-xl font-bold text-red-600">{user.hard}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{width: `${(user.hard/100)*100}%`}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Badges */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Award size={24} className="text-purple-600" />
                Achievements
              </h2>

              <div className="grid grid-cols-2 gap-3">
                {user.badges.map((badge, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-lg text-center border border-gray-200 hover:shadow-md transition"
                  >
                    <div className="text-3xl mb-2">{badge.icon}</div>
                    <p className="font-semibold text-gray-900 text-sm">{badge.name}</p>
                    <p className="text-xs text-gray-600 mt-1">{badge.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Activity */}
          <div className="md:col-span-2">
            
            {/* Recent Submissions */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Submissions</h2>

              <div className="space-y-3">
                {user.recentSubmissions.map((submission, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-400 transition"
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{submission.problem}</h3>
                      <div className="flex items-center gap-3 text-sm">
                        <span className={`font-medium ${difficultyColors[submission.difficulty]}`}>
                          {submission.difficulty}
                        </span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-500">{submission.time}</span>
                      </div>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${statusColors[submission.status]}`}>
                      {submission.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Activity Heatmap Placeholder */}
            <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Activity</h2>
              <div className="bg-gray-100 rounded-lg p-8 text-center">
                <p className="text-gray-500">Activity heatmap coming soon! 📊</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}