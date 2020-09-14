import React, { useState, useEffect, useRef, useCallback } from 'react'

const useDebouncedCallback = (func, wait) => {
  const timeout = useRef()

  return useCallback(
    (...args) => {
      const later = () => {
        clearTimeout(timeout.current)
        func(...args)
      }

      clearTimeout(timeout.current)
      timeout.current = setTimeout(later, wait)
    },
    [func, wait]
  )
}

export default function DebounceCallbackDemo() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState('')

  const onSearch = useDebouncedCallback(() => {
    // Hit the API
    const response = searchQuery.toUpperCase()
    setSearchResults(response)
  }, 500)

  useEffect(() => {
    onSearch()
  }, [searchQuery, onSearch])

  return (
    <div className="App">
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div>{searchResults}</div>
    </div>
  )
}
