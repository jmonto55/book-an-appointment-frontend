import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { fetchHouses } from '../redux/houses/housesSlice';
import { deleteHouse } from '../redux/houses/deleteHouseSlice';

const DeleteHouse = () => {
  const dispatch = useDispatch();
  const { housesList } = useSelector((store) => store.houses);

  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);

  const handleDelete = (houseId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this house!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteHouse(houseId)).then(() => {
          Swal.fire('Deleted!', 'The house has been deleted.', 'success');
        });
      }
    });
  };

  return (
    <div>
      <ul>
        {housesList.map((house) => (
          <li key={house.id}>
            <h1>{house.name}</h1>
            <img src={house.photo} alt={house.name} />
            <p>{house.description}</p>
            <p>{house.price}</p>
            <p>{house.address}</p>
            <p>{house.city}</p>
            <button type="button" onClick={() => handleDelete(house.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteHouse;
