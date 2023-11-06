import React from "react";
import Logo from '../imagenes/logoLicorera.png'
import Icono from '../imagenes/iconoPersona.jpg'
import '../HojasDeEstilo/Encabezado.css'
const Encabezado = () => {
    return(
        <div className="contenedorEncabezado">
        <img className='logo'src={Logo} alt="imagen del logo"/>
        <img className='icono'src={Icono} alt="imagen del icono"/>
        <h1 className="h1">Hola Persona</h1>
        </div>
    );
}

export default Encabezado;