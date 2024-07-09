import CounterDisplay from "./CounterDisplay";
import { useState, useEffect, useRef } from 'react';

function Counter({cantidadRestar, reinicio}) {
    const [contador, setContador] = useState(0);
    const upOrDown = useRef(null); 
    const contadorPrevioRef = useRef(contador);
    const sumador = () => {
        setContador(cifraAnterior => cifraAnterior + 1);
      };
      const resta = () => {
        setContador(cifraResta => cifraResta - cantidadRestar);
      };
      const reiniciar = () => {
        setContador(cifraReiniciar => cifraReiniciar = reinicio);
      };
      useEffect(() => {
        let direccion = "none";
       if (contador > contadorPrevioRef.current) {
         direccion = "up"
       } else {
         direccion = "down"
       }
       if (upOrDown.current !== contadorPrevioRef.current) {
        upOrDown.current = direccion;
        console.log(`Direction of change: ${direccion}`);
    }
       contadorPrevioRef.current = contador;
       
      }, [contador]);
    return <div className="divPrinc">
    <button onClick={sumador} className="buton"><CounterDisplay count ={contador} /></button>;
    <div className="divSec">
    <button onClick={resta} className="butonResta"><h2>restar</h2></button>;
    <button onClick={reiniciar} className="butonReset"><h2>resetear</h2></button>;
    </div>
    </div>
}

export default Counter;