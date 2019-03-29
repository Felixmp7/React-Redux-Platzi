import React, {Component} from 'react'

class Video extends Component {
  render() {
    return(
      <video
        autoPlay={this.props.autoPlay}
        src={this.props.src}
      />
    )
  }
}

 export default Video
