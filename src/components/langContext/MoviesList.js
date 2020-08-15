import React from 'react'
import { LangProvider } from './LangContext'
import LangApp from './LangApp'

const MoviesList = () => {
  return (
    <LangProvider>
      <LangApp />
    </LangProvider>
  )
}

export default MoviesList
