import React from 'react'

import useInfiniteScrollTo from './useInfiniteScrollTo'

function numbersApi() {
  let numbers = []
  for (let i = 0; i < 20; i++) {
    const number = Math.floor(Math.random() * 100) + 1
    numbers = numbers.concat(number)
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(numbers)
    }, 500)
  })
}

export default function UseInfiniteScrollToDemo() {
  const [scrollerRef, handleScroll, items, loading] = useInfiniteScrollTo(
    numbersApi
  )
  return (
    <div className="children">
      <h1>Numbers</h1>
      <div
        className="scroller"
        style={{ height: 300, overflow: 'scroll' }}
        ref={scrollerRef}
        onScroll={handleScroll}
      >
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        {loading && <p>Loading...</p>}
      </div>
    </div>
  )
}
