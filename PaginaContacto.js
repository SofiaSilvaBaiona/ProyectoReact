import React from "react";


 export default class PaginaContacto extends React.Component{

  constructor (props){
    super(props);
    this.state= {
      nombre:'',
      Mensaje:''
    }
    this.submitted = this.submitted.bind(this);
    this.Changed = this.Changed.bind(this);
  }
  submitted (event){
    alert("Se envio correctamente: "  + this.state.nombre);
    event.preventDefault();
  }
  Changed (event) {
    this.setState ({
      nombre: event.target.value
    })
  }
  render(){
    return (
      <>
        <div className="container pp"> 
          <form onSubmit={this.submitted}>                   
           <p className="my-5 text-center"> <h1>Contacto</h1><h6>¡Bienvenido a nuestra sección de contacto!</h6>
           Agradecemos tu interés en contribuir con información sobre frutas y verduras. Completa el formulario con la información que tengas y la revisaremos para agregarla a nuestro sitio. 
           <h6>¡Gracias por ayudarnos a promover una alimentación saludable!</h6></p>

           <div className="form-group my-2  ">
            <label>Nombre de Fruta o Verdura</label>
            <input type="text" className="form-control" onChange={this.Changed}/>
           </div>
           <div className="form-group my-2 ">
            <label>Descripcion</label>
            <input type="text" className="form-control"/>
           </div>
           <div className="form-group my-2">
            <label>Beneficios</label>
            <input type="text" className="form-control "/>
           </div>
           <button type="submit" className="btn btn-primary mt-2 pp">Enviar</button>
          </form>
        </div>
      </>
    
    )
  }

}