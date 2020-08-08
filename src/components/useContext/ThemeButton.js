import React from 'react'
import { useTheme } from './ThemeProvider'

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button className={`${theme}-theme`} type="button" onClick={toggleTheme}>
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button>
  )
}
export default ThemeButton
