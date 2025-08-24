'use client'

import { useState } from 'react'

export default function EmailSignup() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setIsLoading(true)
    
    try {
      // Simulate API call - replace with actual email service
      await new Promise(resolve => setTimeout(resolve, 1000))
      setIsSubmitted(true)
      setEmail('')
    } catch (error) {
      console.error('Email signup failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 p-6 rounded-xl text-center">
        <div className="text-2xl mb-2">🎉</div>
        <h3 className="font-semibold mb-2">Welcome to 0to15000!</h3>
        <p className="text-sm">
          Check your email for your first growth strategy guide.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
      <h3 className="text-2xl font-semibold text-white mb-4">
        Get Started Today
      </h3>
      <p className="text-blue-100 mb-6">
        Join thousands of entrepreneurs growing their X presence. Get instant access to our proven growth strategies.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="w-full px-4 py-3 rounded-full text-gray-900 placeholder-gray-500 border-0 focus:ring-2 focus:ring-white/20 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Joining...' : 'Start Your Growth Journey 🚀'}
        </button>
      </form>
      
      <p className="text-xs text-blue-200 text-center mt-4">
        By signing up, you agree to our{' '}
        <a href="/terms" className="underline hover:no-underline">
          Terms of Service
        </a>{' '}
        and{' '}
        <a href="/privacy" className="underline hover:no-underline">
          Privacy Policy
        </a>
      </p>
    </div>
  )
}