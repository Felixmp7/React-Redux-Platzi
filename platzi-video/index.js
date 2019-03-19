import React from 'react'
import {render} from 'react-dom'
import Media from './src/playlist/components/Media'

const app = document.getElementById('app')
// const holaMundo = <h1>Hola Mundo</h1>
// ReactDOM.render(que voy a renderizar, en donde?)
render(<Media
        title="¿Qué es responsive design?"
        author="Felix Pacheco"
        image="./src/playlist/images/covers/responsive.jpg"
      />
      , app)
