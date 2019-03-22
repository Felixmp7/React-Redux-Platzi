import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/Categories'
import Related from '../components/Related'
import ModalContainer from '../../widgets/containers/Modal'

class Home extends Component {
  render(){
    return(
      <HomeLayout>
        <Related/>
        <Categories categories={this.props.data.categories}/>
        <ModalContainer/>
      </HomeLayout>
    )
  }
}

export default Home
