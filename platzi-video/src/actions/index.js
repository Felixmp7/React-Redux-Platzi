import {
  OPEN_MODAL,
  CLOSE_MODAL,
  SEARCH_VIDEO,
  SEARCH_ASYNC_VIDEO
} from './types'

export function openModal(mediaID){
  return {
    type: OPEN_MODAL,
    payload: {
      mediaID
    }
  }
}

export function closeModal(){
  return {
    type: CLOSE_MODAL,
  }
}

export function searchVideo(query){
  return {
    type: SEARCH_VIDEO,
    payload: {
      query
    }
  }
}

export function searchAsyncVideo(query){
  return (dispatch) => {
    setTimeout(()=>{
      dispatch(searchVideo(query))
    },5000)
  }
}
