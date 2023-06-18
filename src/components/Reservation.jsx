import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchHouses } from '../redux/houses/housesSlice';
import { reserve } from '../redux/reservations/reservationsSlice';

const Reservation = (props) => {
  const { authorized } = props;
  const dispatch = useDispatch();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');
  const [houseId, setHouseId] = useState(id || '');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const { housesList } = useSelector((store) => store.houses);
  console.log('add reservation authorized', authorized);
  console.log('house id ', houseId);
  console.log('id', id);
  const navigate = useNavigate();
  useEffect(() => {
    if (!authorized) {
      navigate('/');
    }
  }, [authorized, navigate]);
  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('house id', houseId, 'check in', checkIn, 'check out', checkOut);
    dispatch(reserve({ houseId, checkIn, checkOut }));
    navigate('/myReservations');
  };

  if (!authorized) {
    return (<></>);
  }

  return (
    <div className="bg-center bg-cover house-background w-full">
      <div className="w-full h-full flex flex-col items-center bg-lime bg-opacity-80 bg-cover py-[150px]">
        <h1 className="text-center text-white-100 font-extrabold text-5xl"> ADD A NEW RESERVATION </h1>
        <form className="flex flex-col justify-center items-center mt-[200px] bg-gray-100 bg-opacity-70 w-[400px] p-[30px]" onSubmit={handleSubmit}>
          <div className="my-[20px] w-full">
            <p className="text-white-100 font-bold text-2xl">Select House:</p>
            <select
              id="house-select"
              onChange={(e) => setHouseId(e.target.value)}
              value={houseId}
              className="w-full"
            >
              {housesList.map((house) => (
                <option key={house.id} value={house.id}>
                  { house.name }
                </option>
              ))}
            </select>
          </div>

          <div className="my-[20px] w-full">
            <p className="text-white-100 font-bold text-2xl">Check in:</p>
            <input
              id="check-in"
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full"
            />
          </div>

          <div className="my-[20px] w-full">
            <p className="text-white-100 font-bold text-2xl">Check out:</p>
            <input
              id="check-out"
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full"
            />
          </div>

          <button className="bg-lime rounded-full px-6 py-2 mt-6 color text-white flex items-center" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

Reservation.propTypes = {
  authorized: PropTypes.bool.isRequired,
};
export default Reservation;
