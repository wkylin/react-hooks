import * as React from 'react'
import { createPortal } from 'react-dom'
const Modal = ({ isVisible, hideModal }) => {
  return isVisible
    ? createPortal(
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 100,
            width: '800px',
            height: '600px',
            margin: '0 auto',
          }}
        >
          <div>
            <h5>Modal</h5>
            <span>Why this modal has popped up</span>
          </div>
          <button onClick={hideModal}>Close</button>
        </div>,
        document.body
      )
    : null
}
export default Modal
