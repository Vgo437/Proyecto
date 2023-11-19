import React from "react";
import '../HojasDeEstilo/MiCarrito.css';
import BarraNavegacion from './BarraNavegacion';
import Encabezado from './Encabezado';
import { useDispatch, useSelector } from 'react-redux';
import { reset1 } from '../utilidades/contador1Slice';
import { reset2 } from '../utilidades/contador2Slice';
import { reset3 } from '../utilidades/contador3Slice';
import { reset4 } from '../utilidades/contador4Slice';
import { reset5 } from '../utilidades/contador5Slice';
import { reset6 } from '../utilidades/contador6Slice';
import { reset7 } from '../utilidades/contador7Slice';
import { reset8 } from '../utilidades/contador8Slice';
import { reset9 } from '../utilidades/contador9Slice';

const MiCarrito = () =>{
    const dispatch = useDispatch();
    const contador1 = useSelector((state) => state.contador1);
    const contador2 = useSelector((state) => state.contador2);
    const contador3 = useSelector((state) => state.contador3);
    const contador4 = useSelector((state) => state.contador4);
    const contador5 = useSelector((state) => state.contador5);
    const contador6 = useSelector((state) => state.contador6);
    const contador7 = useSelector((state) => state.contador7);
    const contador8 = useSelector((state) => state.contador8);
    const contador9 = useSelector((state) => state.contador9);

    var mensaje = false;

    const pagar = () => {
        dispatch(reset1());
        dispatch(reset2());
        dispatch(reset3());
        dispatch(reset4());
        dispatch(reset5());
        dispatch(reset6());
        dispatch(reset7());
        dispatch(reset8());
        dispatch(reset9());
        mensaje = true;
    }

    const vaciar = () => {
        dispatch(reset1());
        dispatch(reset2());
        dispatch(reset3());
        dispatch(reset4());
        dispatch(reset5());
        dispatch(reset6());
        dispatch(reset7());
        dispatch(reset8());
        dispatch(reset9());
        mensaje = false;
    }

    const subtotal1 = contador1.value * 3500;
    const subtotal2 = contador2.value * 4500;
    const subtotal3 = contador3.value * 4000;
    const subtotal4 = contador4.value * 50000;
    const subtotal5 = contador5.value * 70000;
    const subtotal6 = contador6.value * 180000;
    const subtotal7 = contador7.value * 1100000;
    const subtotal8 = contador8.value * 115000;
    const subtotal9 = contador9.value * 150000;

    const total = subtotal1 + subtotal2 + subtotal3 + subtotal4 + subtotal5 + subtotal6 + subtotal7 + subtotal8 + subtotal9;

    return(
     <div>
        <Encabezado/>
        <BarraNavegacion/>
        <h1 className="titulo">Mi Carrito</h1>

        {total > 0 &&
        <div className="total">
            <h1 className="valorPagar">Total a pagar: ${total}</h1>
            <button className="btn_operacion" onClick={() => vaciar()}>Vaciar carrito</button>
            <button className="btn_operacion" onClick={() => pagar()}>Pagar</button>
        </div>
        }

        {mensaje === false && total === 0 &&
            <h2 className="mensaje">El carrito esta vacio.</h2>
        }
        {mensaje === true && total === 0 &&
            <h2 className="mensaje">Gracias por su compra.</h2>
        }

        <div class="targetas">
            {contador1.value > 0 &&
            <div id="target" class="targeta">
                <div class="cerveza1">
                    <div class="imagen_cervezas1"></div>
                    <div class="detalle">
                        <h2>Aguila 330ml</h2>
                        <p>Cerveza de 330ml en envase de vidrio.</p>
                        <div className="cantidad">
                            <button className="btn_quitar" onClick={() => dispatch(reset1())}>Quitar</button>
                            <h2 className="subtotal">Subtotal: ${subtotal1}</h2>
                        </div>
                    </div>
                 </div>
            </div>
            }
            
            {contador2.value > 0 &&
            <div id="target" class="targeta">
                    <div class="cerveza2">
                    <div class="imagen_cervezas2"></div>
                    <div class="detalle">
                        <h2>Corona 355ml</h2>
                        <p>Cerveza de 355ml en envase de vidrio.</p>
                        <div className="cantidad">
                            <button className="btn_quitar" onClick={() => dispatch(reset2())}>Quitar</button>
                            <h2 className="subtotal">Subtotal: ${subtotal2}</h2>
                        </div>
                     </div>
                </div>
            </div>
            }
            
            {contador3.value > 0 &&
            <div id="target" class="targeta">
                <div class="cerveza3">
                    <div class="imagen_cervezas3"></div>
                    <div class="detalle">
                        <h2>Club Colombia 330ml</h2>
                        <p>Cerveza de 330ml en envase de vidrio.</p>
                        <div className="cantidad">
                            <button className="btn_quitar" onClick={() => dispatch(reset3())}>Quitar</button>
                            <h2 className="subtotal">Subtotal: ${subtotal3}</h2>
                        </div>
                    </div>
                </div>
            </div>
            }
            
            {contador4.value > 0 &&
            <div id="target" class="targeta">
                <div class="ron1">
                    <div class="imagen_ron1"></div>
                    <div class="detalle">
                        <h2>Ron Medellin 750ml</h2>
                        <p>Ron de 750ml en envase de vidrio.</p>
                        <div className="cantidad">
                            <button className="btn_quitar" onClick={() => dispatch(reset4())}>Quitar</button>
                            <h2 className="subtotal">Subtotal: ${subtotal4}</h2>
                        </div>
                    </div>
                </div>
            </div>
            }
            
            {contador5.value > 0 &&
            <div id="target" class="targeta">
                <div class="ron2">
                    <div class="imagen_ron2"></div>
                    <div class="detalle">
                        <h2>Viejo de Caldas 750ml</h2>
                        <p>Ron de 750ml en envase de vidrio.</p>
                        <div className="cantidad">
                            <button className="btn_quitar" onClick={() => dispatch(reset5())}>Quitar</button>
                            <h2 className="subtotal">Subtotal: ${subtotal5}</h2>
                        </div>
                    </div>
                </div>
            </div>
            }
            
            {contador6.value > 0 &&
            <div id="target" class="targeta">
                <div class="ron3">
                    <div class="imagen_ron3"></div>
                    <div class="detalle">
                        <h2>La Hechicera 700ml</h2>
                        <p>Ron de 700ml en envase de vidrio.</p>
                        <div className="cantidad">
                            <button className="btn_quitar" onClick={() => dispatch(reset6())}>Quitar</button>
                            <h2 className="subtotal">Subtotal: ${subtotal6}</h2>
                        </div>
                    </div>
                </div>
            </div>
            }
            
            {contador7.value > 0 &&
            <div id="target" class="targeta">
                <div class="whisky1">
                    <div class="imagen_whisky1"></div>
                    <div class="detalle">
                        <h2>Blue Label 750ml</h2>
                        <p>Whisky de 750ml en envase de vidrio.</p>
                        <div className="cantidad">
                            <button className="btn_quitar" onClick={() => dispatch(reset7())}>Quitar</button>
                            <h2 className="subtotal">Subtotal: ${subtotal7}</h2>
                        </div>
                    </div>
                </div>
            </div>
            }
            
            {contador8.value > 0 &&
            <div id="target" class="targeta">
                <div class="whisky2">
                    <div class="imagen_whisky2"></div>
                    <div class="detalle">
                        <h2>Jack Daniels 750ml</h2>
                        <p>Whisky de 750ml en envase de vidrio.</p>
                        <div className="cantidad">
                            <button className="btn_quitar" onClick={() => dispatch(reset8())}>Quitar</button>
                            <h2 className="subtotal">Subtotal: ${subtotal8}</h2>
                        </div>
                    </div>
                </div>
            </div>
            }
            
            {contador9.value > 0 &&
            <div id="target" class="targeta">
                <div class="whisky3">
                    <div class="imagen_whisky3"></div>
                    <div class="detalle">
                        <h2>Buchanan's 750ml</h2>
                        <p>Whisky de 750ml en envase de vidrio.</p>
                        <div className="cantidad">
                            <button className="btn_quitar" onClick={() => dispatch(reset9())}>Quitar</button>
                            <h2 className="subtotal">Subtotal: ${subtotal9}</h2>
                        </div>
                    </div>
                </div>
            </div>
            }

        </div>
     </div>
    );
}

export default MiCarrito;