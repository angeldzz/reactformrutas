import React, { Component } from 'react'

export default class SeleccionMultiple extends Component {
    
    selectMultiple = React.createRef()

    mostrarSeleccionados = (event) => {
        event.preventDefault();
        let options = this.selectMultiple.current.options;
        let data = "";
        // Debemos recorrer todas las opciones
        for(let option of options){
            if(option.selected === true){
                console.log(option.value)
                data += "| " + option.value + " |"
            }
        }
        this.setState({
            seleccionados:data
        })
    }
    state = {
        seleccionados: ""
    }
  render() {
    return (
      <div>
        <h1>Seleccion Multiple</h1>
        <h2 style={{color:"red"}}>
            {this.state.seleccionados}
        </h2>
        <form onSubmit={this.mostrarSeleccionados}>
            <label>Seecciona varios elementos</label>
            <select ref={this.selectMultiple} size="7" multiple>
                <option>Elemento 1</option>
                <option>Elemento 2</option>
                <option>Elemento 3</option>
                <option>Elemento 4</option>
                <option>Elemento 5</option>
                <option>Elemento 6</option>
                <option>Elemento 7</option>
            </select>
            <button type="submit">Mostrar seleccionados</button>
        </form>
      </div>
    )
  }
}
