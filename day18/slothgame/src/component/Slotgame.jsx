import React from "react";

export const Slotgame = ({x,y,z}) => {
  

  if (x === y && y === z) {
    return (
      <div>
        <h1>
          {x} {y} {z}
        </h1>
        <h1>This is matching</h1>
        <hr />
      </div>
    );
  } else {
    return (
      <div>
        <h1>
          {x} {y} {z}
        </h1>
        <h1>This is not matching</h1>
        <hr />
      </div>
    );
  }
};
