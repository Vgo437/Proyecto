import React from "react";
import BarraNavegacion from './BarraNavegacion';
import Encabezado from './Encabezado';
import {NavLink} from "react-router-dom";
import '../HojasDeEstilo/Productos.css';

const Productos = () => {
    return(
        <div className="contenedorProductos">
            <Encabezado/>
            <BarraNavegacion/>
            <nav>
                <ul className="contenedorLista">
                    <li><NavLink className="cervezas" to='/productos/cerveza'>Cervezas</NavLink></li>
                    <li><NavLink className="ron" to='/productos/ron'>Ron</NavLink></li>
                    <li><NavLink className="whisky" to='/productos/whisky'>Whisky</NavLink></li>
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

                <div class="targeta">
                    <div class="ron1">
                        <div class="imagen_ron1"></div>
                        <div class="detalle">
                            <h2>Ron Medellin 750ml</h2>
                            <p>Ron de 750ml en envase de vidrio.</p>
                        </div>
                    </div>
                </div>

                <div class="targeta">
                    <div class="ron2">
                        <div class="imagen_ron2"></div>
                        <div class="detalle">
                            <h2>Viejo de Caldas 750ml</h2>
                            <p>Ron de 750ml en envase de vidrio.</p>
                        </div>
                    </div>
                </div>

                <div class="targeta">
                    <div class="ron3">
                        <div class="imagen_ron3"></div>
                        <div class="detalle">
                            <h2>La Hechicera 700ml</h2>
                            <p>Ron de 700ml en envase de vidrio.</p>
                        </div>
                    </div>
                </div>

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

export default Productos;