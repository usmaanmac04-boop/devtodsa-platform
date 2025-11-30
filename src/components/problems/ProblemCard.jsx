import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'

export default function ProblemCard({ problem }) {
  const difficultyColors = {
    Easy: 'bg-green-100 text-green-700 border-green-300',
    Medium: 'bg-yellow-100 text-yellow-700 border-yellow-300',
    Hard: 'bg-red-100 text-red-700 border-red-300'
  }

  return (
    <Link href={`/problems/${problem._id}`}>
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition hover:border-blue-400 cursor-pointer">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                {problem.title}
              </h3>
              {problem.solved && (
                <CheckCircle2 size={20} className="text-green-500" />
              )}
            </div>
            
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {problem.description}
            </p>

            <div className="flex items-center gap-3 flex-wrap">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${difficultyColors[problem.difficulty]}`}>
                {problem.difficulty}
              </span>
              
              {problem.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="text-right ml-4">
            <p className="text-sm text-gray-500">Acceptance</p>
            <p className="text-lg font-bold text-gray-900">
              {problem.submissions > 0 
                ? Math.round((problem.acceptance / problem.submissions) * 100) 
                : 0}%
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}