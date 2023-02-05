import React, { useState } from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';
import "./Footer.css"

const Footer = () => {
    const year=new Date().getFullYear()
    
    
    
  return (
    <div className='footer'>
      <p style={{fontSize:"larger" ,fontWeight:"400"}}>copyright ©️ {year}</p>
    </div>
  )
}

export default Footer