import { createStore } from 'redux'
// console.log('ola ke ase');

const form = document.getElementById('form')
form.addEventListener('submit',handleSubmit)

function handleSubmit(event) {
  event.preventDefault()
  const data = new FormData(form) // FormData es una clase que podemos utilizar para
                             //  guardar los datos, en éste caso los del formulario
  const title = data.get('title')
  console.log(title)

  store.dispatch({ //Enviando una accion
    type: 'ADD_SONG',
    payload: {  // Por convención es bueno mandar el payload como un objeto
      title
    }
  })
}

/*
Action = Bloque de información que envía datos a la aplicación.

Datos importantes:

Se envían usando el método dispatch() del store.
Son la única fuente de información del store.
Son objetos planos de JavaScript.
*/


const initialState = [
  {
    'title': 'Despacito'
  },
  {
    'title': 'One more time'
  },
  {
    'title': 'Echame la culpa'
  },
]

const reducer = function(state,action){
  switch (action.type) {
    case 'ADD_SONG':
      return [...state, action.payload]
    break;

    default: return state
  }
}

const store = createStore(
  reducer,   // reducer,
  initialState,   // Estado inicial de nuestra aplicacion,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  // enhancer,
)

function render(){
  const container = document.getElementById('playlist') //Referenciando div del html
  const playlist = store.getState() // Guardando datos del estore en una constante
  // console.log(store.getState()); // Obteniendo datos del store
  container.innerHTML = '' // Con ésto logro resolver el duplicado de elementos del store

  playlist.forEach( item => { // Recorriendo el array de objetos
      const template = document.createElement('p') // Creo un elemento <p> y lo guardo en template
      template.textContent = item.title // Le añado contenido al tag <p> proporcionado por la data
                                        // que captura el form = item.title
      container.appendChild(template) // Le añado a container cada template que creo
  })
}

render()

function handleChange(){
  render()
}

store.subscribe(handleChange)
