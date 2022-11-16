import "./flightInfo.css"

function FlightInfo(){
    return (
        <div className="flightInfoBox">
            <div className="flightTimeBox">
                <ul>
                    <li className="flightInfoContainer">
                        <div className="flightText">
                            Date and Time
                        </div>
                        <div className="airport">
                            Depart Airport
                        </div>

                    </li>
                    <li className="flightTime">
                        <div className="flightText">
                             Date and Time
                        </div>
                        <div className="airport">
                           Depart Airport
                        </div>   
                    </li>
                </ul>
            </div>
            <div className="airline">
                <div className="airlineContainer">
                    <div className="flightText">
                        airline companey
                    </div>
                    <div className="flightText">
                        flight No.
                    </div>
                    <div className="flightText">
                        flight duration
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FlightInfo