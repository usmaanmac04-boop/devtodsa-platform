'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import CodeEditor from '@/components/editor/CodeEditor'
import { Play, Send, CheckCircle, XCircle, Loader2 } from 'lucide-react'
import { problemsAPI, submissionsAPI } from '@/lib/api'

export default function ProblemDetailPage() {
  const params = useParams()
  const [problem, setProblem] = useState(null)
  const [loading, setLoading] = useState(true)
  const [code, setCode] = useState('')
  const [language, setLanguage] = useState('javascript')
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)

  // Fetch problem data
  useEffect(() => {
    const fetchProblem = async () => {
      try {
        setLoading(true)
        const response = await problemsAPI.getById(params.id)
        setProblem(response.data)
        // Set starter code
        if (response.data.starterCode) {
          setCode(response.data.starterCode[language] || '')
        }
      } catch (error) {
        console.error('Error fetching problem:', error)
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      fetchProblem()
    }
  }, [params.id])

  // Update code when language changes
  useEffect(() => {
    if (problem?.starterCode) {
      setCode(problem.starterCode[language] || '')
    }
  }, [language, problem])

  const handleRunCode = async () => {
    if (!code.trim()) {
      setOutput('❌ Please write some code first!')
      return
    }

    setIsRunning(true)
    setOutput('⏳ Running code...')
    
    try {
      const response = await submissionsAPI.run({
        code: code,
        language: language,
        input: '' // Can add custom input later
      })

      if (response.success) {
        setOutput(`✅ Code executed successfully!\n\nOutput:\n${response.output}\n\nTime: ${response.time}s | Memory: ${response.memory}KB`)
      } else {
        setOutput(`❌ Error:\n${response.error || response.message}`)
      }
    } catch (error) {
      setOutput(`❌ Error running code:\n${error.response?.data?.message || error.message}`)
    } finally {
      setIsRunning(false)
    }
  }

  const handleSubmit = async () => {
    if (!code.trim()) {
      setOutput('❌ Please write some code first!')
      return
    }

    setIsRunning(true)
    setOutput('⏳ Submitting solution...')
    
    try {
      const response = await submissionsAPI.submit({
        problemId: params.id,
        code: code,
        language: language
      })

      if (response.success) {
        const { status, passedCount, totalTests, message, testResults } = response
        
        let outputText = `${status === 'Accepted' ? '🎉' : '❌'} ${message}\n\n`
        outputText += `Passed: ${passedCount}/${totalTests} test cases\n\n`
        
        // Show test results
        testResults.forEach((test, index) => {
          outputText += `Test ${index + 1}: ${test.passed ? '✅ Passed' : '❌ Failed'}\n`
          if (!test.isHidden && !test.passed) {
            outputText += `  Expected: ${test.expectedOutput}\n`
            outputText += `  Got: ${test.actualOutput}\n`
          }
          outputText += '\n'
        })

        if (status === 'Accepted') {
          outputText += '\n🎉 Congratulations! Your solution is correct!'
        }

        setOutput(outputText)
      } else {
        setOutput(`❌ Submission failed:\n${response.message}`)
      }
    } catch (error) {
      setOutput(`❌ Error submitting code:\n${error.response?.data?.message || error.message}`)
    } finally {
      setIsRunning(false)
    }
  }

  const difficultyColors = {
    Easy: 'text-green-600 bg-green-100',
    Medium: 'text-yellow-600 bg-yellow-100',
    Hard: 'text-red-600 bg-red-100'
  }

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="animate-spin h-16 w-16 text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Loading problem...</p>
        </div>
      </div>
    )
  }

  if (!problem) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <XCircle className="h-16 w-16 text-red-600 mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Problem not found</p>
        </div>
      </div>
    )
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
            {problem.examples && Array.isArray(problem.examples) && problem.examples.length > 0 && (
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Examples</h2>
                {problem.examples.map((example, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-200">
                    <p className="font-semibold text-gray-900 mb-2">Example {index + 1}:</p>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p>
                        <span className="font-semibold text-gray-900">Input:</span>{' '}
                        <code className="bg-gray-200 text-gray-900 px-2 py-1 rounded">{example.input || 'N/A'}</code>
                      </p>
                      <p>
                        <span className="font-semibold text-gray-900">Output:</span>{' '}
                        <code className="bg-gray-200 text-gray-900 px-2 py-1 rounded">{example.output || 'N/A'}</code>
                      </p>
                      {example.explanation && (
                        <p>
                          <span className="font-semibold text-gray-900">Explanation:</span> {example.explanation}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Constraints */}
            {problem.constraints && problem.constraints.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Constraints</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {problem.constraints.map((constraint, index) => (
                    <li key={index}>{constraint}</li>
                  ))}
                </ul>
              </div>
            )}
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
                {isRunning ? <Loader2 className="animate-spin" size={18} /> : <Play size={18} />}
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

          {/* Output Panel - ALWAYS VISIBLE */}
          <div className="h-48 bg-gray-800 border-t border-gray-700 p-4 overflow-y-auto">
            <h3 className="text-white font-semibold mb-2">Output:</h3>
            {output ? (
              <pre className="text-green-400 text-sm whitespace-pre-wrap font-mono">
                {output}
              </pre>
            ) : (
              <p className="text-gray-400 text-sm italic">Click "Run" or "Submit" to see output...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}