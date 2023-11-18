import React from "react";
import Encabezado from "./Encabezado";
import BarraNavegacion from "./BarraNavegacion";
import LicorInicio from '../imagenes/LicorInicio.jpg';
import '../HojasDeEstilo/Inicio.css';


const Inicio = (params) => {
   let {nombreUsuario} = params
    return(
        <div className="contenedorInicio">
            <Encabezado nombreUsuario={nombreUsuario}/>
            <BarraNavegacion/>
            <img className="LicorInicio" src={LicorInicio} alt="pagina de inicio"/>
        </div>
    );
}

export default Inicio;