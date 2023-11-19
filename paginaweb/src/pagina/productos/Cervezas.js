import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementar1, decrementar1 } from '../../utilidades/contador1Slice';
import { incrementar2, decrementar2 } from '../../utilidades/contador2Slice';
import { incrementar3, decrementar3 } from '../../utilidades/contador3Slice';

const Cerveza = () =>{
    const dispatch = useDispatch();
    const contador1 = useSelector((state) => state.contador1);
    const contador2 = useSelector((state) => state.contador2);
    const contador3 = useSelector((state) => state.contador3);

    return (
        
        <div class="targetas">
            <div class="targeta">
                <div class="cerveza1">
                    <div class="imagen_cervezas1"></div>
                    <div class="detalle">
                        <h2>Aguila 330ml</h2>
                        <p>Cerveza de 330ml en envase de vidrio.</p>
                        <div className="cantidad">
                            <button className="btn" onClick={() => dispatch(incrementar1())}>+</button>
                            <p className="precio">{contador1.value}</p>
                            <button className="btn" onClick={() => dispatch(decrementar1())}>-</button>
                            <h2 className="valor">$3500</h2>
                        </div>
                    </div>
                 </div>
            </div>

            <div class="targeta">
                    <div class="cerveza2">
                    <div class="imagen_cervezas2"></div>
                    <div class="detalle">
                        <h2>Corona 355ml</h2>
                        <p>Cerveza de 355ml en envase de vidrio.</p>
                        <div className="cantidad">
                            <button className="btn" onClick={() => dispatch(incrementar2())}>+</button>
                            <p className="precio">{contador2.value}</p>
                            <button className="btn" onClick={() => dispatch(decrementar2())}>-</button>
                            <h2 className="valor">$4500</h2>
                        </div>
                     </div>
                </div>
            </div>

            <div class="targeta">
                <div class="cerveza3">
                    <div class="imagen_cervezas3"></div>
                    <div class="detalle">
                        <h2>Club Colombia 330ml</h2>
                        <p>Cerveza de 330ml en envase de vidrio.</p>
                        <div className="cantidad">
                            <button className="btn" onClick={() => dispatch(incrementar3())}>+</button>
                            <p className="precio">{contador3.value}</p>
                            <button className="btn" onClick={() => dispatch(decrementar3())}>-</button>
                            <h2 className="valor">$4000</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cerveza;