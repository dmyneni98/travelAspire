import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/home/Home";
import FlightList from "./pages/flights/FlightList";
import Feedback from "./pages/Feedback/Feedback";
import Login from "./pages/login/Login"
import Signme from "./pages/signup/Signup";
import DealList from "./pages/deals/Deals"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/flightList" element={<FlightList />} />
        <Route path="/feedback" element={<Feedback/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signme/>} />
        <Route path="/deals" element={<DealList/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
