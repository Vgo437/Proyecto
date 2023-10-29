
import React from 'react';
import LogoLicorera from '../imagenes/logoLicorera.png'
import '../HojasDeEstilo/Login.css';

const Login =(usuario,pass) =>{
    return(
        <div className="contenedorLogin">
            <div className='contenedorLogo'>
                <img src={LogoLicorera} className='LogoLicorera' alt='icono de licores'/>
            </div>
            <div className='contenedorForm'>
            <form>
                <label>
                    usuario<br/>
                    <input type='text' name='nombre'></input>
                </label><br/>
                <label>
                    Contraseña<br/>
                    <input type='password' name='contraseña'/>
                </label><br/>
                <button className='botonInicio'>Inicio Sesion</button>
                <button className='botonCrear'>Crear Sesion</button>
            </form>
            </div>
        </div>
    )
}

export default Login;