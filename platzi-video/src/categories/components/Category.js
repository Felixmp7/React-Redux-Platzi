import React from 'react'
import Playlist from '../../playlist/components/Playlist'

const Category = props => {
  return(
    <div>
      {
        props.playlist.map( item => {
          return <Playlist {...item}/>
        })
      }
    </div>
  )
}

export default Category
