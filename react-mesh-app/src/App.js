import React from 'react';
import './App.css';
import OpenLink from './components/OpenLink';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Mesh App Example</h3>
        <div className="OpenLink">
          <OpenLink />
        </div>
      </header>
    </div>
  );
}

export default App;
