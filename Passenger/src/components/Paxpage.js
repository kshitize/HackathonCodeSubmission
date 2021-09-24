import React, { Component, useEffect, useState } from "react";
import { Login, paxEmailtest } from "./Login";

const Paxpage = () => {
    

  const[paxdata,setpaxdata]=useState({
    name:"",
    email:"",
    phone:"",
    discounttype:"",
    expiryofcoupon:"",
    nextdateofjourney:"",
    uniquekey:"",
  });
  const [passenger, setPassenger] = useState({
    email:paxEmailtest,
    test:"",
  });

  const callPaxinfo = async (e) => {
    console.log("in call func");
    //e.preventDefault();
    
    const { email, test } = passenger;
    const res = await fetch("/getpaxinfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        test,
      }),
    });

    const data = await res.json();
    setpaxdata(data);
    // const{name,emailthis,phone,discounttype,expiryofcoupon,nextdateofjourney,uniquekey}=data;
    // console.log("This is name= " + name);
    // console.log("This is email= " + email);
    // console.log("This is phone= " + phone);
    // console.log("This is discounttype= " + discounttype);
    // console.log("This is expiryofcoupon= " + expiryofcoupon);
    // console.log("This is nextdateofjourney= " + nextdateofjourney);
    // console.log("This is uniquekey= " + uniquekey);
    
  };


  useEffect(() => {
    console.log("in use effect")
    callPaxinfo();
  }, []);
  return (
    <>
        <h1>Discount for Passenger</h1>
        <div className="input-group flex-nowrap my-3 ms-1">
          <span className="input-group-text" id="addon-wrapping">
            Name
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            name="expiryofcoupon"
            value={paxdata.name}
            disabled="true"
          />
        </div>


        <div className="input-group flex-nowrap my-3 ms-1">
          <span className="input-group-text" id="addon-wrapping">
            Email
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            name="expiryofcoupon"
            value={paxdata.email}
            disabled="true"
          />
        </div>


        <div className="input-group flex-nowrap my-3 ms-1">
          <span className="input-group-text" id="addon-wrapping">
            Phone
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            name="expiryofcoupon"
            value={paxdata.phone}
            disabled="true"
          />
        </div>

        <div className="input-group flex-nowrap my-3 ms-1">
          <span className="input-group-text" id="addon-wrapping">
            Discount Type
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            name="expiryofcoupon"
            value={paxdata.discounttype}
            disabled="true"
          />
        </div>
        <div className="input-group flex-nowrap my-3 ms-1">
          <span className="input-group-text" id="addon-wrapping">
          Expiry of Coupon
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            name="expiryofcoupon"
            value={paxdata.expiryofcoupon}
            disabled="true"
          />
        </div>
        <div className="input-group flex-nowrap my-3 ms-1">
          <span className="input-group-text" id="addon-wrapping">
          Next date of journey
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            name="expiryofcoupon"
            value={paxdata.nextdateofjourney}
            disabled="true"
          />
        </div>
        <div className="input-group flex-nowrap my-3 ms-1">
          <span className="input-group-text" id="addon-wrapping">
          Unique Key
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            name="expiryofcoupon"
            value={paxdata.uniquekey}
            disabled="true"
          />
        </div>
        
        
    </>
  );
};

export default Paxpage;
