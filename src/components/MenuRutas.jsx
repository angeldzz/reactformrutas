import React, { Component } from 'react'
import './MenuRutas.css'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
      <nav className="navbar">
        <ul className="nav-list">
        <li className="nav-item"><a href='/' className="nav-link">HOME</a></li>
        <li className="nav-item"><a href='/cine' className="nav-link">CINE</a></li>
        <li className="nav-item"><a href='/musica' className="nav-link">MUSICA</a></li>
        <li className="nav-item"><a href='/formsimple' className="nav-link">Formulario</a></li>
        <li className="nav-item"><a href='/collatz' className="nav-link">Collatz</a></li>
        <li className="nav-item"><a href='/multiplicar' className="nav-link">Tabla Multiplicar</a></li>
        <li className="nav-item"><a href='/multiplicarv2' className="nav-link">Tabla Multiplicar v2</a></li>
        <li className="nav-item"><a href='/seleccionMultiple' className="nav-link">Seleccion Multiple</a></li>
        </ul>
      </nav>
      </div>
    )
  }
}
