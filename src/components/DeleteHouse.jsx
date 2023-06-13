import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchHouses } from '../redux/houses/housesSlice';

const DeleteHouse = () => {
  const dispatch = useDispatch();
  const { housesList } = useSelector((store) => store.houses);

  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);

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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteHouse;
