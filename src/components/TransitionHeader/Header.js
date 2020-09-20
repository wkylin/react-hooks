import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import useDocumentScrollThrottled from './useDocumentScrollThrottled'

function Header() {
  const [shouldHideHeader, setShouldHideHeader] = useState(false)
  const [shouldShowShadow, setShouldShowShadow] = useState(false)

  const MINIMUM_SCROLL = 80
  const TIMEOUT_DELAY = 400

  useDocumentScrollThrottled((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData
    const isScrolledDown = previousScrollTop < currentScrollTop
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL

    setShouldShowShadow(currentScrollTop > 2)

    setTimeout(() => {
      setShouldHideHeader(isScrolledDown && isMinimumScrolled)
    }, TIMEOUT_DELAY)
  })

  const shadowStyle = shouldShowShadow ? 'shadow' : ''
  const hiddenStyle = shouldHideHeader ? 'hidden' : ''

  return (
    <header className={`header ${shadowStyle} ${hiddenStyle}`}>
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <ul className="links">
        <li className="link-item">
          <Link to="/home">Home</Link>
        </li>
        <li className="link-item">about</li>
        <li className="link-item">join</li>
      </ul>
    </header>
  )
}

export default Header
