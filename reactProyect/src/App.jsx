import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sayhello from './components/Hello.jsx'
import Message from './components/Message.jsx'
import Welcome from './components/Welcome.jsx'
import Age from './components/Age.jsx'

function App() {


  return (
    <>
      <div> <Sayhello /> <Message /></div>
      <div> <Welcome name="John" /></div>
    </>
  )
}

export default App
