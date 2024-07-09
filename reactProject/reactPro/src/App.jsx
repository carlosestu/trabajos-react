import { useState} from 'react'
import './App.css'
import Counter from './components/Counter'
function App() {


  return (
    <>
    <Counter cantidadRestar={1} reinicio={0} />
    </>
  )
}

export default App
