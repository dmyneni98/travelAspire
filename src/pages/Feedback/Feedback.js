import "./feedback.css"
import React from "react"
import Header from "../../components/header/Header"
import FlightType from "../../components/flightType/FlightType"
import FlightSearchBar from "../../components/flightSearchBar/FlightSearchBar"
import FeedbackForm from "../../components/feedback/feedbackForm"


function Feedback(){
    return(
        <div >
            <Header/>
            <FeedbackForm/>


        </div>
        
    )
}

export default Feedback