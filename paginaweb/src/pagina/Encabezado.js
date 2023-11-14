import React from "react";
import Logo from '../imagenes/logoLicorera.png';
import Icono from '../imagenes/iconoPersona.jpg';
import '../HojasDeEstilo/Encabezado.css';
import {NavLink} from "react-router-dom";

const Encabezado = (params) => {
    const {nombreUsuario} = params
    return(
        <div className="contenedorEncabezado">
        <NavLink to='/productos'>
            <img className='logo'src={Logo} alt="imagen del logo"/>
        </NavLink>
        <div className="contenedorIcono">
        <h2 className="h2">Hola {nombreUsuario}</h2>
        <NavLink to='/MiCuenta'>
            <img className='icono'src={Icono} alt="imagen del icono"/>
        </NavLink>
        </div>
        </div>
    );
}

export default Encabezado;