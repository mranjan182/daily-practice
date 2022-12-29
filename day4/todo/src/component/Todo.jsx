
import React, { useState } from 'react'
import Backdrop from './Backdrop'
import Modal from './Modal'

import "./todo.css"

const Todo = (props) => {
    const [isState,setIsState]=useState(false)
    const changehandler=()=>{
setIsState(true)
    }
    const changetofalse=()=>{
        setIsState(false)
    }
  return (
    <>
    <div className='todo'>
        <div>
            {props.text}
            <div>
                <button className='btn' onClick={changehandler}>delete</button>
            </div>
        </div>
    </div>
    {isState&&<Modal onCancel={changetofalse} onDelete={changetofalse}/>}
    {isState&&<Backdrop onCancel={changetofalse}/>}
    </>
  )
  
}

export default Todo