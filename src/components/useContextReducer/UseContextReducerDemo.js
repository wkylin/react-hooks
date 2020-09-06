import React from 'react'

import useContextReducer, {
  UseContextReducerProvider,
} from './useContextReducer'

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    default:
      return state
  }
}

function useCounter() {
  const [count, dispatch] = useContextReducer('counter', reducer, 0)
  const increment = () => dispatch({ type: 'INCREMENT' })
  return { count, increment }
}

function IncrementButton() {
  const { increment } = useCounter()
  return <button onClick={increment}>Increment</button>
}

function Count() {
  const { count } = useCounter()
  return <div>{count}</div>
}

export default function UseContextReducerDemo() {
  return (
    <UseContextReducerProvider>
      <Count />
      <IncrementButton />
    </UseContextReducerProvider>
  )
}
