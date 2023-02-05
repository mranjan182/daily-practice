import React from "react";
import "./Note.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
const Note = ({ id, title, text,deleted }) => {
  const deleteitem=()=>{
   
deleted(id)
alert('deleted')
  }
  return (
    
      <div className="head">
        <h3>{title}</h3>
        <p>{text}</p>
        <button onClick={deleteitem}>
          <DeleteOutlineIcon style={{ width: "45px", height: "35px" }} />
        </button>
      </div>
    
  );
};

export default Note;
