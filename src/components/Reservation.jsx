import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchHouses } from '../redux/houses/housesSlice';
import { reserve } from '../redux/reservations/reservationsSlice';

const Reservation = (props) => {
  const { authorized } = props;
  const dispatch = useDispatch();
  const [houseId, setHouseId] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const { housesList } = useSelector((store) => store.houses);
  console.log('add reservation authorized', authorized);
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
    dispatch(reserve({ houseId, checkIn, checkOut }))
      .unwrap()
      .then((token) => {
        // Handle successful reserve
        localStorage.setItem('token', token);
        console.log('reserve is successful');
        navigate('/home');
      })
      .catch((error) => {
        // Handle reserve error
        console.error('reserve error:', error);
      });
  };

  if (!authorized) {
    return (<></>);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="house-select">Select House:</label>
        <select
          id="house-select"
          value={houseId}
          onChange={(e) => setHouseId(e.target.value)}
        >
          {housesList.map((house) => (
            <option key={house.id} value={house.id}>
              { house.name }
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="check-in">Check-in:</label>
        <input
          id="check-in"
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="check-out">Check-out:</label>
        <input
          id="check-out"
          type="date"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

Reservation.propTypes = {
  authorized: PropTypes.bool.isRequired,
};
export default Reservation;
