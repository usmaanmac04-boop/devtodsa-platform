'use client'

import { useState } from 'react'
import CodeEditor from '@/components/editor/CodeEditor'
import { Play, Send, CheckCircle, XCircle } from 'lucide-react'

export default function ProblemDetailPage({ params }) {
  const [code, setCode] = useState('')
  const [language, setLanguage] = useState('javascript')
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)

  // Dummy problem data - baad mein backend se aayega
  const problem = {
    id: params.id,
    title: "Two Sum",
    difficulty: "Easy",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
        explanation: "Because nums[1] + nums[2] == 6, we return [1, 2]."
      }
    ],
    constraints: [
      "2 <= nums.length <= 104",
      "-109 <= nums[i] <= 109",
      "-109 <= target <= 109",
      "Only one valid answer exists."
    ]
  }

  const handleRunCode = () => {
    setIsRunning(true)
    setOutput('Running code...')
    
    // Simulate code execution
    setTimeout(() => {
      setOutput('✓ Test case 1 passed\n✓ Test case 2 passed\n✓ All test cases passed!')
      setIsRunning(false)
    }, 1500)
  }

  const handleSubmit = () => {
    setIsRunning(true)
    setOutput('Submitting solution...')
    
    setTimeout(() => {
      setOutput('✓ Accepted\nRuntime: 68ms\nMemory: 42.1MB\nBeats 85% of submissions!')
      setIsRunning(false)
    }, 2000)
  }

  const difficultyColors = {
    Easy: 'text-green-600 bg-green-100',
    Medium: 'text-yellow-600 bg-yellow-100',
    Hard: 'text-red-600 bg-red-100'
  }

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Problem & Editor Container */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Panel - Problem Description */}
        <div className="w-1/2 border-r border-gray-300 overflow-y-auto bg-white">
          <div className="p-8">
            
            {/* Problem Header */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-3">{problem.title}</h1>
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${difficultyColors[problem.difficulty]}`}>
                {problem.difficulty}
              </span>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Description</h2>
              <p className="text-gray-700 leading-relaxed">{problem.description}</p>
            </div>

            {/* Examples */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Examples</h2>
              {problem.examples.map((example, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-200">
                  <p className="font-semibold text-gray-900 mb-2">Example {index + 1}:</p>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-semibold">Input:</span> <code className="bg-gray-200 px-2 py-1 rounded">{example.input}</code></p>
                    <p><span className="font-semibold">Output:</span> <code className="bg-gray-200 px-2 py-1 rounded">{example.output}</code></p>
                    <p><span className="font-semibold">Explanation:</span> {example.explanation}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Constraints */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Constraints</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {problem.constraints.map((constraint, index) => (
                  <li key={index}>{constraint}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Panel - Code Editor */}
        <div className="w-1/2 flex flex-col bg-gray-900">
          
          {/* Editor Controls */}
          <div className="bg-gray-800 p-4 flex items-center justify-between border-b border-gray-700">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500"
            >
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="cpp">C++</option>
              <option value="java">Java</option>
            </select>

            <div className="flex gap-3">
              <button
                onClick={handleRunCode}
                disabled={isRunning}
                className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-5 py-2 rounded-lg font-medium transition disabled:opacity-50"
              >
                <Play size={18} />
                Run
              </button>
              <button
                onClick={handleSubmit}
                disabled={isRunning}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-medium transition disabled:opacity-50"
              >
                <Send size={18} />
                Submit
              </button>
            </div>
          </div>

          {/* Code Editor */}
          <div className="flex-1">
            <CodeEditor 
              value={code}
              onChange={setCode}
              language={language}
            />
          </div>

          {/* Output Panel */}
          {output && (
            <div className="h-48 bg-gray-800 border-t border-gray-700 p-4 overflow-y-auto">
              <h3 className="text-white font-semibold mb-2">Output:</h3>
              <pre className="text-green-400 text-sm whitespace-pre-wrap font-mono">
                {output}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}