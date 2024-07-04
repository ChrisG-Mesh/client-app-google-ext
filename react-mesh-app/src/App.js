import React from 'react';
import './App.css';
import OpenLinkWebSDK from './components/OpenLinkWebSDK';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Mesh App Example</h3>
        <div className="OpenLink">
          <OpenLinkWebSDK />
        </div>
      </header>
      <div>
      {/* <style>
          #events {
              width: 300px;
              height: 200px;
              border: 1px solid #ccc;
              overflow-y: auto;
          }
      </style> */}
      <body>
          <h1>WebSocket Events</h1>
          <div id="events"></div>
          <script src="background.js"></script>
      </body>
      </div>
    </div>
  );
}

export default App;
