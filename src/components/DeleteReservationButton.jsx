import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import { deleteReservation } from '../redux/reservations/reservationsSlice';

const DeleteReservationButton = (props) => {
  const dispatch = useDispatch();
  const { reservationId } = props;
  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Once canceled, you will not be able to recover this reservation!',
      icon: 'warning',
      confirmButtonColor: '#96BF01',
      showCancelButton: true,
      confirmButtonText: 'Cancel',
      cancelButtonText: 'Back',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteReservation(reservationId)).then(() => {
          Swal.fire('Canceled!', 'The Reservation has been canceled.', 'success').then(() => {
            window.location.reload();
          });
        });
      }
    });
  };
  return (
    <button
      type="button"
      onClick={handleDelete}
      className="bg-lime border-2 border-t-0 border-l-0 border-white/25 backdrop-filter backdrop-blur-lg bg-opacity-80 shadow-md hover:bg-mustard text-white rounded-full px-4 py-2 mt-4"
    >
      Cancel
    </button>
  );
};

DeleteReservationButton.propTypes = {
  reservationId: PropTypes.number.isRequired,
};
export default DeleteReservationButton;
