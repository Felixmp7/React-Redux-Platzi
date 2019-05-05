import data from '../schemas'
const initialState = {
  visibility: false,
  mediaID: null,
}
function modal(state = initialState,action){
  switch (action.type) {
    case 'OPEN_MODAL':
      return state
    case 'CLOSE_MODAL':
      return state
    default:
      return state
  }
}

export default modal
