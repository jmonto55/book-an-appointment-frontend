import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { MdLocationOn } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchHouseReservations } from '../redux/reservations/reservationsSlice';
import { fetchHouse } from '../redux/houses/housesSlice';

export default function HouseReservations(props) {
  const dispatch = useDispatch();
  const { houseReservationsList } = useSelector((store) => store.reservations);
  const { currentHouse } = useSelector((store) => store.houses);
  const { authorized } = props;
  const houseId = window.location.href.split('/')[4];
  console.log('house reservations authorized', authorized);
  const navigate = useNavigate();
  useEffect(() => {
    if (!authorized) {
      navigate('/');
    }
  }, [authorized, navigate]);

  useEffect(() => {
    dispatch(fetchHouseReservations(houseId));
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchHouse(houseId));
  }, [dispatch]);
  return (
    <div>
      <h1>
        {`${currentHouse.name} `}
        Reservations Details
      </h1>
      <img src={currentHouse ? currentHouse.photo : 'loading...'} alt="house" />
      <p className="p-4">{currentHouse ? currentHouse.description : 'loading...'}</p>
      <p className=" p-4 flex">
        <MdLocationOn size={22} />
        {' '}
        {currentHouse ? currentHouse.city : 'loading...'}
        ,
        {' '}
        {currentHouse ? currentHouse.address : 'loading...'}
      </p>
      <table>
        <thead>
          <tr>
            <th>Check-in</th>
            <th>Check-out</th>
          </tr>
        </thead>
        <tbody>

          {houseReservationsList ? houseReservationsList.map((reservation) => (
            <tr key={`house-reservation-${reservation.id}`}>
              <td>{reservation.check_in}</td>
              <td>{reservation.check_out}</td>
            </tr>
          )) : '...loading'}

        </tbody>
      </table>
    </div>
  );
}
HouseReservations.propTypes = {
  authorized: PropTypes.bool.isRequired,
};
