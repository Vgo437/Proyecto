import React from "react";
import Cervezas from '../productos/Cervezas';
import BarraNavegacion from "../BarraNavegacion";
import Encabezado from "../Encabezado";
import Volver from "../Boton";

const filtroCervezas = () =>{
    return(
        <div>
            <Encabezado/>
            <BarraNavegacion/>
            <Volver/>
            <Cervezas/>
        </div>
    );
}

export default filtroCervezas;