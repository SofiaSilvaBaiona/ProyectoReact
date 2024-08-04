import React from "react";
import './menu.css';
import { Link } from "react-router-dom";

export default class Menu extends React.Component{
  render(){

    return(
  
      <div className="row">
        <div className="col-12 d-flex align-items-center fixed-top bg-light ">
         <h1>NutriLife</h1>
         <Link to="/" className="mx-3 text-dark">Inicio</Link>
         <Link to="/Frutas" className="mx-3 text-dark">Frutas</Link>
         <Link to="/Verduras" className="mx-3 text-dark">Verduras</Link>
         <Link to="/Contacto" className="mx-3 text-dark">Contacto</Link>


        </div>


        
      </div>
    )
  }
}
