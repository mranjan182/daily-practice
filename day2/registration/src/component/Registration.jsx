import React from "react";
import { useState } from "react";
import "./Registration.css";
const Registration = () => {
  const [userinput, setUserinput] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const [record, setRecord] = useState([]);
  const handlesubmit = (e) => {
    e.preventDefault();
    const newrecord = {
      ...userinput,
      id: Math.random().toString(),
    };
    setRecord([...record, newrecord]);
    setUserinput({ username: "", email: "", phone: "", password: "" });
  };
  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(e.target.name)
    setUserinput({ ...userinput, [name]: value });
  };

  console.log(record);

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div>
          <label>Full Name</label>
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
          <label>Phone Number</label>
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
      <div>
        {record.map((e) => {
          return (
            <div key={e.id} className="output">
              <div>
                <p>name:{e.username}</p>
              </div>
              <div>
                {" "}
                <p>email:{e.email}</p>
              </div>
              <div>
                {" "}
                <p>phone:{e.phone}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Registration;
