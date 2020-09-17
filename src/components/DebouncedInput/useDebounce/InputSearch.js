import React, { useState, useEffect } from 'react'
import useDebounce from './useDebounce'

const InputSearch = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])

  // ✅ Use debounce hook to debounced searchTerm as it is rapidly changing
  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  // Effect only runs when debouncedSearchTerm changes,
  // and it only does when the user stops typing for more than 500ms
  useEffect(() => {
    if (debouncedSearchTerm) {
      const fetchResults = async () => {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts`
        )
        const json = await response.json()
        setResults(json)
      }

      fetchResults()
    }
  }, [debouncedSearchTerm])

  return (
    <>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div>{debouncedSearchTerm}</div>
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result.title}</li>
        ))}
      </ul>
    </>
  )
}

export default InputSearch
