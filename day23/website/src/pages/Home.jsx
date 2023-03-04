import React from 'react'
import Emaillist from '../component/Emaillist'
import Featured from '../component/Featured'
import Footer from '../component/Footer'
import Guest from '../component/Guest'
import Header from '../component/Header'
import Navbar from '../component/Navbar'
import Propertylist from '../component/Propertylist'
import './Home.css'
const Home = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <div className="homecontainer">
      <Featured/>
      <h1 className='hometitle'>Browse by property type</h1>
      <Propertylist/>
      <h1 className='hometitle'>Home guests love</h1>
      <Guest/>
      <Emaillist/>
      <Footer/>
    </div>
    </>
  )
}

export default Home