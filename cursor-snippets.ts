"use client"

/**
 * Cursor AI Helper Snippets for Deekle.io
 *
 * This file contains useful prompts and code snippets for working with Cursor AI
 * You can copy these prompts and use them in Cursor's AI chat panel
 */

// PROMPTS FOR CURSOR AI

/**
 * Generate a new page component
 *
 * Prompt: Create a new Next.js page component for [feature name] with the following requirements:
 * - Should include metadata for SEO
 * - Should fetch data from [API endpoint]
 * - Should include proper loading and error states
 * - Should be responsive for mobile and desktop
 */

/**
 * Create a new API route
 *
 * Prompt: Create a new API route for [feature] that:
 * - Handles GET and POST requests
 * - Validates input data
 * - Returns properly formatted responses
 * - Includes error handling
 */

/**
 * Generate a new ML component
 *
 * Prompt: Create a new machine learning component for [feature] that:
 * - Fetches predictions from the ML API
 * - Displays the results in a user-friendly way
 * - Handles loading and error states
 * - Is responsive and accessible
 */

/**
 * Refactor existing code
 *
 * Prompt: Refactor this code to:
 * - Improve performance
 * - Enhance readability
 * - Follow best practices
 * - Use modern React patterns
 */

/**
 * Add tests
 *
 * Prompt: Write tests for this component that:
 * - Test all major functionality
 * - Include edge cases
 * - Mock external dependencies
 * - Achieve good coverage
 */

/**
 * Optimize for performance
 *
 * Prompt: Optimize this component for performance by:
 * - Reducing unnecessary renders
 * - Memoizing expensive calculations
 * - Implementing proper data fetching strategies
 * - Using efficient React patterns
 */

// Example code snippets you can ask Cursor to explain or modify

// Example 1: Data fetching pattern
async function fetchData() {
  try {
    const response = await fetch("/api/data")
    if (!response.ok) throw new Error("Network response was not ok")
    return await response.json()
  } catch (error) {
    console.error("Error fetching data:", error)
    return null
  }
}

// Example 2: React hook pattern
import { useState, useCallback } from "react"

function useCustomHook(initialValue) {
  const [value, setValue] = useState(initialValue)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const updateValue = useCallback(async (newValue) => {
    try {
      setLoading(true)
      setError(null)
      // Do something with newValue
      setValue(newValue)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }, [])

  return { value, loading, error, updateValue }
}

// Example 3: Server component pattern
async function fetchDataFromDatabase(id: string) {
  // Replace this with your actual data fetching logic
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        title: `Data for ID ${id}`,
        description: `This is the description for data with ID ${id}.`,
      })
    }, 500)
  })
}

async function DataComponent({ id }) {
  const data = await fetchDataFromDatabase(id)

  if (!data) {
    return <div>No data found</div>
  }

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </div>
  )
}
