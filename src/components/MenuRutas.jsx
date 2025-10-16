import React, { Component } from 'react'
export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <li>
            <ul><a href='/'>HOME</a></ul>
            <ul><a href='/cine'>CINE</a></ul>
            <ul><a href='/musica'>MUSICA</a></ul>
            <ul><a href='/formsimple'>Formulario</a></ul>
            <ul><a href='/collatz'>Collatz</a></ul>
            <ul><a href='/multiplicar'>Multiplicar</a></ul>
        </li>
      </div>
    )
  }
}
