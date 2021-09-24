import React from 'react'

const Modal = ({ children, showModal, setShowModal }) => {

    if(!showModal){
        return null
    }

    return (
        <div className='modalOverlay' onClick={ () => setShowModal(false) } >
            <div className='modalWindow' onClick={ (e) => e.stopPropagation() } >
                { children }
            </div>
        </div>
    )
}

export default Modal
