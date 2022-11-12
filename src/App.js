import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import FlightList from "./pages/flights/FlightList";
import Feedback from "./pages/Feedback/Feedback";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/flightList" element={<FlightList />} />
        <Route path="/feedback" element={<Feedback/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
