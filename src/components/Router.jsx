import { Component } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Home';
import Cine from './Cine';
import Musica from './Musica';
import FormSimple from './FormSimple';
export default class Router extends Component {
  render() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cine' element={<Cine/>}/>
            <Route path='/musica' element={<Musica/>}/>
            <Route path='/formsimple' element={<FormSimple/>}/>
        </Routes>
        </BrowserRouter>
    )
  }
}
