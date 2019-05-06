import schema from '../schemas'
import { fromJS } from 'immutable'

const initialState = fromJS({
  entities: schema.entities,
  categories: schema.result.categories,
  search: '',
})

function data(state = initialState,action){
  switch (action.type) {
    case 'SEARCH_VIDEO': {
      // let results = []
      // if (action.payload.query) {
      //   const list = state.data.categories
      //   list.map( categoria =>{
      //         let tempResults = categoria.playlist.filter(item=>{
      //           return item.author.toLowerCase().includes(action.payload.query.toLowerCase())
      //         })
      //         results = results.concat(tempResults)
      //   })
      // }
      // return {
      //   ...state,
      //   search: results
      // }
      return state.set('search', action.payload.query)
      /*
        Al haber transformado el estado en un mapa, puedo hacer como que seteo el state
        directamente state.set() y lo que va a hacer es sacar una copia automatica para crear
        un nuevo estado inmutable
      */
    }
    default: return state
  }
}

export default data
