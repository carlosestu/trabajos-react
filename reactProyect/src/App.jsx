import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter.jsx'


function App() {

  return (
    <>
      <Counter cantidadRestar={1} reinicio={0} />
    </>
  )
}

export default App
