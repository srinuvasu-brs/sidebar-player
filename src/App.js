import React from 'react';
import Sidebar from './Sidebar';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <h1>Welcome to the Home Page</h1>
        <p>This is where your main content will go.</p>
      </div>
    </div>
  );
};

export default App;

