import React, {Component} from 'react'
import {connect} from 'react-redux'
import Search from '../components/Search'

class SearchContainer extends Component {
  state = {
    value: 'Luis Fonsi'
  }
  handleSubmit = event => {
    event.preventDefault()
    console.log(this.input.value ,'Submit')
    // Disparo de la acción
    this.props.dispatch({
      type: 'SEARCH_VIDEO',
      payload: {
        query: this.input.value
      }
    })
  }

  setInputRef = element => {
    this.input = element
  }

  handleInputChange = event => {
    this.setState({
      value: event.target.value
    })
  }
  render() {
    return(
      <Search
        handleSubmit={this.handleSubmit}
        setRef={this.setInputRef}
        handleChange={this.handleInputChange}
        value={this.state.value}
      />
    )
  }
}

export default connect()(SearchContainer)
