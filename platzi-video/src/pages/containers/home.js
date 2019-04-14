import React, { Component } from 'react'
import { connect } from 'react-redux'
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/Categories'
import Related from '../components/Related'
import ModalContainer from '../../widgets/containers/Modal'
import Modal from '../../widgets/components/Modal'
import HandlError from '../../error/containers/Handle-Error'
import VideoPlayer from '../../player/containers/video-player'

class Home extends Component {
  state = {
    modalVisible: false,
  }

  handleOpenModal = media => {
    this.setState({
      modalVisible: true,
      media //media: media => Cualquiera de las 2 formas sirve, cosas de ECS
    })
  }

  handleCloseModal = event => {
    this.setState({
      modalVisible: false,
    })
  }

  render(){
    return(
      <HandlError>
        <HomeLayout>
        <Related/>
        <Categories
          categories={this.props.data.categories}
          handleOpenModal={this.handleOpenModal}
        />
        {
          this.state.modalVisible &&
          <ModalContainer>
            <Modal
              handleClick={this.handleCloseModal}
            >
              <h1>Contenido del Modal</h1>
              <VideoPlayer
                autoplay
                src={this.state.media.src}
                title={this.state.media.title}
              />
            </Modal>
          </ModalContainer>
        }
        </HomeLayout>
      </HandlError>
    )
  }
}

export default Home
