import { useState, useEffect } from 'react'


    
function Clock() {
    const [time, setTime] = useState(new Date().toLocaleString());
     
  useEffect(() => {
    const actualizarHora = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(actualizarHora);
  }, [time]);
      return <h2 id="tiempo">{time}</h2>;
}

export default Clock;