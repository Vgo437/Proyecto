import React from "react";
import {NavLink} from "react-router-dom";

const Cerveza = () =>{
    return (
        <div>
            <nav>
                <ul>
                    <li><NavLink className="volver" to='/Productos'>Volver</NavLink></li>
                </ul>
            </nav>

        <div class="targetas">
            <div class="targeta">
                <div class="cerveza1">
                    <div class="imagen_cervezas1"></div>
                    <div class="detalle">
                        <h2>Aguila 330ml</h2>
                        <p>Cerveza de 330ml en envase de vidrio.</p>
                    </div>
                 </div>
            </div>

            <div class="targeta">
                    <div class="cerveza2">
                    <div class="imagen_cervezas2"></div>
                    <div class="detalle">
                        <h2>Corona 355ml</h2>
                        <p>Cerveza de 355ml en envase de vidrio.</p>
                     </div>
                </div>
            </div>

            <div class="targeta">
                <div class="cerveza3">
                    <div class="imagen_cervezas3"></div>
                    <div class="detalle">
                        <h2>Club Colombia 330ml</h2>
                        <p>Cerveza de 330ml en envase de vidrio.</p>
                    </div>
                </div>
            </div>
        </div>

        </div>
    )
}

export default Cerveza;