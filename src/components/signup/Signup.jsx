import React from "react";
import "../login/LoginInfo.css"
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Signup = () =>{


  const [info, setInfo] = useState({});
  
  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const navigate = useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    
    try {
      const newUser = {
        ...info,
        
      };

      await axios.post("http://localhost:8800/auth/register", newUser);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="loginContainer">
      <div className="loginWrapper">
         <form className="loginform" onSubmit={handleClick}>
          <div className="loginTitle">Sign in</div>
          <div>
          <input className="loginInput" type="email" placeholder="" onChange={handleChange} id="email" name="email"/>
          <input className="loginInput" type="password" placeholder="" onChange={handleChange} id="password" name="password"/>
          <input className="loginInput" type="text" placeholder="First Name" onChange={handleChange} id="firstname" name="firstname"/> 
          <input className="loginInput" type="text" placeholder="Middle Name" onChange={handleChange} id="middlename" name="middlename"/>
          <input className="loginInput" type="text" placeholder="Last Name" onChange={handleChange} id="lastname" name="lastname"/>
          <input className="loginInput" type="text" placeholder="Address 1" onChange={handleChange} id="address1" name="address1"/>
          <input className="loginInput" type="text" placeholder="Address 2" onChange={handleChange} id="address2" name="address2"/>
          <input className="loginInput" type="text" placeholder="City" onChange={handleChange} id="city" name="city"/>
          <input className="loginInput" type="text" placeholder="State" onChange={handleChange} id="state" name=""/>
          <input className="loginInput" type="text" placeholder="Zip Code" onChange={handleChange} id="zipcode" name=""/>
          <input className="loginInput" type="text" placeholder="Credit Card Number" onChange={handleChange} id="creditcardnum" name="creditcardnum"/>
          <input className="loginInput" type="text" placeholder="Name on the Card" onChange={handleChange} id="creditname" name="creditname"/>
          <input className="loginInput" type="text" placeholder="Expiration Date" onChange={handleChange} id="creditexpdate" name="creditexpdate"/>
          <input className="loginInput" type="text" placeholder="CVV" onChange={handleChange} id="creditcvv" name="creditcvv"/>
          

          </div>
          <button className="loginButton" type="submit">Login</button>
      </form>
      </div>
    </div>
  );
};
export default Signup;