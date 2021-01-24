import { useEffect } from 'react'

export default function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return
        }

        handler(event)
      }

      document.addEventListener('mousedown', listener)
      document.addEventListener('touchstart', listener)

      return () => {
        document.removeEventListener('mousedown', listener)
        document.removeEventListener('touchstart', listener)
      }
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  )
}

// useOnClickOutside(ref, () => setModalOpen(false));
// <div ref={ref} />

// import { useEffect } from 'react'

// const useClickOutside = (closeModal, ref) => {
//   const handleClickOutside = (e) => {
//     if (!ref || !ref.current.contains(e.target)) {
//       closeModal()
//     }
//   }

//   useEffect(() => {
//     // add when mounted
//     document.addEventListener('click', handleClickOutside, true)
//     // return function to be called when unmounted
//     return () => {
//       document.removeEventListener('click', handleClickOutside, true)
//     }
//   }, []) // eslint-disable-line react-hooks/exhaustive-deps
// }

// export default useClickOutside
// const pullDown = useRef()
// useClickOutside(() => setIsOpen(false), pullDown)