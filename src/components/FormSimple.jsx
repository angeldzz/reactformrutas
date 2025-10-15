import React, { Component } from 'react'

export default class FormSimple extends Component {
    cajaNombre = React.createRef();

    peticionFormulario = (event) => {
        // hay que evitar que se envie el formulario como con turi
        event.preventDefault();
        console.log("Formulario Enviado");
        //RECUPERAR EL VALOR DE UN OBJETO REACT
        let nombre = this.cajaNombre.current.value;
        console.log("NOmbre recibido " + nombre);
    }
  render() {
    return (
      <div>
        <h1>Formulario simple React</h1>
        <form onSubmit={this.peticionFormulario}>
            <label>Nombre: </label>
            <input type="text" ref={this.cajaNombre} />
            <button type="submit">Enviar</button>
        </form>
      </div>
    )
  }
}
