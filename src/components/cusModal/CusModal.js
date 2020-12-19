import React, { useState, useEffect } from 'react'
import './index.css'

const CusModal = () => {
  const [isShowModal, setIsShowModal] = useState(true)
  const [isShow, setIsShow] = useState(false)

  const closeM = () => {
    setIsShowModal(!isShowModal)
    setIsShow(true)
  }

  useEffect(() => {
    if (!isShowModal) {
      setTimeout(() => {
        setIsShow(false)
      }, 6000)
    }
  }, [isShowModal])

  console.log('isShowModal', isShowModal);
  console.log('isShow', isShow);

  return (
    <div className="modal">
      <button className="closeButton" onClick={closeM}>
        CLOSE MODAL
      </button>
      {isShowModal && <div className="shadow"></div>}
      <div className={isShowModal ? 'showModal mainModal' : 'hideModal'}>
        <h1>Main Modal</h1>
      </div>

      {isShow && <div className={isShowModal ? 'tips' : 'showTips'}>tips</div>}
    </div>
  )
}

export default CusModal
