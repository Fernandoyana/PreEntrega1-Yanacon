import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer'
import { mFetch } from './Componentes/mockFetch/mockFetch'
import CartContainer from './Componentes/CartContainer/CartContainer'
import ItemCount from './Componentes/ItemCount/ItemCount'
import Navbar from './Componentes/Navbar/Navbar'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

  return(
    <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:cid' element={<ItemListContainer/>}/>
          <Route path='/detalle/:pid' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<CartContainer/>}/>
        </Routes>
        
    </Router>
  )
}

export default App
