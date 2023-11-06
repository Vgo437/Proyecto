
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
      </Routes>
    </Router>
    </div>
  );
}

export default App;

