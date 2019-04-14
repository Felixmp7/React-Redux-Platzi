function data(state,action){
  switch (action.type) {
    case 'SEARCH_VIDEO': {
      let results = []
      if (action.payload.query) {
        const list = state.data.categories
        list.map( categoria =>{
              let tempResults = categoria.playlist.filter(item=>{
                return item.author.includes(action.payload.query)
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
