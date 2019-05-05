import data from '../schemas'
const initialState = {
  data: {
    entities: data.entities,
    categories: data.result.categories,
    search: [],
  }
}

function data(state = initialState,action){
  switch (action.type) {
    case 'SEARCH_VIDEO': {
      let results = []
      if (action.payload.query) {
        const list = state.data.categories
        list.map( categoria =>{
              let tempResults = categoria.playlist.filter(item=>{
                return item.author.toLowerCase().includes(action.payload.query.toLowerCase())
              })
              results = results.concat(tempResults)
        })
      }
      return {
        ...state,
        search: results
      }
    }
    default: return state
  }
}

export default data
