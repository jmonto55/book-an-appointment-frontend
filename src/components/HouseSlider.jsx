import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchHouses } from '../redux/houses/housesSlice';

const HouseSlider = () => {
  const dispatch = useDispatch();
  const { housesList } = useSelector((store) => store.houses);

  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);
  return (
    <>
      {housesList.length > 0 && (
      <div
        className="w-[220px] h-[220px] md:w-[370px] md:h-[370px] rounded-full bf-center bg-cover duration-500"
        style={{ backgroundImage: `url(${housesList[0].photo})` }}
      />
      )}
    </>
  );
};

export default HouseSlider;
