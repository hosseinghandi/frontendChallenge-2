import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
//pages
import Crew from "./pages/crew.jsx";
import Destination from "./pages/Destination.jsx";
import Technology from "./pages/Technology.jsx";

//components
import Header from './components/header.jsx';


function App() {

  return (
    <>
    <Header/>
    
      <Routes>
        <Route path="/crew.jsx" element={<Crew />} />
        <Route path="/Destination.jsx" element={<Destination />} />
        <Route path="/Technology.jsx" element={<Technology />} />
      </Routes>
    
    </>
  );
}


export default App
