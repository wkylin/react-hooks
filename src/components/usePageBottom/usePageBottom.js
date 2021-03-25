import React from 'react'

export default function usePageBottom() {
  const [bottom, setBottom] = React.useState(false)

  React.useEffect(() => {
    function handleScroll() {
      const isBottom =
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      setBottom(isBottom)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return bottom
}
