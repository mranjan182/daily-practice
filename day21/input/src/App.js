
import './App.css';
import React, { useState } from "react"

function App() {
  const [name,setName]=useState("")
  const [fullname,setFullname]=useState()
  const showName=(event)=>{
setName(event.target.value)
  }
  const submitname=()=>{
setFullname(name)
  }
  return (
    <div className="App">
      <h1 style={{color:"purple"}}>Hello {fullname}</h1>
     <div>
      <input onChange={showName} value={name} type='text' placeholder="enter your name"/>
     </div>
     <button onClick={submitname}>Click me 👍</button>
    </div>
  );
}

export default App;
