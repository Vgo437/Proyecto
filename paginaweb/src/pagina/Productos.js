import React from "react";
import BarraNavegacion from './BarraNavegacion';
import Encabezado from './Encabezado';
import {
    BrowserRouter as Router,
    Routes,
    Route
  }from 'react-router-dom';

import Cerveza from "./productos/Cervezas";
import {NavLink} from "react-router-dom";
import '../HojasDeEstilo/Productos.css';

const Productos = () => {
    return(
        <div className="contenedorProductos">
            <Encabezado/>
            <BarraNavegacion/>
        <nav>
        <ul className="contenedorLista">
            <li><NavLink className="cervezas" to='/productos/cerveza'>Cervezas</NavLink></li>
            <li><NavLink className="ron" to='/productos/ron'>Ron</NavLink></li>
            <li><NavLink className="whisky" to='/productos/whisky'>Whisky</NavLink></li>
        </ul>
        </nav>
        </div>
    );
}

export default Productos;