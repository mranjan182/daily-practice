import React, { useState } from 'react'
import "./CreateNote.css"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CreateNote = (props) => {
  const [data,setData]=useState({
    title:"",
    text:""
  })
const addEvent=(event)=>{
  
     const {name,value}=event.target;
    setData((prevdata)=>{
      return {
      ...prevdata,[name]:value,
      };
    });
};
const adddata=()=>{
props.getdata(data)
setData({ title:"",
text:""})
}

  return (
    <div className='create'>
        <input type="text" placeholder='Title' value={data.title} name="title" onChange={addEvent}/>
        <textarea   cols="30" rows="5" value={data.text} onChange={addEvent} name='text' placeholder='Write a note...'></textarea>
        <button onClick={adddata}>
          <AddCircleOutlineIcon style={{position:"absolute",margin:"40px -180px", width:"35px",height:"35px",color:"#f0b31d",borderRadius:"50%" }}/>
        </button>

    </div>
  )
}

export default CreateNote