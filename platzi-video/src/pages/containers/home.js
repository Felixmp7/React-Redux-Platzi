import React, { Component } from 'react'
import { connect } from 'react-redux'
import { List as list } from 'immutable'
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/Categories'
import Related from '../components/Related'
import ModalContainer from '../../widgets/containers/Modal'
import Modal from '../../widgets/components/Modal'
import HandlError from '../../error/containers/Handle-Error'
import VideoPlayer from '../../player/containers/video-player'

class Home extends Component {
  // state = {
  //   modalVisible: false,
  // }

  handleOpenModal = media => {
    this.setState({
      modalVisible: true,
      media //media: media => Cualquiera de las 2 formas sirve, cosas de ECS
    })
  }

  handleCloseModal = event => {
    // this.setState({
    //   modalVisible: false,
    // })
    this.props.dispatch({
      type: 'CLOSE_MODAL',
    })
  }

  render(){
    return(
      <HandlError>
        <HomeLayout>
        <Related/>
        <Categories
          categories={this.props.categories}
          handleOpenModal={this.handleOpenModal}
          search={this.props.search}
        />
        {
          this.props.modal.get('visibility') &&
          <ModalContainer>
            <Modal
              handleClick={this.handleCloseModal}
            >
              <h1>Contenido del Modal</h1>
              <VideoPlayer
                autoplay
                id={this.props.modal.get('mediaID')}
                // src={this.state.media.src}
                // title={this.state.media.title}
              />
            </Modal>
          </ModalContainer>
        }
        </HomeLayout>
      </HandlError>
    )
  }
}
function mapStateToProps(state, props){
  const categories = state.get('data').get('categories').map( categoryID => {
    return state.get('data').get('entities').get('categories').get(categoryID)
  })
  let searchResults = list()
  const search = state.get('data').get('search')
  if (search) {
    const mediaList = state.get('data').get('entities').get('media')
    searchResults = mediaList.filter(item => {
      return item.get('author').toLowerCase().includes(search.toLowerCase())
    }).toList()
  }
  return {
    categories,
    search: searchResults,
    modal: state.get('modal')
    // En ésta función tengo que devolver que datos quiero enviarle
    // Al componente (home) como nuevas propiedades
  }
}
export default connect(mapStateToProps)(Home)
