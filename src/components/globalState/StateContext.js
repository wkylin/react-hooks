import React, { createContext, useReducer } from 'react'

export const StateContext = createContext()

// This is a component that wraps all of its children in the Provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)
