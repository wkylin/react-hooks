import React, { useState } from 'react'

import Modal from './Modal'

// Usage
const ShowModal = () => {
  // State for our modal
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setModalOpen(true)}>Show Modal</button>
      {modalOpen && (
        <Modal
          title="Try scrolling"
          content="I bet you you can't! Muahahaha 😈"
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  )
}

export default ShowModal
