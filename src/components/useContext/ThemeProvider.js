import React, { createContext, useState, useContext } from 'react'

const ThemeContext = createContext(null);

const ThemeWrapper = (props) => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeWrapper;

export const useTheme = () => {
  const theme = useContext(ThemeContext)
  if (theme == null) {
    throw new Error('useTheme() called outside of a ThemeContext.Provider')
  }
  return theme;
}


