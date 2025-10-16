import React, { Component } from 'react'

export default class TablaMultiplicarv2 extends Component {
    selectNumeros = React.createRef()
    state = {
        resultados: [],
    }
    generarAleatorios(){
        let aleatoriosAUX = []
        for (let i = 0; i < 10; i++) {
            aleatoriosAUX.push(parseInt(Math.random() * 100 + 1));
        }
        return aleatoriosAUX;
    }
    // Tambien se puede usar componentDidMount() => {} para ejecutar una funcion
    componentDidMount = () => {
        // esta funcion se ejecuta cuando carga el componente
        console.log("Componente cargado")
    }

    aleatorios = this.generarAleatorios();
    generarTabla = (event) => {
        event.preventDefault();
        let aux = []
        for(let i = 1;i <= 10; i++){
            aux.push(parseInt(this.selectNumeros.current.value) * i)
        }
        this.setState({
            resultados: aux
        })
    }
  render() {
    return (
      <div>
        <h1>Tabla Multiplicar v2</h1>
        <form onSubmit={this.generarTabla}>
            <label>Introduzca un numero</label>
            <select ref={this.selectNumeros}>
                {
                    this.aleatorios.map((numal,index)=>{
                        return(
                            <option key={index} value={numal}>{numal}</option>
                        )
                    })
                }
            </select>
            <button type="submit">Generar Tabla</button>
        </form>
        <table border="1">
            <tbody>
                {this.state.resultados.map((num,index)=>{
                    return(
                        <tr key={index}>
                            <td>{this.selectNumeros.current.value} * {index + 1}</td>
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
