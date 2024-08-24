import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import About from "../Components/About";

export default function AllRoutes() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/about" Component={About}/>
      </Routes>
      </BrowserRouter>
  )
  
}