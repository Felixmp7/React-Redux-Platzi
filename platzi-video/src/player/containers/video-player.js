import React, {Component} from 'react'
import VideoPlayerLayout from '../components/VideoPlayerLayout'
import Video from '../components/Video'
import Title from '../components/Title'

class VideoPlayerContainer extends Component {
  render() {
    return(
      <VideoPlayerLayout>
        <Title/>
        <Video
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
          autoplay={true}
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayerContainer
