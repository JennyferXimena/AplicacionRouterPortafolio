import React from "react";
import Menu from "./components/Menu";
import Inicio from "./components/Inicio";
import Nosotros from "./components/Nosotros";
import Proyectos from "./components/Proyectos";
import Experto from "./components/Experto";
import Contactame from "./components/Contactame";
import './App.css';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/inicio" element={<Inicio />} />
      <Route path="/nosotros" element={<Nosotros />} />
      <Route path="/proyectos" element={<Proyectos />} />
      <Route path="/experto" element={<Experto />} />
      <Route path="/contactame" element={<Contactame />} />
    </Routes>
  );
}
export default App;



/*
SIN E ROUTES 
    <div>
      <Menu/>
      <Inicio/>
      <Nosotros/>
      <Proyectos/>
      <Experto/>
      <Contactame/>
    </div>
*/

