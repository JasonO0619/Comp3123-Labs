import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

function App() {
  const [info, setInfo] = useState({
    name: "Jason Opoku",
    studentID: "101347926"
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Fullstack Development - |</h1>
        <h2>React JS Programming Week09 Lab Exercise</h2>
        <h3>{info.studentID}</h3>
        <h4>{info.name}</h4>
        <h5>George Brown College, Toronto</h5>
      </header>
    </div>
  );
}

export default App;
