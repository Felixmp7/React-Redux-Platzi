import React from 'react'
import Category from './Category'

const Categories = props => {
  return(
    <div>
      {
        props.categories.map( item => {
          return <Category key={item.id} {...item}/>
        })
      }
    </div>
  )
}

export default Categories
