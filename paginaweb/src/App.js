
import './App.css';
import Login from './pagina/Login.js';
import React from 'react';
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

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' exact element={<Login/>}/>
        <Route path='*' element={<>not found</>}/>
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

