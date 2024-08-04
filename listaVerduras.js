import React from "react";
import Nutri from "./Nutri";

export default class listaVerduras extends React.Component{
    constructor (props){
        super (props)
    }
    render (){
        return (
          <>
            {this.props.Nutri.map((Verdura) => (
              <Nutri nombre={Verdura.nombre} img= {Verdura.img} descripcion={Verdura.descripcion} beneficios={Verdura.beneficios}/>
            ))}
          </>
        );
      }
    }