import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/Categories'
import Related from '../components/Related'
import ModalContainer from '../../widgets/containers/Modal'
import Modal from '../../widgets/components/Modal'

class Home extends Component {
  state = {
    modalVisible: false,
    handleError: false,
  }

  handleOpenModal = () => {
    this.setState({
      modalVisible: true,
    })
  }

  handleCloseModal = event => {
    this.setState({
      modalVisible: false,
    })
  }

  componentDidCatch(error, info){
    this.setState({
      handleError: true,
    })
  }
  render(){
    if (this.state.handleError) {
      return <p>Ohhhh!! ha ocurrido un error!</p>
    }
    return(
      <HomeLayout>
        <Related/>
        <Categories
        categories={this.props.data}
        handleOpenModal={this.handleOpenModal}
        />
        {
          this.state.modalVisible &&
            <ModalContainer>
              <Modal
              handleClick={this.handleCloseModal}
              >
                <h1>Contenido del Modal</h1>
              </Modal>
            </ModalContainer>
        }
      </HomeLayout>
    )
  }
}

export default Home
