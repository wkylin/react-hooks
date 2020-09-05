import { useState, useEffect, useRef } from 'react'

const useThrottle = (value, limit) => {
  const [throttledValue, setThrottledValue] = useState(value)
  const lastRan = useRef(Date.now())

  useEffect(() => {
    const handler = setTimeout(function () {
      if (Date.now() - lastRan.current >= limit) {
        setThrottledValue(value)
        lastRan.current = Date.now()
      }
    }, limit - (Date.now() - lastRan.current))

    return () => {
      clearTimeout(handler)
    }
  }, [value, limit])

  return throttledValue
}

export default useThrottle

// function Demo() {
//   const [text, setText] = useState("Hello");
//   const throttledText = useThrottle(text, 1000);
//   return (
//     <div>
//       <input
//         defaultValue={"Hello"}
//         onChange={e => {
//           setText(e.target.value);
//         }}
//       />
//       <p>Actual value: {text}</p>
//       <p>Throttled value: {throttledText}</p>
//     </div>
//   );
// }
