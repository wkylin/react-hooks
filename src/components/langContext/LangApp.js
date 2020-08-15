import React, { useState, useEffect, useContext } from 'react'

import LangSwitch from './LangSwitch'
import Card from './Card'

import { fetchMock } from './ApiMock'
import LangContext from './LangContext'

function LangApp() {
  const [state, setState] = useState([])

  const { lang } = useContext(LangContext)

  useEffect(() => {
    fetchMock(lang).then((res) => {
      setState(res)
    })
  }, [lang])

  return (
    <div className="App">
      <LangSwitch />
      <div className="Cards">
        {state.map((item, idx) => (
          <Card key={idx} data={item} />
        ))}
      </div>
    </div>
  )
}

export default LangApp
