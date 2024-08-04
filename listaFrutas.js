import React from "react";
import Nutri from "./Nutri";

export default class listaFrutas extends React.Component{
    constructor (props){
        super (props)
    }
    render (){
        return (
          <>
            {this.props.Nutri.map((fruta) => (
              <Nutri nombre={fruta.nombre} img= {fruta.img} descripcion={fruta.descripcion} beneficios={fruta.beneficios}/>
            ))}
          </>
        );
      }
    }