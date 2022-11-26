import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginInfo.css"

export const LoginInfo = ()=>{
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick = async (e) => {
    e.preventDefault();
    //dispatch({ type: "LOGIN_START" });
    console.log(credentials)
    try {
      const res = await axios.post("http://localhost:8800/auth/login", credentials);
      //dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      //console.log(res.data.details.firstname)
      localStorage.setItem("user", res.data.details.firstname);
      
      navigate("/");
      
    } catch (err) {
        console.log("Unable to authnticate")
      //dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };


  return (
    <div className="loginContainer">
      <div className="loginWrapper">
         <form className="loginform" >
          <div className="loginTitle">Sign in</div>
          <input className="loginInput" type="email" placeholder="Email" id="email" name="email" onChange={handleChange}/>
          <input className="loginInput"type="password" placeholder="Password" id="password" name="password" onChange={handleChange}/>
          <button className="loginButton" type="button" onClick={handleClick}>Login</button>
      </form>
      </div>
    </div>

  );

  
}

export default LoginInfo;