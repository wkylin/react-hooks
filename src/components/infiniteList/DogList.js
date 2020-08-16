import React, { useState } from 'react'
import InfiniteList from './InfiniteList'

import './index.css'

export default function DogList() {
  const [state, setState] = useState([])

  return (
    <div className="App">
      <InfiniteList state={state} setState={setState} />
    </div>
  )
}
