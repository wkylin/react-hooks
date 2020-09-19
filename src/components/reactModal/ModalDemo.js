import * as React from 'react'
import Modal from './Modal'
import useModal from './useModal'
const ModalDemo = () => {
  const { isVisible, toggleModal } = useModal()

  return (
    <div>
      <button onClick={toggleModal}>Show modal</button>
      <Modal isVisible={isVisible} hideModal={toggleModal} />
    </div>
  )
}
export default ModalDemo
