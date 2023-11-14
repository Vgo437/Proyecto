
import './App.css';
import Login from './pagina/Login.js';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
}from 'react-router-dom';
import MiCarrito from './pagina/MiCarrito';
import MiCuenta from './pagina/MiCuenta';
import Productos from './pagina/Productos';
import Cerveza from './pagina/productos/Cervezas.js';
import Ron from './pagina/productos/Ron.js';
import Whisky from './pagina/productos/Whisky.js';
import Inicio from './pagina/Inicio.js';



function App() {
  const [usuarioDatos, setUsuario] = useState({ nombre: 'sin nombre aun', contraseña: '123' }) 

  const guardarDatosUsuario = (nombre, contraseña) => {
    setUsuario({...usuarioDatos,nombre: nombre})
    setUsuario({...usuarioDatos,contraseña: contraseña})
  }

  const borrarDatosUsuario = () => {
    setUsuario({...usuarioDatos,nombre: ''})
    setUsuario({...usuarioDatos,contraseña:''})
  }

  //guardarDatosUsuario("vanessa", "123456")
  console.log(usuarioDatos);

  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' exact element={<Login /* borrar={() => borrarDatosUsuario} guardar={() => guardarDatosUsuario}*/ />}/>
        <Route path='*' element={<>not found</>}/>
        <Route path='/inicio' element={<Inicio /*nombreUsuario={usuarioDatos.nombre}*//>}/>
        <Route path='/micarrito' element={<MiCarrito/>}/>
        <Route path='/micuenta' element={<MiCuenta/>}/>
        <Route path='/productos' element={<Productos/>}/>
        <Route path='/productos/cerveza' element={<Cerveza/>}/>
        <Route path='/productos/ron' element={<Ron/>}/>
        <Route path='/productos/whisky' element={<Whisky/>}/>
      </Routes>
    </Router>
    </div>
  );
  
}

export default App;

