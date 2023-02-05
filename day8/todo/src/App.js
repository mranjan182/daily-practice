
import { useState } from 'react';
import './App.css';
import CreateNote from './component/CreateNote';
import Footer from './component/Footer';
import Header from './component/Header';
import Note from './component/Note';

function App() {
  const [finaldata,setFinaldata]=useState([])

  const retrievedata=(data)=>{
   setFinaldata((olddata)=>{
   return [...olddata,data]
   }) 

  }
  const itemdelete=(id)=>{
   setFinaldata((currdata)=>{
    currdata.filter((curr,ind)=>{
      return id!==ind
    })
   })
    }
   console.log(finaldata)
  
  return (
    <div className="App">
     <Header/>
     <CreateNote getdata={retrievedata}/>
     {finaldata.map((data,index)=>{
     return <Note 
     key={index}
     id={index}
     title={data.title}
     text={data.text}
     style={{backgroundColor:"yellow"}}
     deleted={itemdelete}
     />
     })}

     
     <Footer/>
    </div>
  );
}

export default App;
