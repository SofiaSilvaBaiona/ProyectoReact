import React from "react";
import Recetas from "../componentes/Recetas";

export default class Recetas extends React.Component {
    constructor (props){
        super(props);
        this.state ={
            recetas: []
        }
    }

  render() {
    return (

     <>
        {this.state.recetas.map((receta) => (
         receta 
        ))}
     </>
    );
  }
}