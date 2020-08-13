import { useState, useEffect, useLayoutEffect } from 'react'

// import useStateWithCallback from 'use-state-with-callback';
// import { useStateWithCallbackInstant } from 'use-state-with-callback';

// const [count, setCount] = useStateWithCallbackInstant(0, count => {
//   if (count > 1) {
//     console.log('render with instant callback.');
//   }
// });

const useStateWithCallback = (initialState, callback) => {
  const [state, setState] = useState(initialState)

  useEffect(() => callback(state), [state, callback])

  return [state, setState]
}

const useStateWithCallbackInstant = (initialState, callback) => {
  const [state, setState] = useState(initialState)

  useLayoutEffect(() => callback(state), [state, callback])

  return [state, setState]
}

export { useStateWithCallbackInstant }

export default useStateWithCallback
