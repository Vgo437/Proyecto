
import React from 'react';
import LogoLicorera from '../imagenes/logoLicorera.png'
import '../HojasDeEstilo/Login.css';
import { useNavigate } from 'react-router-dom';

const Login = (params) =>{
    const {datos, borrar, guardar} = params
    const navigate = useNavigate();
    const handleLogin = () => {navigate('/Inicio')};

    // reseteo de los datos del login
    borrar();

    return(
        <div className="contenedorLogin">
            <div className='contenedorLogo'>
                <img src={LogoLicorera} className='LogoLicorera' alt='icono de licores'/>
            </div>
            <div className='contenedorForm'>
            <form>
                <label>
                    usuario<br/>
                    <input className='nombre' type='text' name='nombre'></input>
                </label><br/>
                <label>
                    Contraseña<br/>
                    <input type='password' name='contraseña'/>
                </label><br/>
                <button className='botonInicio' onClick={() => 
                    {
                        guardar(document.getElementsByName("nombre"), document.getElementsByName("contraseña"))
                        handleLogin();
                    }
                }>Inicio Sesion</button>
                <button className='botonCrear'>Crear Sesion</button>
            </form>
            </div>
        </div>
    )
}

export default Login;