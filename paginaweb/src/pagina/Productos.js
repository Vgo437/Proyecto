import React from "react";
import Cervezas from './productos/Cervezas';
import Ron from './productos/Ron';
import Whisky from './productos/Whisky';
import BarraNavegacion from "./BarraNavegacion";
import Encabezado from "./Encabezado";
import '../HojasDeEstilo/Productos.css';
import {NavLink} from "react-router-dom";

const Productos = () => {
    return(
        <div className="contenedorProductos">
            <Encabezado/>
            <BarraNavegacion/>

            <nav>
                <ul className="contenedorLista">
                    <h3>Filtrar: </h3>
                    <li><NavLink className="cervezas" to='/productos/cerveza'>Cervezas</NavLink></li>
                    <li><NavLink className="ron" to='/productos/ron'>Ron</NavLink></li>
                    <li><NavLink className="whisky" to='/productos/whisky'>Whisky</NavLink></li>
                </ul>
            </nav>

            <Cervezas/>
            <Ron/>
            <Whisky/>
        </div>
    );
}

export default Productos;