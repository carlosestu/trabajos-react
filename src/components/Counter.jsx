import CounterDisplay from "./CounterDisplay";
import { useState, useEffect } from 'react';


function Counter({ cantidadRestar, reinicio}) {
    const [contador, setContador] = useState(0);
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
        console.log(`Current counter value: ${contador}`);
      }, [contador]);
    return <div>
    <button onClick={sumador} className="buton"><CounterDisplay count ={contador} /></button>;
    <button onClick={resta} className="butonResta"><h2>restar</h2></button>;
    <button onClick={reiniciar} className="butonReset"><h2>resetear</h2></button>;
    </div>
}

export default Counter;