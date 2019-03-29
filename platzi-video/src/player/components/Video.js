import React, {Component} from 'react'
import './Video.css'

class Video extends Component {
  render() {
    return(
      <div className="Video">
        <video
          autoPlay={this.props.autoPlay}
          src={this.props.src}
        />
      </div>
    )
  }
}

 export default Video
