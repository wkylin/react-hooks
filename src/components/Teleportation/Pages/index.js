import React from 'react';

import { PortalIn } from '../PortalIn/index';

const Pages = () => {
  return (
    <main>
      {/*
        "<div>Loading...</div>" is rendered between header
        element but does not display on the Page component.
      */}
      <PortalIn portalType="headerPortal">
        <div>Loading...</div>
      </PortalIn>
    </main>
  )
}

export default Pages;