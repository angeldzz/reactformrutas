import React, { Component } from 'react'
export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
            <li><a href='/'>HOME</a></li>
            <li><a href='/cine'>CINE</a></li>
            <li><a href='/musica'>MUSICA</a></li>
            <li><a href='/formsimple'>Formulario</a></li>
            <li><a href='/collatz'>Collatz</a></li>
            <li><a href='/multiplicar'>Tabla Multiplicar</a></li>
            <li><a href='/multiplicarv2'>Tabla Multiplicar v2</a></li>
        </ul>
      </div>
    )
  }
}
