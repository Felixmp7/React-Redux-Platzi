import React from 'react'

const Categories = props => {
  return(
    <div>
      {
        props.categories.map( item => {
          return <Category/>
        })
      }
    </div>
  )
}

export default Categories
