import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HousesList from './components/HousesList';
import Reservation from './components/Reservation';
import MyReservations from './components/MyReservations';
import AddHouse from './components/AddHouse';
import DeleteHouse from './components/DeleteHouse';
import ShowHouse from './components/ShowHouse';
import LoginForm from './components/LoginForm';
import Splash from './components/Splash';

function App() {
  return (
    <div className="flex w-full overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<HousesList />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/home" element={<HousesList />} />
        <Route path="/reserve" element={<Reservation />} />
        <Route path="/myReservations" element={<MyReservations />} />
        <Route path="/addHouse" element={<AddHouse />} />
        <Route path="/deleteHouse" element={<DeleteHouse />} />
        <Route path="/house" element={<ShowHouse />} />
        <Route path="/" element={<Splash />} />
      </Routes>
    </div>
  );
}

export default App;
