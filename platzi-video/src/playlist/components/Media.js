//Dependencies
import React, { Component } from 'react'
import PropTypes from 'prop-types'
//Medias
import './media.css'


class Media extends Component {
  render(){
    const { author, image, title} = this.props
    //Esto es una forma de utilizar constantes para ahorrar la sintaxis this.props
    return(
      <div className="Media">
        <div className="Media-cover">
          <img
            className="Media-image"
            // src={this.props.image}
            src={image}
            alt="bitcoin"
            width={260}
            height={160}
          />
          {/* <h3 className="Media-title">{this.props.title}</h3> */}
          <h3 className="Media-title">{title}</h3>
          {/* <p className="Media-author">{this.props.author}</p> */}
          <p className="Media-author">{author}</p>

        </div>
      </div>
    )
  }
}

Media.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
}

export default Media;
