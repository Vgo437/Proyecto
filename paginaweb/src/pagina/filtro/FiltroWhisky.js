import React from "react";
import Whisky from '../productos/Whisky';
import BarraNavegacion from "../BarraNavegacion";
import Encabezado from "../Encabezado";
import Volver from "../Boton";

const filtroWhisky = () =>{
    return(
        <div>
            <Encabezado/>
            <BarraNavegacion/>
            <Volver/>
            <Whisky/>
        </div>
    );
}

export default filtroWhisky;