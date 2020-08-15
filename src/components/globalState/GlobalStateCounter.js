import React, { useContext } from 'react'
import { StateContext } from './StateContext'

function GlobalStateCounter({ index }) {
  const [{ points }, dispatch] = useContext(StateContext)

  return (
    <div id="Points">
      <p className="title">Points (globalState {index})</p>
      <hr className="divider" />
      <div className="pointsContainer">
        <div className="buttons">
          {/* These buttons use the dispatch to update the state */}
          <button
            className="button add"
            onClick={() => dispatch({ type: 'add' })}
          >
            Add
          </button>
          <button
            className="button subtract"
            onClick={() => dispatch({ type: 'subtract' })}
          >
            Subtract
          </button>
          <button
            className="button reset"
            onClick={() => dispatch({ type: 'reset' })}
          >
            Reset
          </button>
        </div>
        <div className="outputBox">
          {/* Output the points variable */}
          <p>{points}</p>
        </div>
      </div>
    </div>
  )
}

export default GlobalStateCounter
