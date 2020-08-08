import React, { useState, useCallback, useEffect } from 'react'
import useInterval from './useInterval'

const ShoppingList = () => {
  // Wait 5 seconds before fetching new data
  const POLL_DELAY = 5000
  const [items, setItems] = useState([])

  const fetchItems = useCallback(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await response.json()
    setItems((prev) => [...prev, ...json])
  }, [])

  useEffect(() => {
    // Fetch items from API on mount
    fetchItems()
  }, [POLL_DELAY])

  useInterval(() => {
    fetchItems()
  }, POLL_DELAY)

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </ul>
  )
}

export default ShoppingList
