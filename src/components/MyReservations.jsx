import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchReservations } from '../redux/reservations/reservationsSlice';

export default function Reservation() {
  const dispatch = useDispatch();
  const { reservationsList } = useSelector((store) => store.reservations);

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
