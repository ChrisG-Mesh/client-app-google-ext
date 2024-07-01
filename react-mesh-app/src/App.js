import React from 'react';
import logo from './logo.svg';
import './App.css';
import OpenLink from './components/OpenLink';

function App() {
  return (
    <div className="App" style={{ width: '700px', height: '700px', padding: '20px' }}>
      <header className="App-header">
        <h3>Mesh App Example</h3>
        <OpenLink />
      </header>
    </div>
  );
}


export default App;
