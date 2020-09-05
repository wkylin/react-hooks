import React, { useState } from 'react'

const someFunctionThatCaluclatesValue = (functionName) => {
  console.log("I'm called from", functionName)
  return 5
}

export const Ordinaryfunction = () => {
  const initialState = someFunctionThatCaluclatesValue('Ordinaryfunction')
  const [count, setCount] = useState(initialState)
  return (
    <>
      <h1>Hello Ordinaryfunction, count is {count} </h1>
      <button onClick={() => setCount((previousCount) => previousCount + 1)}>
        Update
      </button>
      <hr />
    </>
  )
}

export const Lazyfunction = () => {
  const initialState = () => someFunctionThatCaluclatesValue('Lazyfunction')
  const [count, setCount] = useState(initialState)
  return (
    <>
      <h1>Hello Lazyfunction, count is {count} </h1>
      <button onClick={() => setCount((previousCount) => previousCount + 1)}>
        Update
      </button>
      <hr />
    </>
  )
}
