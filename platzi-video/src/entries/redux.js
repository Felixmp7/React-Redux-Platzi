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
}

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
const store = createStore(
  (state) => state,   // reducer,
  initialState,   // Estado inicial de nuestra aplicacion,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  // enhancer,
)

const container = document.getElementById('playlist') //Referenciando div del html
const playlist = store.getState() // Guardando datos del estore en una constante
console.log(store.getState()); // Obteniendo datos del store
