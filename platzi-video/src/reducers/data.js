function data(state,action){
  switch (action.type) {
    case 'SEARCH_VIDEO': {
      let results = []
      if (action.payload.query) {
        const list = state.data.categories[2].playlist
        results = list.filter((item)=>{
          return item.author.includes(action.payload.query) // Acá estoy comparando
          // si el author incluye dentro de sus valores lo que viene por payload...
          // entonces es true y me va a devolver un nuevo arreglo
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
