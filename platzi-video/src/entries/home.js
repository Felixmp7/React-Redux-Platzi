import React from 'react'
import {render} from 'react-dom'
import Home from '../pages/containers/home'
// import data from './src/playlist/api.json'
// import Playlist from './src/playlist/components/Playlist'

const app = document.getElementById('app')
// const holaMundo = <h1>Hola Mundo</h1>
// ReactDOM.render(que voy a renderizar, en donde?)
render(<Home/>, app)
