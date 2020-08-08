import React, { useState } from 'react'
import useTimeout from './useTimeout'

const NewsLetterBanner = () => {
  // Wait 5 seconds before poppung up banner
  const wait = 5000
  const [visible, setVisible] = useState(false)

  useTimeout(() => {
    setVisible(true)
  }, wait)

  if (!visible) return null

  return <div>... some newsletter modal</div>
}

export default NewsLetterBanner
