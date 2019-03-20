import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'

class Home extends Component {
  render(){
    return(
      <HomeLayout>
        <Categories/>
      </HomeLayout>
    )
  }
}

export default Home
