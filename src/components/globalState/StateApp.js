import React from 'react'
import { StateProvider } from './StateContext'
import GlobalStateCounter from './GlobalStateCounter'

function StateApp() {
  // Initialize the state
  const initialState = {
    points: 0,
  }

  // Defines how to update the state based on actions
  const reducer = (state, action) => {
    switch (action.type) {
      case 'add':
        return { ...state, points: state.points + 1 }
      case 'subtract':
        return { ...state, points: state.points - 1 }
      case 'reset':
        return { ...state, points: 0 }
      default:
        return state
    }
  }

  return (
    <div className="App">
      <StateProvider initialState={initialState} reducer={reducer}>
        {
          // Creates two instances of the component so we can see both update when state changes
          [...Array(2)].map((e, i) => (
            <GlobalStateCounter key={i} index={i + 1} />
          ))
        }
      </StateProvider>
    </div>
  )
}

export default StateApp
