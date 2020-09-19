import React, { useContext, useEffect } from 'react'

import AppContext from './AppContext'

const AppContextFun = () => {
  const { example, setExample } = useContext(AppContext)

  useEffect(() => {
    console.log('context here: ', example)
  }, [example])

  const modifyExample = () => {
    setExample('set example')
  }

  return (
    <div>
      {example}

      <div onClick={modifyExample}>modify example</div>
    </div>
  )
}

export default AppContextFun
