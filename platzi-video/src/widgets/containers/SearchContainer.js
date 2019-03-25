import React, {Component} from 'react'
import Search from '../components/Search'

class SearchContainer extends Component {
  handleSubmit = event => {
    event.preventDefault()
  }
  render() {
    return(
      <Search
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default SearchContainer
