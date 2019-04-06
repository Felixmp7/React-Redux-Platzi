import React, {Component} from 'react'
import VideoPlayerLayout from '../components/VideoPlayerLayout'
import Video from '../components/Video'
import Title from '../components/Title'
import PlayPause from '../components/Play-Pause.jsx'
import Timer from '../components/Timer'
import Controls from '../components/Controls'

class VideoPlayerContainer extends Component {
  state = {
    pause: true,
    duration: 0,
  }

  togglePlay = event => {
    this.setState({
      pause: !this.state.pause
    })
  }

  componentDidMount(){
    this.setState({
      pause: !this.props.autoplay
    })
  }

  handleLoadedMetadata = event => {
    this.video = event.target
    this.setState({
      duration: this.video.duration
    })
  }

  handleTimeUpdate = event => {
    console.log(this.video.currentTime);
  }
  render() {
    return(
      <VideoPlayerLayout>
        <Title
          title="Esto es un video chill"
        />
        <Controls>
          <Timer
            duration={this.state.duration}
          />
          <PlayPause
            handleClick={this.togglePlay}
            pause={this.state.pause}
          />
        </Controls>
        <Video
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          pause={this.state.pause}
          autoPlay={this.props.autoplay}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayerContainer
