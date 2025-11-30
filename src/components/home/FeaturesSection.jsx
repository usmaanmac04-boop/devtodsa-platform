import { Code2, BookOpen, Trophy, Users, Zap, Target } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: <Code2 size={40} />,
      title: "Interactive Coding",
      description: "Write, run, and test your code directly in the browser with our powerful online editor."
    },
    {
      icon: <BookOpen size={40} />,
      title: "Learn Concepts",
      description: "Structured tutorials and explanations for every DSA topic from basics to advanced."
    },
    {
      icon: <Trophy size={40} />,
      title: "Leaderboards",
      description: "Compete with developers worldwide and track your ranking on global leaderboards."
    },
    {
      icon: <Users size={40} />,
      title: "Community Driven",
      description: "Join discussions, share solutions, and learn from a community of passionate coders."
    },
    {
      icon: <Zap size={40} />,
      title: "Real-time Execution",
      description: "Get instant feedback with fast code execution across multiple programming languages."
    },
    {
      icon: <Target size={40} />,
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed statistics and achievement badges."
    }
  ]

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose DevToDsa?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to master DSA and ace your coding interviews
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl hover:shadow-xl transition transform hover:-translate-y-2 border border-gray-200"
            >
              <div className="text-blue-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}