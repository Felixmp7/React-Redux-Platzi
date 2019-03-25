import React from 'react'
import './Search.css'

const Search = props => (
  <form
    className="Search"
    onSubmit={props.handleSubmit}
  >
    <input
      type="text"
      className="Search-input"
      name="search"
    />
  </form>
)

export default Search
