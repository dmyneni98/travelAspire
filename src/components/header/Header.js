import {
    faPlane,
    faBed,
    faGlobe,
    faPerson,
    faMessage,
    faPiggyBank    
} 
from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../navbar/Navbar";
import "./header.css";


  
 function Header(){
    return (
        <div>
          <Navbar/>
          <div className="header">
            <div class="headerContainer">
              <div className="headerList">
                <div className="headerListItem active">
                  <FontAwesomeIcon icon={faPlane} />
                  <span>Flights</span>
                </div>
                <div className="headerListItem">
                  <FontAwesomeIcon icon={faBed} />
                  <span>Hotels</span>
                </div>
                <div className="headerListItem">
                  <FontAwesomeIcon icon={faGlobe} />
                  <span>Flight+Hotel</span>
                </div>
                <div className="headerListItem">
                  <FontAwesomeIcon icon={faPiggyBank} />
                  <span>Find deals</span>
                </div>
                <div className="headerListItem">
                  <FontAwesomeIcon icon={faMessage} />
                  <span>Feedback</span>
                </div>
              </div>
              <div class="headerTitle">
                  <h3 className=" ">Give the winter season a warm welcome with 20% off</h3>
                  <h4 className="headerDesc">when bundling Hotel + Flight</h4>
              </div>
              
            </div>
        </div>
        </div>
      );

 }
export default Header;
  