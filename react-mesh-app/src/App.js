import React from 'react';
import './App.css';
import GetCatalog from './components/GetCatalog';
import OpenLinkWebSDK from './components/OpenLinkWebSDK';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Mesh App Example</h3>
        <div className="OpenLink">
          <GetCatalog />
          <OpenLinkWebSDK />
        </div>
      </header>
    </div>
  );
}

export default App;
