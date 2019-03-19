import React, { Component } from 'react'
import './media.css'
import bitCoin from '../images/covers/bitcoin.jpg'

class Media extends Component {
  render(){
    const styles = {
      container: {
        color: '#44546b',
        cursor: 'pointer',
        width: 260,
        border: '1px solid red',
      }
    }
    return(
      <div className="Media">
        <div className="Media-cover">
          <img
            className="Media-image"
            src={this.props.image}
            alt="bitcoin"
            width={260}
            height={160}
          />
          <h3 className="Media-title">{this.props.title}</h3>
          <p className="Media-author">{this.props.author}</p>
        </div>
      </div>
    )
  }
}

export default Media;
