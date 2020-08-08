import React from 'react'

import UnUseTheme from './UnUseTheme'
import UseThemeHeader from './UseThemeHeader'
import ThemeButton from './ThemeButton'
import ThemeWrapper from './ThemeProvider'

const ThemeForContext = () => {
  return (
    <ThemeWrapper>
      <UseThemeHeader />
      <UnUseTheme />
      <ThemeButton />
    </ThemeWrapper>
  )
}

export default ThemeForContext;
