import { Component } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Home';
import Cine from './Cine';
import Musica from './Musica';
import FormSimple from './FormSimple';
import Colatz from "./Collatz";
import TablaMultiplicar from './TablaMultiplicar';
import TablaMultiplicarv2 from './TablaMultiplicarv2';

export default class Router extends Component {
  render() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cine' element={<Cine/>}/>
            <Route path='/musica' element={<Musica/>}/>
            <Route path='/formsimple' element={<FormSimple/>}/>
            <Route path='/collatz' element={<Colatz/>}/>
            <Route path='/multiplicar' element={<TablaMultiplicar/>}/>
            <Route path='/multiplicarv2' element={<TablaMultiplicarv2/>}/>
        </Routes>
        </BrowserRouter>
    )
  }
}
