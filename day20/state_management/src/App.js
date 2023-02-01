
import './App.css';
import React from "react"
function App() {
  let currcolor='#A020F0'
  const [color,setColor]=React.useState(currcolor)
  const [name,setName]=React.useState('AYYO!!😠')
  const changecolor=()=>{
    currcolor="#FFFF00"
setColor(currcolor)
setName('Ouch!! 🦀')
  }
  return (
    <div className="App" style={{backgroundColor:color}}>
      <div className='button'>
        <button onClick={changecolor}>{name}</button>
      </div>
    </div>
  );
}

export default App;
