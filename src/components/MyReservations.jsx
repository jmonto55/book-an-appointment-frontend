import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchReservations } from '../redux/reservations/reservationsSlice';

export default function MyReservations(props) {
  const dispatch = useDispatch();
  const { reservationsList } = useSelector((store) => store.reservations);
  const { authorized } = props;
  console.log('my reservations authorized', authorized);
  const navigate = useNavigate();
  useEffect(() => {
    if (!authorized) {
      navigate('/');
    }
  }, [authorized, navigate]);

  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  return (
    <div>
      <ul className="">
        {reservationsList.map((reservation) => (
          <li key={reservation.id}>
            <h1 className="">{reservation.check_in}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
}
MyReservations.propTypes = {
  authorized: PropTypes.bool.isRequired,
};
