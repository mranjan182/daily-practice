//enter code here
// Avatar should accept caption and image  as props
// do default export
import React from 'react'

const Avatar = ({caption,image}) => {
    const styles={
        borderRadius:"50%"
    }
  return (
    <div>
        <h2>{caption}</h2>
        <img style={styles} src={image} alt={caption} />
    </div>
  )
}

export default Avatar