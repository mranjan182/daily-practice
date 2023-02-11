import React, { useReducer } from 'react'

const initialstate=5;
const reducer=(state,action)=>{
    if(action.type==="Increment"){
        return state+1
    } else if(action.type==="Decrement"){
return state-1;
    }
return state;
}

const Incdec = () => {
    const [state,dispatch]=useReducer(reducer,initialstate)
  return (
    <>
 <h1>{state}</h1>
    <button onClick={()=>dispatch({type:"Increment"})}>Increment</button>
    <button onClick={()=>dispatch({type:"Decrement"})} >Decrement</button>
    </>
  )
}

export default Incdec