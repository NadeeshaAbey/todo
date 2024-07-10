import React, {useRef} from 'react'

function Modal({showModal, setShowModal, children}) {

    const modalRef = useRef()

    const closeModal = (e) => {
        if(e.target === modalRef.current){
            setShowModal(false)
        }
    }
  return (
    showModal &&
    <div className='Modal' ref ={modalRef} onClick={closeModal}>
        <div className="container">
            {children}
        </div>
    </div>
  )
}

export default Modal