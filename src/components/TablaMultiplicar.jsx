import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    cajanumero = React.createRef();
    state = {
        resultados:[]
    }
    generarTabla = (event) => {
        event.preventDefault();
        let aux = []
        for(let i = 1;i <= 10; i++){
            aux.push(parseInt(this.cajanumero.current.value) * i)
        }
        this.setState({
            resultados: aux
        })
    }
  render() {
    return (
      <div>
        <h1>Tabla Multiplicar</h1>
        <form onSubmit={this.generarTabla}>
            <label htmlFor="">Introduzca un numero</label>
            <input type="text" ref={this.cajanumero}/>
            <button type="submit">Generar Tabla</button>
        </form>
        <table border="1">
            <tbody>
                {this.state.resultados.map((num,index)=>{
                    return(
                        <tr>
                            <td>{this.cajanumero.current.value} * {index + 1}</td>
                            <td>{num}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
      </div>
    )
  }
}
