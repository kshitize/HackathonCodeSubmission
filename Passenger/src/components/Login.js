import React, { useState } from "react";
import { Navlink, useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from "./Navbar";
import Paxpage from "./Paxpage";

export var paxEmailtest = "";


const Login = () => {
  const history = useHistory();
    
  const [passenger, setPassenger] = useState({
    email: "",
    phone: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setPassenger({ ...passenger, [name]: value });
  };

  const Postdata = async (e) => {
    e.preventDefault();
    const { email, phone } = passenger;
    const res = await fetch("/paxlogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        phone,
      }),
    });

    const data = await res.json();
    console.log("This is data= " + data);

    if (data==="Pax not in DB" || !data) {
      window.alert("Invalid credentials");
      console.log("Login failed");
    } else {
      console.log("Login success");
      paxEmailtest=email;
      history.push('/paxpage');
    }
  };
  return (
    <>
    {/* if(!valid){} else{PAXpage} */}
      <form method="POST" className="loginformgroup">
      {/* Enter Email */}
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          value={passenger.email}
          onChange={handleInputs}
          name="email"
          autoComplete="off"
        />
        <label htmlFor="floatingInput">Email</label>
      </div>

      {/* Enter Phone No. */}
      <div className="form-floating mb-3">
        <input
          type="[password]"
          className="form-control"
          id="floatingInput"
          placeholder="password"
          value={passenger.phone}
          onChange={handleInputs}
          name="phone"
          autoComplete="off"
        />
        <label htmlFor="floatingInput">Phone No.</label>
      </div>

      <button
        type="button"
        name="submit"
        onClick={Postdata}
        className="btn btn-primary my-3"
      >
        Submit
      </button>
    </form>
    
      {/* <Paxpage paxEmail={passenger.email} /> */}
      
    </>
  );
};

export default Login;
