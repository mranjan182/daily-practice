import React from 'react'
import "./Header.css"
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
const Header = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            <div className='photo' >
               <AirplanemodeActiveIcon style={{backgroundColor:'purple' ,color:"white",width:"100%",height:"100%"}}/>
            </div>
            <div className='text' >
                <h1>Todo App</h1>
            </div>

        </div>
    </div>
  )
}

export default Header