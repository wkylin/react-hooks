import React, { useEffect, useState, useRef } from 'react'
import useWhenVisible from './useWhenVisible'

const TodoList = () => {
  const limit = 25
  const [offset, setOffset] = useState(0)
  const [todos, setTodos] = useState([])
  const lastEl = useRef()

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos?limit=${limit}&offset=${offset}`
      )
      const json = await response.json()
      setTodos((prev) => [...prev, ...json])
    }

    fetchTodos()
  }, [limit, offset])

  useWhenVisible(lastEl.current, () => {
    setOffset(offset + limit)
  })

  return (
    <ul>
      {todos.map((todo, index, arr) => (
        <li key={todo.id} ref={index === arr.length - 1 ? lastEl : undefined}>
          {todo.title} - Completed: {todo.completed}
        </li>
      ))}
    </ul>
  )
}

export default TodoList
