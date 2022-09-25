import {FC} from "react"; 
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import Home from "./pages/home";
import Drivers from "./pages/drivers";

const App : FC = () => {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/drivers" element={<Drivers/>} />
      </Routes>
    </Router>
  )
}

export default App
