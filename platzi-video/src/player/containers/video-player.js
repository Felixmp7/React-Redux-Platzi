import React, {Component} from 'react'
import VideoPlayerLayout from '../components/VideoPlayerLayout'
import Video from '../components/Video'

class VideoPlayerContainer extends Component {
  render() {
    return(
      <VideoPlayerLayout>
        <Video
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayerContainer
