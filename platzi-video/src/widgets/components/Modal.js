import React from 'react'
import './Modal.css'

const Modal = props => {
  return(
    <div className="Modal">
      Esto es un Modal
      {
        props.children
      }
    </div>
  )
}

export default Modal
