import React from "react";
import BarraNavegacion from './BarraNavegacion';
import Encabezado from './Encabezado';
import { useSelector } from 'react-redux';

const MiCarrito = () =>{
    const contador1 = useSelector((state) => state.contador1);
    const contador2 = useSelector((state) => state.contador2);

    return(
     <div>
        <Encabezado/>
        <BarraNavegacion/>
        <h1>MiCarrito</h1>

        <p>Contador 1: {contador1.value}</p>
        <p>Contador 2: {contador2.value}</p>

     </div>
    );
}

export default MiCarrito;