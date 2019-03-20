import React, { Component } from 'react'
import Media from './Media'
import './playlist.css'

class Playlist extends Component {
  render(){
    // console.log(this.props.data)
    // const playlist = this.props.data.categories[0].playlist
    const categories = this.props.data.categories
    return(
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
}

export default Playlist;

// {/* return <Media {...item} key={item.id}/> */}
