import React from 'react'
import Playlist from '../../playlist/components/Playlist'

const Category = props => {
  return(
    <div>
      <p>{props.description}</p>
      <h2>{props.title}</h2>
      <Playlist
        playlist={props.playlist}
      />
    </div>
  )
}

export default Category
