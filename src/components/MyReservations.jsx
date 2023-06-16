import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchReservations } from '../redux/reservations/reservationsSlice';
import { useNavigate } from 'react-router-dom';

export default function Reservation(props) {
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
