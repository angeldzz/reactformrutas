import React, { Component } from 'react'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <li>
            <ul><a href='/'>HOME</a></ul>
            <ul><a href='/cine'>CINE</a></ul>
            <ul><a href='/musica'>MUSICA</a>
            </ul>
        </li>
      </div>
    )
  }
}
