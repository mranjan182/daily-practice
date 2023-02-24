import React from 'react'
import Featured from '../component/Featured'
import Header from '../component/Header'
import Navbar from '../component/Navbar'
import './Home.css'
const Home = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <div className="homecontainer">
      <Featured/>
      
      
    </div>
    </>
  )
}

export default Home