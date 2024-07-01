import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AlertClock from './components/AlertClock.jsx'


function App() {
  const [time, setTime] = useState(new Date().toLocaleString());
  const mostrarAlert = () => {alert('La fecha y hora actual es: ' + time)};
  const cambiarHora = () => {
      setTime(new Date().toLocaleString());
  };
  const click = () => {mostrarAlert(); cambiarHora()};

  return (
    <>
      <AlertClock onClick={click} />
    </>
  )
}

export default App
