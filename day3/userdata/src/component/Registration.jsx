import React, { useState } from "react";

const Registration = () => {
  const [userinput, setuserinput] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const [record,setRecord]=useState([])

  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name);
    // console.log(value);
    setuserinput({...userinput,[name]:value})
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    const newrecord={...userinput,id:Math.random().toString()}
    setRecord([...record,newrecord])
  };
  console.log(record)
// console.log(userinput)
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div>
          <label>User Name</label>
          <input
            type="text"
            name="username"
            value={userinput.username}
            onChange={handlechange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={userinput.email}
            onChange={handlechange}
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            type="number"
            name="phone"
            value={userinput.phone}
            onChange={handlechange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={userinput.password}
            onChange={handlechange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
