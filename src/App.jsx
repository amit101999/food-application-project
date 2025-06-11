import React from 'react'
import "./index.css"
import Home from './Pages/Home/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Products from './Pages/Products/Products'
import Cart from './Pages/Cart/Cart'
import Header from './components/Header/Header'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/products' element={< Products />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Router>

  )
}

export default App
