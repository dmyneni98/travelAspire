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
            <button className="navButton">Login</button>
            <button className="navButton">Sign Up</button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
