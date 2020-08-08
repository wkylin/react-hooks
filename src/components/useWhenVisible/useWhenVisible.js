import { useEffect } from 'react'

const useWhenVisible = (
  target = undefined,
  callback = () => {},
  root = document.body
) => {
  useEffect(() => {
    if (!target || !root) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (typeof callback === 'function') {
            callback()
          }
        }
      },
      { root }
    )

    observer.observe(target)

    return () => {
      observer.unobserve(target)
    }
  }, [target, callback, root])
}

export default useWhenVisible
