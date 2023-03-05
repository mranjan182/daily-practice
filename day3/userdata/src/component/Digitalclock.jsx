import React, { useState } from 'react'

const Digitalclock = () => {
    let time=new Date().toLocaleTimeString()
    const [ctime,setCtime]=useState(time)
    const updatetime=()=>{
        setCtime(time)
    }
    setInterval(updatetime,1000)
  return (
    <>
    <h1>{time}</h1>

    </>
  )
}

export default Digitalclock