import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import FlightList from "./pages/flights/FlightList";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/flightList" element={<FlightList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
