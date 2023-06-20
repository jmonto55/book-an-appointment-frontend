import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchReservations } from '../redux/reservations/reservationsSlice';
import ReservationCard from './ReservationCard';

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
    <div className="h-full w-full items-center flex-col flex">
      <h2 className="mt-28 text-center text-4xl font-black tracking-widest">SELECT HOUSE TO DELETE</h2>
      {reservationsList.map((reservation) => (
        <div key={reservation.id}>
          <ReservationCard
            houseId={reservation.house_id}
            checkIn={reservation.check_in}
            checkOut={reservation.check_out}
            reservationId={reservation.id}
          />
          <hr />
        </div>
      ))}
    </div>
  );
}
MyReservations.propTypes = {
  authorized: PropTypes.bool.isRequired,
};
