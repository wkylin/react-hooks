
import { useContext } from 'react'

import { PortalContext } from '../PortalProvider/index';

const PortalOut = (props) => {
  const { portalMap } = useContext(PortalContext)

  return portalMap.get(props.portalType) || null
}

export default PortalOut;