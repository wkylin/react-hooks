
import React, { forwardRef, useEffect } from 'react';

import useSyncedRef from './useSyncedRef';


// eslint-disable-next-line react/display-name
const RefButton = forwardRef((props, ref) => {
  // keep ref in sync with buttonRef
  const buttonRef = useSyncedRef(ref)

  useEffect(() => {
    buttonRef.current.focus()
  }, [buttonRef])

  return <button ref={buttonRef} {...props} >Button </button>
});

export default RefButton;