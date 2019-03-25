import React from 'react'
import Category from './Category'
import './Categories.css'
import SearchContainer from '../../widgets/containers/SearchContainer'

const Categories = props => {
  return(
    <div className="Categories">
      <SearchContainer/>
      {
        props.categories.map( item => {
          return (
            <Category
              key={item.id}
              {...item}
              handleOpenModal={props.handleOpenModal}
            />
          )
        })
      }
    </div>
  )
}

export default Categories
