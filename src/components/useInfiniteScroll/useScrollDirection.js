import { useState, useEffect } from 'react'
import _ from 'lodash'
const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState(null)
  const [prevOffset, setPrevOffset] = useState(0)
  const toggleScrollDirection = () => {
    let winScrollY = window.scrollY
    if (winScrollY === 0) {
      setScrollDirection(null)
    }
    if (winScrollY > prevOffset) {
      setScrollDirection('down')
    } else if (winScrollY < prevOffset) {
      setScrollDirection('up')
    }
    setPrevOffset(winScrollY)
  }
  useEffect(() => {
    window.addEventListener('scroll', _.debounce(toggleScrollDirection, 500))
    return () => {
      window.removeEventListener(
        'scroll',
        _.debounce(toggleScrollDirection, 500)
      )
    }
  })
  return [prevOffset, scrollDirection]
}

export default useScrollDirection
