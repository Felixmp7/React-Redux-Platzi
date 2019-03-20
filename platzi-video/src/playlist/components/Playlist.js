import React from 'react'
import Media from './Media'
import './playlist.css'
import Play from '../icons/components/Play'
import Pause from '../icons/components/Pause'
import FullScreen from '../icons/components/FullScreen'
import Volume from '../icons/components/Volume'

const Playlist = props => {
  const categories = props.data.categories
  return (
        <div className="Playlist">
          <Play
            color="black"
            size={50}
          />
          <Pause
            color="black"
            size={50}
          />
          <FullScreen
            color="black"
            size={50}
          />
          <Volume
            color="black"
            size={50}
          />
          {
            categories.map( categorie =>{
              return (
                <div className="Categorie" key={categorie.id}>
                  {
                    categorie.playlist.map( item => {
                      return <Media {...item} key={item.id}/>
                    })
                  }
                </div>
              )
            })
          }
        </div>
  )
}

export default Playlist;

// Dumb Components
// Cómo se ve?
//
// Puede contener smart components u otros componentes de UI
// Permiten composición con `[props.children]``
// No depeden del resto de la aplicación
// No especifica cómo los datos son cargados o mutados
// Recibe datos y callbacks solo con propiedades
// Rara vez tienen su propio estado
// Están escritos como componentes funcionales a menos que necesiten mejoras de performance.
// Sólo pueden ser Componentes funcionales o Pure Components

// Smart Components
// Qué hace?

// Concetrado en el funcionamiento de la aplicación
// Contienen componentes de UI u otros containers
// No tienen estilos
// Proveen de datos a componentes de UI u otros contenedores
// Proveen de callbacks a la UI
// Normalmente tienen estado
// Llaman acciones
// Generados por higher order components
