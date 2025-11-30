'use client'

import { Trophy, Medal, Award, TrendingUp } from 'lucide-react'

export default function LeaderboardPage() {
  // Dummy leaderboard data - baad mein backend se aayega
  const topUsers = [
    { rank: 1, name: "Alex Chen", avatar: "https://ui-avatars.com/api/?name=Alex+Chen&background=fbbf24&color=fff", solved: 342, points: 8540, streak: 45 },
    { rank: 2, name: "Sarah Kumar", avatar: "https://ui-avatars.com/api/?name=Sarah+Kumar&background=c0c0c0&color=fff", solved: 318, points: 7920, streak: 38 },
    { rank: 3, name: "Mike Johnson", avatar: "https://ui-avatars.com/api/?name=Mike+Johnson&background=cd7f32&color=fff", solved: 295, points: 7340, streak: 32 },
    { rank: 4, name: "Priya Sharma", avatar: "https://ui-avatars.com/api/?name=Priya+Sharma&background=3b82f6&color=fff", solved: 276, points: 6890, streak: 28 },
    { rank: 5, name: "David Lee", avatar: "https://ui-avatars.com/api/?name=David+Lee&background=8b5cf6&color=fff", solved: 264, points: 6580, streak: 25 },
    { rank: 6, name: "Emma Wilson", avatar: "https://ui-avatars.com/api/?name=Emma+Wilson&background=ec4899&color=fff", solved: 251, points: 6250, streak: 22 },
    { rank: 7, name: "Rahul Patel", avatar: "https://ui-avatars.com/api/?name=Rahul+Patel&background=10b981&color=fff", solved: 239, points: 5960, streak: 20 },
    { rank: 8, name: "Lisa Zhang", avatar: "https://ui-avatars.com/api/?name=Lisa+Zhang&background=f59e0b&color=fff", solved: 227, points: 5670, streak: 18 },
    { rank: 9, name: "Tom Anderson", avatar: "https://ui-avatars.com/api/?name=Tom+Anderson&background=ef4444&color=fff", solved: 215, points: 5370, streak: 15 },
    { rank: 10, name: "Nina Rodriguez", avatar: "https://ui-avatars.com/api/?name=Nina+Rodriguez&background=06b6d4&color=fff", solved: 203, points: 5070, streak: 12 }
  ]

  const getRankIcon = (rank) => {
    if (rank === 1) return <Trophy className="text-yellow-500" size={28} />
    if (rank === 2) return <Medal className="text-gray-400" size={28} />
    if (rank === 3) return <Award className="text-amber-600" size={28} />
    return <span className="text-2xl font-bold text-gray-600">#{rank}</span>
  }

  const getRankBadge = (rank) => {
    if (rank === 1) return 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white'
    if (rank === 2) return 'bg-gradient-to-r from-gray-300 to-gray-500 text-white'
    if (rank === 3) return 'bg-gradient-to-r from-amber-500 to-amber-700 text-white'
    return 'bg-gray-100 text-gray-700'
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <Trophy className="text-yellow-500" size={40} />
            Global Leaderboard
          </h1>
          <p className="text-gray-600 text-lg">
            Top performers competing for the #1 spot
          </p>
        </div>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-3 gap-4 mb-12 max-w-4xl mx-auto">
          
          {/* 2nd Place */}
          <div className="order-1 md:order-1">
            <div className="bg-gradient-to-br from-gray-200 to-gray-400 rounded-xl p-6 text-center transform hover:scale-105 transition h-64 flex flex-col justify-end">
              <div className="mb-4">
                <img 
                  src={topUsers[1].avatar} 
                  alt={topUsers[1].name}
                  className="w-20 h-20 rounded-full mx-auto mb-3 border-4 border-white shadow-lg"
                />
                <Medal className="text-white mx-auto mb-2" size={32} />
                <h3 className="text-white font-bold text-lg">{topUsers[1].name}</h3>
                <p className="text-gray-100 text-sm">{topUsers[1].solved} solved</p>
              </div>
            </div>
          </div>

          {/* 1st Place */}
          <div className="order-2 md:order-2">
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl p-6 text-center transform hover:scale-105 transition h-80 flex flex-col justify-end shadow-2xl">
              <div className="mb-4">
                <div className="relative inline-block mb-3">
                  <img 
                    src={topUsers[0].avatar} 
                    alt={topUsers[0].name}
                    className="w-24 h-24 rounded-full border-4 border-white shadow-xl"
                  />
                  <div className="absolute -top-2 -right-2 bg-white rounded-full p-2">
                    <Trophy className="text-yellow-500" size={20} />
                  </div>
                </div>
                <h3 className="text-white font-bold text-xl mb-1">{topUsers[0].name}</h3>
                <p className="text-yellow-100 text-sm mb-2">{topUsers[0].solved} solved</p>
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-1 inline-block">
                  <p className="text-white font-bold">{topUsers[0].points} pts</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3rd Place */}
          <div className="order-3 md:order-3">
            <div className="bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl p-6 text-center transform hover:scale-105 transition h-56 flex flex-col justify-end">
              <div className="mb-4">
                <img 
                  src={topUsers[2].avatar} 
                  alt={topUsers[2].name}
                  className="w-20 h-20 rounded-full mx-auto mb-3 border-4 border-white shadow-lg"
                />
                <Award className="text-white mx-auto mb-2" size={32} />
                <h3 className="text-white font-bold text-lg">{topUsers[2].name}</h3>
                <p className="text-amber-100 text-sm">{topUsers[2].solved} solved</p>
              </div>
            </div>
          </div>
        </div>

        {/* Full Leaderboard Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Rank</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">User</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Problems Solved</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Points</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Streak</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {topUsers.map((user) => (
                  <tr 
                    key={user.rank}
                    className={`hover:bg-gray-50 transition ${user.rank <= 3 ? 'bg-gradient-to-r from-blue-50 to-transparent' : ''}`}
                  >
                    {/* Rank */}
                    <td className="px-6 py-4">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-full ${getRankBadge(user.rank)}`}>
                        {getRankIcon(user.rank)}
                      </div>
                    </td>

                    {/* User */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img 
                          src={user.avatar} 
                          alt={user.name}
                          className="w-10 h-10 rounded-full border-2 border-gray-200"
                        />
                        <div>
                          <p className="font-semibold text-gray-900">{user.name}</p>
                          <p className="text-sm text-gray-500">@{user.name.toLowerCase().replace(' ', '')}</p>
                        </div>
                      </div>
                    </td>

                    {/* Solved */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-blue-600">{user.solved}</span>
                        <TrendingUp className="text-green-500" size={16} />
                      </div>
                    </td>

                    {/* Points */}
                    <td className="px-6 py-4">
                      <span className="text-lg font-semibold text-gray-900">{user.points.toLocaleString()}</span>
                    </td>

                    {/* Streak */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-orange-600">{user.streak}</span>
                        <span className="text-xl">🔥</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Your Rank Card */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 mb-1">Your Current Rank</p>
              <p className="text-4xl font-bold">#1,247</p>
            </div>
            <div className="text-right">
              <p className="text-blue-100 mb-1">Keep going!</p>
              <p className="text-xl font-semibold">87 problems solved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}