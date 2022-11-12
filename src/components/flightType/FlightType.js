import "./flightType.css"


function FlightType(){
    return (
        <div class="tripTypeSelect">
            <div class="tripTypeContainer">
                <div class="tripType">
                    <input classname="option" type="radio" name="tripType" value = "roundTrip"  />
                    <div className="optionText">Round-trip</div>  
                </div>
                <div class="tripType">
                    <input classname="option" type="radio" name="tripType" value = "oneTrip" />
                    <div className="optionText">One-trip</div>  
                </div>
            </div>
            
        </div>

    )
}

export default FlightType