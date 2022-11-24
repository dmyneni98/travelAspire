import "./navbar.css"

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="navContainer">
           <span className="logo">Trip Aspire</span> 
        <div className="navItems">
            <button className="navButton">Login</button>
            <button className="navButton">Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;