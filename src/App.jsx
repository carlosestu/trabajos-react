import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormUser from './components/FormUser';
import ShowGithubUser from './components/ShowGithubUser';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<FormUser />} />
          <Route path="/users/:userName" element={<ShowGithubUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;