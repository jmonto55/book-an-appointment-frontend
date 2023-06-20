import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { MdLocationOn } from 'react-icons/md';
import PropTypes from 'prop-types';
import { fetchHouses } from '../redux/houses/housesSlice';
import DeleteReservationButton from './DeleteReservationButton';

export default function ReservationCard(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);

  const { housesList } = useSelector((store) => store.houses);
  const {
    houseId, checkIn, checkOut, reservationId,
  } = props;
  const house = housesList.find((house) => house.id === houseId);
  return (
    <div className="h-full mt-20 w-full p-4 flex gap-x-10 flex-wrap justify-center">
      <div className="w-[375px] md:w-[600px]">
        <img src={house ? house.photo : 'loading...'} alt="house" />
      </div>
      <div className="flex flex-col justify-between gap-8">
        <p className="font-black text-2xl tracking-wider">{house ? house.name : 'loading...'}</p>
        <p className="bg-gray-200 p-4">{house ? house.description : 'loading...'}</p>
        <p className="bg-gray-200 p-4 flex">
          <MdLocationOn size={22} />
          {' '}
          {house ? house.city : 'loading...'}
          ,
          {' '}
          {house ? house.address : 'loading...'}
        </p>
        <p>
          {' '}
          <span className="bg-blue-500 text-white-100 p-3 rounded-full">Reservation period</span>
          {' '}
          <span className="bg-yellow-500 text-white-100 p-3 rounded">{checkIn}</span>
          {' '}
          to
          {' '}
          <span className="bg-yellow-500 text-white-100 p-3 rounded">{checkOut}</span>
        </p>
        <DeleteReservationButton reservationId={reservationId} />
      </div>
    </div>
  );
}
ReservationCard.propTypes = {
  reservationId: PropTypes.number.isRequired,
  houseId: PropTypes.number.isRequired,
  checkIn: PropTypes.string.isRequired,
  checkOut: PropTypes.string.isRequired,
};
