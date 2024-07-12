import React from 'react';
import { BrowserRouter as Router, Routes, Link, Route} from 'react-router-dom';
import InteractiveWelcome from './components/InteractiveWelcome';
import Login from './components/Login';
import Counter from './components/Counter';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/InteractiveWelcome" element={<InteractiveWelcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/counter" element=<Counter cantidadRestar={1} reinicio={0} />/>
        </Routes>
    </Router>
  );
}

export default App;