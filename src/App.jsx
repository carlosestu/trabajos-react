import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FormUser from './components/FormUser';
import ShowGithubUser from './components/ShowGithubUser';
import GithubUserList from './components/GithubUserList';
import IndexMessage from './components/IndexMessage';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/List" element={<GithubUserList />} />
          <Route index element={<IndexMessage />} />
          <Route path="/users" element={<FormUser />} />
          <Route path="/users/:userName" element={<ShowGithubUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;