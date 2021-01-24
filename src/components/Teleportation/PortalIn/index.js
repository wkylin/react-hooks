
import { useEffect, useContext } from 'react';

import { PortalContext } from '../PortalProvider/index';

export const PortalIn = (props) => {
  const { addPortalItem, removePortalItem } = useContext(PortalContext)

  useEffect(() => {
    addPortalItem(props.portalType, props.children)

    return () => removePortalItem(props.portalType)
  }, [props.portalType, props.children])

  return null
}