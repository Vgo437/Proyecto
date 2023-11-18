import React, { useState } from 'react';

const Cerveza = () =>{
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);
    const [contador3, setContador3] = useState(0);

    const restarCont1 = () => {
      if(contador1 === 0){
          return contador1;
      }
      else{
          return setContador1((contador1) => contador1 - 1);
      }
    }

    const restarCont2 = () => {
      if(contador2 === 0){
          return contador2;
      }
      else{
          return setContador2((contador2) => contador2 - 1);
      }
    }

    const restarCont3 = () => {
      if(contador3 === 0){
          return contador3;
      }
      else{
          return setContador3((contador3) => contador3 - 1);
      }
    }

    return (
        
        <div class="targetas">
            <div class="targeta">
                <div class="cerveza1">
                    <div class="imagen_cervezas1"></div>
                    <div class="detalle">
                        <h2>Aguila 330ml</h2>
                        <p>Cerveza de 330ml en envase de vidrio.</p>
                        <div className="cantidad">
                            <button className="btn" onClick={() => setContador1((contador1) => contador1 + 1)}>+</button>
                            <p className="precio">{contador1}</p>
                            <button className="btn" onClick={restarCont1}>-</button>
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
                            <button className="btn" onClick={() => setContador2((contador2) => contador2 + 1)}>+</button>
                            <p className="precio">{contador2}</p>
                            <button className="btn" onClick={restarCont2}>-</button>
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
                            <button className="btn" onClick={() => setContador3((contador3) => contador3 + 1)}>+</button>
                            <p className="precio">{contador3}</p>
                            <button className="btn" onClick={restarCont3}>-</button>
                            <h2 className="valor">$4000</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cerveza;