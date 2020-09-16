import React from 'react'
import { useStateWithCallbackLazy } from './useStateWithCallback'


// www.robinwieruch.de
// https://overreacted.io/
const UseSetStateCallback = () => {
  const [count, setCount] = useStateWithCallbackLazy(0)

  const handleClick = () => {
    setCount(count + 1, (currentCount) => {
      console.log(currentCount)
      if (currentCount > 1) {
        console.log('Threshold of over 1 reached.')
      } else {
        console.log('No threshold reached.')
      }
    })
  }

  return (
    <div>
      <p>{count}</p>

      <button type="button" onClick={handleClick}>
        Increase
      </button>
    </div>
  )
}

export default UseSetStateCallback
