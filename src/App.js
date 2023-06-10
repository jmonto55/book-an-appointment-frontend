import './App.css';
import House from './components/House';
import Reservation from './components/Reservation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <House />
        <Reservation />
      </header>
    </div>
  );
}

export default App;
