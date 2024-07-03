import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/Welcome';
import InteractiveWelcome from './components/InteractiveWelcome';
import Login from './components/login';


function App() {


  return (
    <div id='form'>
    <InteractiveWelcome />;
    <Login />;
    </div>
  )
}

export default App
