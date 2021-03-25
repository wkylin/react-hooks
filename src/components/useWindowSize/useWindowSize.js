import { useEffect, useState } from 'react'

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    let isMounted = true

    function handleResize() {
      if (isMounted) {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
    }

    window.addEventListener('resize', handleResize)
    return () => {
      isMounted = false
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowSize
}

export default useWindowSize

// [-0].includes(+0) true
// [NaN].indexOf(NaN) true
// [NaN].indexOf(NaN) true
// scrollIntoView

// import React from "react";

// export default function useWindowSize() {
//   const isSSR = typeof window !== "undefined";
//   const [windowSize, setWindowSize] = React.useState({
//     width: isSSR ? 1200 : window.innerWidth,
//     height: isSSR ? 800 : window.innerHeight,
//   });

//   function changeWindowSize() {
//     setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//   }

//   React.useEffect(() => {
//     window.addEventListener("resize", changeWindowSize);

//     return () => {
//       window.removeEventListener("resize", changeWindowSize);
//     };
//   }, []);

//   return windowSize;
// }
