import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { incrementar7, decrementar7 } from '../../utilidades/contador7Slice';
import { incrementar8, decrementar8 } from '../../utilidades/contador8Slice';
import { incrementar9, decrementar9 } from '../../utilidades/contador9Slice';

const Whisky = () =>{
    const dispatch = useDispatch();
    const contador7 = useSelector((state) => state.contador7);
    const contador8 = useSelector((state) => state.contador8);
    const contador9 = useSelector((state) => state.contador9);

    return (
        <div class="targetas">
            <div class="targeta">
                <div class="whisky1">
                    <div class="imagen_whisky1"></div>
                    <div class="detalle">
                        <h2>Blue Label 750ml</h2>
                        <p>Whisky de 750ml en envase de vidrio.</p>
                        <div className="cantidad">
                            <button className="btn" onClick={() => dispatch(incrementar7())}>+</button>
                            <p className="precio">{contador7.value}</p>
                            <button className="btn" onClick={() => dispatch(decrementar7())}>-</button>
                            <h2 className="valor">$1100000</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div class="targeta">
                <div class="whisky2">
                    <div class="imagen_whisky2"></div>
                    <div class="detalle">
                        <h2>Jack Daniels 750ml</h2>
                        <p>Whisky de 750ml en envase de vidrio.</p>
                        <div className="cantidad">
                            <button className="btn" onClick={() => dispatch(incrementar8())}>+</button>
                            <p className="precio">{contador8.value}</p>
                            <button className="btn" onClick={() => dispatch(decrementar8())}>-</button>
                            <h2 className="valor">$115000</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div class="targeta">
                <div class="whisky3">
                    <div class="imagen_whisky3"></div>
                    <div class="detalle">
                        <h2>Buchanan's 750ml</h2>
                        <p>Whisky de 750ml en envase de vidrio.</p>
                        <div className="cantidad">
                            <button className="btn" onClick={() => dispatch(incrementar9())}>+</button>
                            <p className="precio">{contador9.value}</p>
                            <button className="btn" onClick={() => dispatch(decrementar9())}>-</button>
                            <h2 className="valor">$150000</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Whisky;