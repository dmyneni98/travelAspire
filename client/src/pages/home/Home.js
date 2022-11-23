import "./home.css"
import React from "react"
import Header from "../../components/header/Header"
import FlightType from "../../components/flightType/FlightType"
import FlightSearchBar from "../../components/flightSearchBar/FlightSearchBar"

function Home(){
    return(
        <div >
            <Header/>
            
            <FlightType/>
            <FlightSearchBar/>
        </div>
        
    )
}

export default Home