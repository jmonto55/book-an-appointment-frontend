import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import House from './components/House';
import Reservation from './components/Reservation';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<House />} />
        <Route path="/reserve" element={<Reservation />} />
      </Routes>
    </Router>
  );
}

export default App;
