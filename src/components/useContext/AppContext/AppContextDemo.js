import React from 'react'
import ContextProvider from './ContextProvider'

import AppContextFun from './AppContextFun'

const AppContextDemo = () => {
  return (
    <ContextProvider>
      <AppContextFun />
    </ContextProvider>
  )
}

export default AppContextDemo
