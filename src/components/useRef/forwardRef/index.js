import React, { useRef, useState } from 'react'
import ChildModal from './child'
const ParentRef = () => {
  const [modal, setModal] = useState(false)
  const modalRef = useRef(null)
  const toggleModal = () => {
    setModal(!modal)
  }
  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setModal(false)
    }
  }
  return (
    <div>
      <div className="page" onClick={handleOutsideClick}>
        <h3>Page title</h3>
        <p>Generic page with a button to open a modal</p>
        <button type="button" onClick={toggleModal}>
          Open modal
        </button>
      </div>
      {modal && <ChildModal ref={modalRef} toggleModal={toggleModal} />}
    </div>
  )
}

export default ParentRef
