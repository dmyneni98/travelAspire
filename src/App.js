import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useState,useContext } from "react";
import { userInputs } from "./formSource";
import Home from "./pages/home/Home";
import FlightList from "./pages/flights/FlightList";
import Feedback from "./pages/Feedback/Feedback";
import Login from "./pages/login/Login"
import Signme from "./pages/signup/Signup";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/flightList" element={<FlightList />} />
        <Route path="/feedback" element={<Feedback/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signme/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
