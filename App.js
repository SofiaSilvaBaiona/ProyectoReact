import React from 'react';
import './App.css';
import logo from './logo.svg';
import RecipesComponent from './Api1';
import PaginaInicio from './paginas/PaginaInicio';
import PaginaContacto from './paginas/PaginaContacto';
import PaginaFrutas from './paginas/PaginaFrutas';
import PaginaVerduras from './paginas/PaguinaVerduras';
import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import Menu from './componentes/menu';


function App(){
  return (
    <> 
      <Router> 
        <Menu />
        <div className="container">
          <Routes>
            <Route path="/" element={<PaginaInicio/>}/>
            <Route path="/Contacto" element={<PaginaContacto/>}/>
            <Route path="/Frutas" element={<PaginaFrutas/>}/>
            <Route path="/Verduras" element={<PaginaVerduras/>}/>
          </Routes>
        </div>
      </Router>
    </>
    
  );
}

export default App;
