import React from "react";
import {NavLink} from 'react-router-dom';
import '../HojasDeEstilo/BarraNavegacion.css'
const BarraNavegacion = () => {
    return(
      <nav>
          <NavLink className='productos' activeClassName="active" to='/productos' >Productos</NavLink>
          <NavLink className='micarrito' activeClassName="active" to='/micarrito' >Mi carrito</NavLink>
          <NavLink className='micuenta' activeClassName="active" to='/micuenta' >Mi cuenta</NavLink>
          <NavLink className='Login'activeClassName="active" to='/'>Logout</NavLink>  
          
      </nav>)
    }
    
    

export default BarraNavegacion;