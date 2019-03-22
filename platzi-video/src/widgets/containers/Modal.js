import React { Component } from 'react'
import { createPortal } from 'react-dom'

class ModalContainer extends Component {
  render() {
    // return createPortal(que voy a renderizar, en donde?)
    return createPortal(
      this.props.children,
      document.querySelector('#modal-container')
    )
  }
}

export default ModalContainer
