import React from 'react'
import './Emaillist.css'
const Emaillist = () => {
  return (
    <>
    <div className="container">
        <h3 className="emailtitle">
            Save time, save money!
        </h3>
        <span className='descp'>Sign up and we'll send the best deals to you</span>
        <div className="input">
            <input type="text" placeholder='Your email address'/>
            <button>Subscribe</button>
        </div>
    </div>
    </>
  )
}

export default Emaillist