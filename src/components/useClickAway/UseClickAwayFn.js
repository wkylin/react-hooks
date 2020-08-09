import React from 'react';

import useClickAway from './useClickAway'


const UseClickAway = () => {
  const { ref, active, toggle } = useClickAway()
  return (
    <div className="container" ref={ref}>
      <div className="button" onClick={toggle}>
        Click
      </div>
      {active && <div className="contents">contents</div>}
    </div>
  )
}

export default UseClickAway;