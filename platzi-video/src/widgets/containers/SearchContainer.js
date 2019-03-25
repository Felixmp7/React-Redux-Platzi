import React, {Component} from 'react'
import Search from '../components/Search'

class SearchContainer extends Component {
  state = {
    value: 'Luis Fonsi'
  }
  handleSubmit = event => {
    event.preventDefault()
    console.log(this.input.value ,'Submit')
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

export default SearchContainer
