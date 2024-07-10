import { useState} from 'react'
import './App.css'
import Color from './components/Color'
import Colors from './components/Colors'
function App() {
  const array = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Green' },
    { id: 3, name: 'Blue' },
    { id: 4, name: 'orange'}
  ];

  return (
    <>
    <Colors colors={array} />
    </>
  )
}

export default App
