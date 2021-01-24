import React, { useState, useCallback } from 'react';


export const PortalContext = React.createContext(null)

export const PortalProvider = (props) => {
  const [portalMap, setPortalMap] = useState(new Map())

  const addPortalItem = useCallback((portalType, component) => {
    portalMap.set(portalType, component)

    const clonedMapWithNewItem = new Map(portalMap)

    setPortalMap(clonedMapWithNewItem)
  }, [])

  const removePortalItem = useCallback((portalType) => {
    portalMap.delete(portalType)

    const clonedMapWithoutItem = new Map(portalMap)

    setPortalMap(clonedMapWithoutItem)
  }, [])

  return (
    <PortalContext.Provider
      value={{ portalMap, addPortalItem, removePortalItem }}
    >
      {props.children}
    </PortalContext.Provider>
  )
}
