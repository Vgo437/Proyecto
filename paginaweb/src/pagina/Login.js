
import React from 'react';
import LogoLicorera from '../imagenes/logoLicorera.png'
import '../HojasDeEstilo/Login.css';
import { useNavigate } from 'react-router-dom';

const Login =(usuario,pass) =>{
    const navigate = useNavigate();
    const handleLogin = () => {navigate('/Productos')};

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
                <button className='botonInicio' onClick={handleLogin}>Inicio Sesion</button>
                <button className='botonCrear'>Crear Sesion</button>
            </form>
            </div>
        </div>
    )
}

export default Login;