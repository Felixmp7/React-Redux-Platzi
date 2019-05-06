import React from 'react'
import {render} from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Home from '../pages/containers/home'
// import data from '../schemas'
import reducer from '../reducers/index'
import { Map as map } from 'immutable'

// console.log(data);

// const initialState = {
//   data: {
//     entities: data.entities,
//     categories: data.result.categories,
//     search: [],
//   },
//   modal: {
//     visibility: false,
//     mediaID: null,
//   }
// }
const store = createStore(
  reducer,
  map(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const homeContainer = document.getElementById('home-container')

render(
  <Provider store={store}>
    <Home />
  </Provider>
  , homeContainer)
