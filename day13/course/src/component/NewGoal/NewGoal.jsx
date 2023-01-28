import React, { useState } from "react";
import "./NewGoal.css";
export const NewGoal = (props) => {
  const [enteredText, setEnteredText] = useState("");
  const inputhandler=(event)=>{
setEnteredText(event.target.value)
  }
  
  const formhandler = (event) => {
    event.preventDefault();
    const newGoal = {
      id: Math.random().toString(),
      text: enteredText,
    };
    setEnteredText('')
    props.onAddGoal(newGoal);
  };
 
  return (
    <>
      <form className="form" onSubmit={formhandler}>
        <input type="text" value={enteredText} onChange={inputhandler} />
        <input type="submit" />
      </form>
    </>
  );
};
