import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Hotel from '../pages/Hotel'
import List from '../pages/List'
const Router = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hotels' element={<List/>}/>
        <Route path='/hotels/:id' element={<Hotel/>}/>

    </Routes>
    </>
  )
}

export default Router