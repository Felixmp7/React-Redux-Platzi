import React from 'react'
import Media from './Media'
import './playlist.css'

const Playlist = (props) => {
  const categories = props.data.categories
  return (
        <div className="Playlist">
          {
            categories.map( categorie =>{
              return (
                <div className="Categorie" key={categorie.id}>
                  {
                    categorie.playlist.map( item => {
                      return <Media {...item} key={item.id}/>
                    })
                  }
                </div>
              )
            })
          }
        </div>
  )
}

export default Playlist;

// {/* return <Media {...item} key={item.id}/> */}
