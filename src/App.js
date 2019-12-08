import React from 'react';
import profileImage from './img/telmo-pic.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Myu React App</h1>
      <h2>Author: Telmo Sampaio</h2>
      <img src={profileImage} alt="profile-image" />
    </div>
  );
}

export default App;
