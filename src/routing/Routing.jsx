import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Agence from '../pages/Agence'
import About from '../pages/About'

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/agence' element={<Agence/> } />
        <Route path='/about' element={<About/> } />
      </Routes>
    </div>
  )
}

export default Routing
