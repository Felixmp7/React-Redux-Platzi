import React, {Component} from 'react'
import Media from '../components/Media'
import {connect} from 'react-redux'

class MediaContainer extends Component {
  render () {
    return (
      <Media {...this.props.data}/>
    )
  }
}

function mapStateToProps(state,props){
  return {
    data: state.get('data').get('entities').get('media').get(props.id)
  }
}

export default connect(mapStateToProps)(MediaContainer)
