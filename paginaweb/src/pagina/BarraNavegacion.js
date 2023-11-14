import React from "react";
import {NavLink} from 'react-router-dom';
import '../HojasDeEstilo/BarraNavegacion.css'
const BarraNavegacion = () => {
    return(
      <nav className="botones">
          <NavLink className='productos' ClassName="active" to='/productos' >Productos</NavLink>
          <NavLink className='micarrito' ClassName="active" to='/micarrito' >Mi carrito</NavLink>
          <NavLink className='micuenta' ClassName="active" to='/micuenta' >Mi cuenta</NavLink>
          <NavLink className='Login' ClassName="active" to='/'>Logout</NavLink>  
          
      </nav>)
    }
    
    

export default BarraNavegacion;