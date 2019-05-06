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
