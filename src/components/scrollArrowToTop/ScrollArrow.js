import React, { useState, useEffect } from 'react'
import './scrollArrow.css'

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false)

  console.log(showScroll)
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  }

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop)
    return () => {
      window.removeEventListener('scroll', checkScrollTop)
    }
  }, [showScroll])

  return (
    <div
      className="scrollTop"
      onClick={scrollTop}
      style={{ height: 40, display: showScroll ? 'flex' : 'none' }}
    >
      scroll to top
    </div>
  )
}

export default ScrollArrow
