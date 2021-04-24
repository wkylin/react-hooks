/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';
const ChildModal = forwardRef((props, ref) => {
  return (
    <div className="modal" ref={ref}>
      <p>This is an info modal</p>
      <button type="button" onClick={() => props.toggleModal()}>
        Close modal
      </button>
    </div>
  )
})

export default ChildModal
