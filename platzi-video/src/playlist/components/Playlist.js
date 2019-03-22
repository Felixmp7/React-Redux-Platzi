import React from 'react'
import Media from './Media'
import './playlist.css'

const Playlist = props => {
  return (
        <div className="Playlist">
          {
            props.playlist.map( item => {
              return (
                <Media
                  {...item}
                  key={item.id}
                  handleClick={props.handleOpenModal}
                />
              )
            })
          }
        </div>
  )
}

export default Playlist;

/*
<Play
  color="black"
  size={50}
/>
<Pause
  color="black"
  size={50}
/>
<FullScreen
  color="black"
  size={50}
/>
<Volume
  color="black"
  size={50}
/>
*/
