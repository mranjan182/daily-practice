import logo from './logo.svg';
import './App.css';
import { Goal } from './component/Goal/Goal';
import { NewGoal } from './component/NewGoal/NewGoal';
import { useState } from 'react';

function App() {
  const [goalList,setGoalList]=useState([
    {id:"1",text:"Finish the Course"},
    {id:"2",text:"Learn all about the Course Main Topic"},
    {id:"3",text:"Help other students in the Course Q&A"}
  ])
  const newAddGoal=(newGoal)=>{
// setGoalList(goalList.concat(newGoal))
setGoalList((prevgoal)=> prevgoal.concat(newGoal)
)
console.log(goalList)
  }
  return (
    <>
     <NewGoal onAddGoal={newAddGoal} />
     <Goal goalText={goalList}/>
    </>
  
  );
}

export default App;
