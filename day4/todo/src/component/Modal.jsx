import React from 'react'
import "./todo.css"
const Modal = (props) => {
  return (
    <div style={{border:"1px solid green",width:"20rem",margin:"5rem 35rem",height:"10rem",zIndex:"10",position:"absolute"}}>
        <p style={{textAlign:"center"}}>Are you sure?</p>
        <div style={{display:"flex",justifyContent:"flex-end",marginTop:"5rem"}}>
            <div style={{margin:"0.5rem"}}>
                  <button onClick={props.onCancel} style={{ border: "1px solid red",borderRadius:"0.1rem",backgroundColor:"gray"}}>
                  cancel</button>
            </div>
            <div style={{margin:"0.5rem"}}>
                <button onClick={props.onDelete} style={{ border: "1px solid red",borderRadius:"0.1rem",backgroundColor:"gray"}}>Delete</button></div>
           </div>
     </div>
  )
}

export default Modal