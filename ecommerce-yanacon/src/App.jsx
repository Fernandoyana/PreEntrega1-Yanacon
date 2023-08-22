import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navbar from './Componentes/Navbar'
import Titulo from './Componentes/Titulo'
import Footer from './Componentes/Footer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  const [estado, cambiarEstado] = useState (0)

  const addCount = () =>{
    cambiarEstado(estado + 1)
  }

  return(
    <div>
      <Navbar/>

      <Titulo titulo='titulo app' subtitulo='subtitulo app'/>

      <label>
        <strong>{estado}</strong>
        <button onClick={addCount}> +1 </button>
      </label>

      <Footer titulo='titulo de footer' subtitulo='subtitulo de footer'/>
    </div>
  )
}

export default App
