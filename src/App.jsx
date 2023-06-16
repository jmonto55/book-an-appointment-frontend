import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import HousesList from './components/HousesList';
import Reservation from './components/Reservation';
import MyReservations from './components/MyReservations';
import AddHouse from './components/AddHouse';
import DeleteHouse from './components/DeleteHouse';
import ShowHouse from './components/ShowHouse';
import LoginForm from './components/LoginForm';
import Splash from './components/Splash';
import Logout from './components/Logout';
import SignupForm from './components/SignupForm';

function App() {
  const { loginToken } = useSelector((store) => store.login);
  const { logoutToken } = useSelector((store) => store.logout);
  let isAuthorized = false; 
  if (loginToken || logoutToken) {
    isAuthorized = true;
  };
  console.log('authorized', isAuthorized);
  return (
    <div className="flex w-full overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginForm authorized={isAuthorized} />} />
        <Route path="/signup" element={<SignupForm authorized={isAuthorized} />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/home" element={<HousesList authorized={isAuthorized} />} />
        <Route path="/reserve" element={<Reservation />} />
        <Route path="/myReservations" element={<MyReservations authorized={isAuthorized} />} />
        <Route path="/addHouse" element={<AddHouse authorized={isAuthorized} />} />
        <Route path="/deleteHouse" element={<DeleteHouse authorized={isAuthorized} />} />
        <Route path="/house" element={<ShowHouse authorized={isAuthorized} />} />
        <Route path="/" element={<Splash />} />
      </Routes>
    </div>
  );
}

export default App;
