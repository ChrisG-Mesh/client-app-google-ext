import './App.css';
import MeshForm from './components/MeshForm';
import EventsBox from './components/EventsBox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="OpenLink">
          <MeshForm />
        </div>
      </header>
      <EventsBox />
    </div>
  );
}

export default App;
