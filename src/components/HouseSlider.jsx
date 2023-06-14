import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { fetchHouses, fetchHouse } from '../redux/houses/housesSlice';
import House from './House';

const HouseSlider = () => {
  const dispatch = useDispatch();
  const { housesList } = useSelector((store) => store.houses);

  const [indexOne, setIndexOne] = useState(0);
  const [indexTwo, setIndexTwo] = useState(1);
  const [indexThree, setIndexThree] = useState(2);

  const nextSlide = () => {
    setIndexOne((indexOne - 1 + housesList.length) % housesList.length);
    setIndexTwo((indexTwo - 1 + housesList.length) % housesList.length);
    setIndexThree((indexThree - 1 + housesList.length) % housesList.length);
  };

  const prevSlide = () => {
    setIndexOne((indexOne + 1) % housesList.length);
    setIndexTwo((indexTwo + 1) % housesList.length);
    setIndexThree((indexThree + 1) % housesList.length);
  };

  useEffect(() => {
    dispatch(fetchHouses());
  }, [dispatch]);

  return (
    <div className="flex w-full justify-between">
      <div className=" mt-36 h-[70px] p-6 md:pl-12 bg-lime text-white-100 rounded-r-full">
        <BiLeftArrow onClick={prevSlide} size={20} className="cursor-pointer" />
      </div>
      <div>
        <ul className="flex gap-2 md:gap-14">
          {housesList.length > 0 && (
            <>
              <NavLink
                to="/house"
                onClick={() => {
                  dispatch(fetchHouse(housesList[indexOne].id));
                }}
              >
                <House house={housesList[indexOne]} />
              </NavLink>
              <NavLink
                to="/house"
                className="hidden sm:block"
                onClick={() => {
                  dispatch(fetchHouse(housesList[indexTwo].id));
                }}
              >
                <House house={housesList[indexTwo]} />
              </NavLink>
              <NavLink
                to="/house"
                className="hidden tablet:block"
                onClick={() => {
                  dispatch(fetchHouse(housesList[indexThree].id));
                }}
              >
                <House house={housesList[indexThree]} />
              </NavLink>
            </>
          )}
        </ul>
      </div>
      <div className="h-[70px] mt-36 p-6 md:pr-12  bg-lime text-white-100 rounded-l-full">
        <BiRightArrow onClick={nextSlide} size={20} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default HouseSlider;
