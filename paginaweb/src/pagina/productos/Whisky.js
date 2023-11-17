import React from "react";
import {NavLink} from "react-router-dom";

const Whisky = () =>{
    return (
        <div>
            <nav>
                <ul>
                    <li><NavLink className="volver" to='/Productos'>Volver</NavLink></li>
                </ul>
            </nav>

            <div class="targetas">
                <div class="targeta">
                    <div class="whisky1">
                        <div class="imagen_whisky1"></div>
                        <div class="detalle">
                            <h2>Blue Label 750ml</h2>
                            <p>Whisky de 750ml en envase de vidrio.</p>
                        </div>
                    </div>
                </div>

                <div class="targeta">
                    <div class="whisky2">
                        <div class="imagen_whisky2"></div>
                        <div class="detalle">
                            <h2>Jack Daniels 3L</h2>
                            <p>Whisky de 3L en envase de vidrio.</p>
                        </div>
                    </div>
                </div>

                <div class="targeta">
                    <div class="whisky3">
                        <div class="imagen_whisky3"></div>
                        <div class="detalle">
                            <h2>Buchanan's 750ml</h2>
                            <p>Whisky de 750ml en envase de vidrio.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Whisky;