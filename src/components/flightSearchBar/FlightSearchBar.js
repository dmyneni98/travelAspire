import {
    faCalendar,
    faPerson,
    faPlane,
} 
from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./flightSearchBar.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";




function FlightSearchBar(){
    const [startDate, setStartDate] = useState(new Date());
    const [returnDate, setReturntDate] = useState(new Date());

    const [openNumber, setOpenNumber] = useState(false);
    const [number, setNumber] = useState({
        passenger:1,
    });
    const handleNumber =(name, operation)=>{
        setNumber((prev) => {
            return{
            ...prev,
             [name] : operation === "i" ? number[name] + 1: number[name] - 1,
             };
         });
    };

    return(
        <div class="container">
            <div class="flightSearch">
            <div class="flightSearchItem">
                <FontAwesomeIcon icon={faPlane} className="searchIcon" />   
                <input type="text" placeholder="Where from?" className="searchInput"/>
            </div>
            <div class="flightSearchItem">
                <FontAwesomeIcon icon={faPlane} className="searchIcon" />   
                <input type="text" placeholder="Where to?" className="searchInput"/>
            </div>
            <div class="flightSearchItem">
                <FontAwesomeIcon icon={faCalendar} className="searchIcon" />   
                <DatePicker 
                    selected={startDate} 
                    onChange={(date) => setStartDate(date)}
                    dateFormat="yyyy/MM/dd"
                    minDate={new Date()}
                    showYearDropdown
                    scrollableMonthYearDropdown
                    className="dateSytle"
                     />
            </div>
            <div class="flightSearchItem">
                <FontAwesomeIcon icon={faCalendar} className="searchIcon" />   
                <DatePicker 
                    selected={returnDate} 
                    onChange={(date) => setReturntDate(date)}
                    dateFormat="yyyy/MM/dd"
                    minDate={new Date()}
                    showYearDropdown
                    scrollableMonthYearDropdown
                    className="dateSytle"
                     />
            </div>
            <div className="flightSearchItem">
                <FontAwesomeIcon icon={faPerson} className="searchIcon" />
                
                <span
                  onClick={() => setOpenNumber(!openNumber)}
                  className="searchText"
                >{`${number.passenger} Passenger `}</span>
                {openNumber && (
                  <div className="options">
                    <div className="optionItem">
                     
                      <div className="optionCounter">
                        <button
                          disabled={number.passenger <= 1}
                          className="optionCounterButton"
                          onClick={() => handleNumber("passenger","d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {number.passenger}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleNumber("passenger","i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                  </div>
                )}
              </div>


            <div className="flightSearchItem">
                <button className="buttom">
                  Search
                </button>
              </div>
        </div>
        
    </div>


    )

}

export default FlightSearchBar