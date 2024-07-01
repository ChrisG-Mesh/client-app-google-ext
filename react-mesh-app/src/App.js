import React from 'react';
import logo from './logo.svg';
import './App.css';
import MakeAPICall from './components/MakeAPICall'; // Import MyComponent

function App() {
  return (
    <div className="App" style={{ width: '500px', height: '500px', padding: '20px' }}>
      <header className="App-header">
        <h3>Mesh App Example</h3>
        <MakeAPICall />
      </header>
    </div>
  );
}


export default App;
