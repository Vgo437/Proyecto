import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { incrementar4, decrementar4 } from '../../utilidades/contador4Slice';
import { incrementar5, decrementar5 } from '../../utilidades/contador5Slice';
import { incrementar6, decrementar6 } from '../../utilidades/contador6Slice';

const Ron = () =>{
    const dispatch = useDispatch();
    const contador4 = useSelector((state) => state.contador4);
    const contador5 = useSelector((state) => state.contador5);
    const contador6 = useSelector((state) => state.contador6);

    return (
        <div class="targetas">
            <div class="targeta">
                <div class="ron1">
                    <div class="imagen_ron1"></div>
                    <div class="detalle">
                        <h2>Ron Medellin 750ml</h2>
                        <p>Ron de 750ml en envase de vidrio.</p>
                        <div className="cantidad">
                            <button className="btn" onClick={() => dispatch(incrementar4())}>+</button>
                            <p className="precio">{contador4.value}</p>
                            <button className="btn" onClick={() => dispatch(decrementar4())}>-</button>
                            <h2 className="valor">$50000</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div class="targeta">
                <div class="ron2">
                    <div class="imagen_ron2"></div>
                    <div class="detalle">
                        <h2>Viejo de Caldas 750ml</h2>
                        <p>Ron de 750ml en envase de vidrio.</p>
                        <div className="cantidad">
                            <button className="btn" onClick={() => dispatch(incrementar5())}>+</button>
                            <p className="precio">{contador5.value}</p>
                            <button className="btn" onClick={() => dispatch(decrementar5())}>-</button>
                            <h2 className="valor">$70000</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div class="targeta">
                <div class="ron3">
                    <div class="imagen_ron3"></div>
                    <div class="detalle">
                        <h2>La Hechicera 700ml</h2>
                        <p>Ron de 700ml en envase de vidrio.</p>
                        <div className="cantidad">
                            <button className="btn" onClick={() => dispatch(incrementar6())}>+</button>
                            <p className="precio">{contador6.value}</p>
                            <button className="btn" onClick={() => dispatch(decrementar6())}>-</button>
                            <h2 className="valor">$180000</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ron;