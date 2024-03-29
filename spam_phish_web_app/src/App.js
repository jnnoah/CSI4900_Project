import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Centered-title">Spamming and Phishing Detector</h1>
        <div className="Centered-content">
          <textarea className="Centered-textbox" placeholder="Enter text" />
          <button className="Centered-button">Submit</button> <br/>
          <p className="Centered-text">Spamming percentage: </p>
          <p className="Centered-text">Phishing percentage: </p>
        </div>
      </header>
    </div>
  );
}

export default App;
