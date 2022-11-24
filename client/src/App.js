import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import HotelSearchBar from "./pages/hotelSearchBar/HotelSearchBar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/hotellist" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/> 
        <Route path="/searchhotel" element={<HotelSearchBar/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
