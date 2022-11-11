import "./flightType.css"


function FlightType(){
    return (
        <div class="tripTypeSelect">
            <div class="tripTypeContainer">
                <div class="tripType">
                    <input classname="option" type="radio"  />
                    <div>Round-trip</div>  
                </div>
                <div class="tripType">
                    <input classname="option" type="radio"  />
                    <div>One-trip</div>  
                </div>
            </div>
            
        </div>

    )
}

export default FlightType