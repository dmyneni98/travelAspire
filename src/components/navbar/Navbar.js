import "./navbar.css"
import { Link } from "react-router-dom";


function Navbar () {

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" className="link">
          <span className="logo">Trip Aspire</span>
        </Link>
        <div className="navItems">
          <span>{localStorage.getItem("user")}</span>
          <Link to="/login">
            <button className="navButton">Login</button>
            </Link>
            
            <Link to="/signup">
            <button className="navButton">Sign Up</button>
            </Link>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
