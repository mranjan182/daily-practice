import React from 'react'
import "./todo.css"
const Backdrop = (props) => {
  return (
    <>
     <div className='backdrop' onClick={props.onCancel}/>
    </>
  )
}

export default Backdrop