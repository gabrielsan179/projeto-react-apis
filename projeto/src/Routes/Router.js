import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../Pages/HomePage/HomePage'
import PokedexPage from '../Pages/PokedexPage/PokedexPage'
import DetailPage from '../Pages/DetailPage/DetailPage'
import Header from '../Components/Header/Header'

const Router = () => {
  
  return (
    <BrowserRouter>
        <Routes>
            <Route index element={<HomePage />}/>
            <Route path='/Pokedex' element={<PokedexPage />}/>
            <Route path='/Detail/:pokemon' element={<DetailPage />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router