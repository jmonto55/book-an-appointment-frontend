import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchHouses } from '../redux/houses/housesSlice';
import { deleteHouse } from '../redux/houses/deleteHouseSlice';

const DeleteHouse = () => {
  const dispatch = useDispatch();
  const { housesList } = useSelector((store) => store.houses);

  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);

  const handleDelete = (houseId) => {
    dispatch(deleteHouse(houseId));
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
