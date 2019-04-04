import React, {Component} from 'react'
import './Video.css'

class Video extends Component {
  componentWillReceiveProps(nextProps){
    // console.log(nextProps)
    this.nextProps.pause !== this.props.pause ?

    :
  }
  render() {
    return(
      <div className="Video">
        <video
          controls
          autoPlay={this.props.autoPlay}
          src={this.props.src}
        />
      </div>
    )
  }
}

 export default Video
