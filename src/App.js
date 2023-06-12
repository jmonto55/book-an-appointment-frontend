import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import House from './components/House';
import Reservation from './components/Reservation';
import MyReservations from './components/MyReservations';
import AddHouse from './components/AddHouse';
import DeleteHouse from './components/DeleteHouse';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<House />} />
        <Route path="/reserve" element={<Reservation />} />
        <Route path="/myReservations" element={<MyReservations />} />
        <Route path="/addHouse" element={<AddHouse />} />
        <Route path="/deleteHouse" element={<DeleteHouse />} />
      </Routes>
    </div>
  );
}

export default App;
