import React, { useState, useEffect } from 'react';

function AlertClock () {
    const [time, setTime] = useState(new Date().toLocaleString());
    const mostrarAlert = () => {alert('La fecha y hora actual es: ' + time)};
    const cambiarHora = () => {
        setTime(new Date().toLocaleString());
    };
    return <button onClick={() => {mostrarAlert(); cambiarHora()}} className='buton'>mostrar hora</button>;
}
export default AlertClock;