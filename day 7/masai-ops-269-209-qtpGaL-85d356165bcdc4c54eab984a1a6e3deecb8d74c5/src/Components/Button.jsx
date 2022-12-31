// enter code here
// button should have mentioned styling
// do a default export
import React from 'react'
const styles={
    backgroundColor:"tomato",
    padding:"1rem"
}
const Button = () => {
   
  return (
    <div>
        <button style={styles}>click me</button>
    </div>
  )
}

export default Button