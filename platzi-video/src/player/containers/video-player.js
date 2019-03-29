import React, {Component} from 'react'
import VideoPlayerLayout from '../components/VideoPlayerLayout'
import Video from '../components/Video'

class VideoPlayerContainer extends Component {
  render() {
    return(
      <VideoPlayerLayout>
        <Video
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
          autoplay={true}
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayerContainer
