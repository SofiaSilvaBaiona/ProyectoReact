import React from "react";
import "./nutrii.css";



export default class Nutri extends React.Component{
  constructor (props) {
    super (props);
    this.state= {
      escondido: false
    }
    this.toggleEsconder = this.toggleEsconder.bind (this);
  
  }
  toggleEsconder() {
    this.setState(prevState => ({
        escondido: !prevState.escondido
    }));
}
  render(){
    return(
      <div className={"row " + (this.state.escondido ? 'd-none' : '')}>
      <div className="col-12 d-flex align-items-center my-4">                  
          <img src={this.props.img} alt={this.props.nombre} className="tm"/>
          <div>
            <h4>{this.props.nombre}</h4>
            <p>{this.props.descripcion}</p>
            <p><h6>Beneficios:</h6>{this.props.beneficios}</p>
            <button className="btn btn-danger" onClick={this.toggleEsconder}>
            {this.state.escondido ? 'Mostrar' : 'Esconder'}
            </button>
            
            
          </div>
        </div>  
      </div>
    )
  }
}