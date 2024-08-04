import React from "react";
import Nutri from '../componentes/Nutri';
export default class PaginaInicio extends React.Component{
  render(){
    return(

      <>
        <div className="row">
          <div className="col-12 text-center pp my-5 p-5">
            <img  src="/img/logo3.jpg" alt="Nutrilife Logo" width={"1400px"} height={"500px"} className="col-12"/>
            <h5 className="m-4">¿Conoces algúna fruta o verdura que no esté en nuestro sitio y crees que deberíamos agregar?<h5>¡Nos encantaría conocerla!</h5></h5>
            <button className="pp" onClick={() => window.location.href = "/contacto"}><h6>Contáctanos</h6></button>
     
          </div>
        </div>

        
      </>
    )
  }

}