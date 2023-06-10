import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchHouses } from '../redux/houses/housesSlice';

export default function House() {
  const dispatch = useDispatch();
  const { housesList } = useSelector((store) => store.houses);

  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);

  return (
    <div>
      <ul className="">
        {housesList.map((house) => (
          <li key={house.id}>
            <h1 className="">{house.name}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
}
