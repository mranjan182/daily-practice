import React from "react";
import "./Goal.css";
export const Goal = ({ goalText }) => {
  return (
    <>
      <h1 className="head">Course Goals</h1>
      <ul className="listItem">
        {goalText.map((goal) => {
          return <li key={goal.id}>{goal.text}</li>;
        })}
      </ul>
    </>
  );
};
