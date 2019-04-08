//Dependencies
import React, {Component} from 'react'
//Components
import VideoPlayerLayout from '../components/VideoPlayerLayout'
import Video from '../components/Video'
import Title from '../components/Title'
import PlayPause from '../components/Play-Pause.jsx'
import Timer from '../components/Timer'
import Controls from '../components/Controls'
import ProgressBar from '../components/ProgressBar'
import Spinner from '../components/Spinner'
//Functions
import { formattedTime } from '../../utilities/utilities'

class VideoPlayerContainer extends Component {
  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    max: 0,
    min: 0,
    loading: false,
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
      duration: formattedTime(this.video.duration),
      min: this.video.duration
    })
  }

  handleTimeUpdate = event => {
    // console.log(this.video.currentTime)
    this.setState({
      currentTime: formattedTime(this.video.currentTime),
      max: this.video.currentTime
    })
  }

  handleProgressChange = event =>{
    this.video.currentTime = event.target.value
  }

  handleSeeking = event => {
    this.setState({
      loading: true
    })
  }
  handleSeeked = event => {
    this.setState({
      loading: false
    })
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
            currentTime={this.state.currentTime}
          />
          <PlayPause
            handleClick={this.togglePlay}
            pause={this.state.pause}
          />
          <ProgressBar
            duration={this.state.min}
            value={this.state.max}
            handleProgressChange={this.handleProgressChange}
          />
        </Controls>
        <Spinner active={this.state.loading}/>
        <Video
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          pause={this.state.pause}
          autoplay={this.props.autoplay}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayerContainer
