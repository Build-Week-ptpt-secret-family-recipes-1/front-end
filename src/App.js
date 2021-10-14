import React from 'react';
import HomePage from './components/HomePage';

import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <a href="#">Home</a>
        <a href="#">Login</a>
        <a href="#">Logout</a>
      </nav>
      <HomePage />
    </div>
  );
}

export default App;
