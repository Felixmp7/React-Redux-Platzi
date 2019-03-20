import React from 'react'
import Category from './Category'
import './Categories.css'

const Categories = props => {
  return(
    <div className="Categories">
      {
        props.categories.map( item => {
          return <Category key={item.id} {...item}/>
        })
      }
    </div>
  )
}

export default Categories
