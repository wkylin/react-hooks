import React from 'react';

import { PortalProvider } from '../PortalProvider/index';
import Header from '../Header/index';
import Pages from '../Pages/index';

const Portal = () => {
  return (
    <div>
      <PortalProvider>
        <Header />
        <Pages />
      </PortalProvider>
    </div>
  )
}

export default Portal
