import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchHouses } from '../redux/houses/housesSlice';
import House from './House';

export default function HousesList() {
  const dispatch = useDispatch();
  const { housesList } = useSelector((store) => store.houses);

  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);

  return (
    <div className="w-screen h-screen flex flex-col justify-center">
      <h1 className="text-center text-3xl font-black tracking-wider">LATEST HOUSES</h1>
      <p className="text-center text-gray-100 text-md font-medium mt-4">Please select a House</p>
      <ul className="">
        {housesList.map((house) => (
          <li key={house.id}>
            <House />
          </li>
        ))}
      </ul>
    </div>
  );
}
