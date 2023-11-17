import React from "react";
import Ron from '../productos/Ron';
import BarraNavegacion from "../BarraNavegacion";
import Encabezado from "../Encabezado";
import Volver from "../Boton";

const filtroRon = () =>{
    return(
        <div>
            <Encabezado/>
            <BarraNavegacion/>
            <Volver/>
            <Ron/>
        </div>
    );
}

export default filtroRon;