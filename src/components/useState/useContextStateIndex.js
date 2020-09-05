import React from 'react'

import useContextState, { ContextStateProvider } from './useContextState'

function useCounter() {
  const [count, setCount] = useContextState('counter', 0)
  const increment = () => setCount(count + 1)
  return { count, increment }
}

function IncrementButton() {
  const { count, increment } = useCounter()
  return (
    <>
      <div>count1: {count}</div>
      <button onClick={increment}>Increment</button>
    </>
  )
}

function Count() {
  const { count, increment } = useCounter()
  return (
    <>
      <div>count2: {count}</div>
      <button onClick={increment}>Increment</button>
    </>
  )
}

export default function ContextStateProviderDemo() {
  return (
    <ContextStateProvider>
      <Count />
      <IncrementButton />
    </ContextStateProvider>
  )
}
