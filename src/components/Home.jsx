import React from 'react'
import { BrowserRouter as Router, Routes, Link, Route} from 'react-router-dom';

function Home() {
  return (
    <div>
        <h1>Elige la ruta que quieres usar:</h1>
         <Link to="/InteractiveWelcome">Welcome</Link>
         <hr />
          <Link to="/login">Login</Link>
          <hr />
          <Link to="/Counter">Counter</Link>
          </div>
  )
}

export default Home