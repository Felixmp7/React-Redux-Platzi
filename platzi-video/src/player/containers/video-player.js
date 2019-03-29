import React, {Component} from 'react'
import VideoPlayerLayout from '../components/VideoPlayerLayout'

class VideoPlayerContainer extends Component {
  render() {
    return(
      <VideoPlayerLayout>
        <video
          autoPlay
          controls
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayerContainer
