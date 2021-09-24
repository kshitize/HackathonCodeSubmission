import React, { useState } from "react";
import { Navlink, useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Paxpage from "./Paxpage";

export var paxEmailtest = "";

const Search = () => {
  const history = useHistory();

  const [passenger, setPassenger] = useState({
    email: ""
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setPassenger({ ...passenger, [name]: value });
  };

  const Postdata = async (e) => {
    e.preventDefault();
    const { email } = passenger;
    const res = await fetch("/paxlogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email
      }),
    });

    const data = await res.json();
    console.log("This is data= " + data);

    if (data === "Pax not in DB" || !data) {
      window.alert("Pax Not in DB");
      console.log("Pax not in DB");
    } else {
      console.log("Pax details found in DB");
      paxEmailtest = email;
      history.push("/paxpage");
    }
  };
  return (
    <>
      <form method="POST" className="loginformgroup">
        {/* Enter Email */}
        <div className="form-floating mb-3 ms-1">
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
          <label htmlFor="floatingInput">Enter Pax Email to Search</label>
        </div>

        <button
          type="button"
          name="submit"
          onClick={Postdata}
          className="btn btn-primary my-3 ms-1"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Search;
