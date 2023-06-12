import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { RxDotFilled } from 'react-icons/rx';
import { fetchHouses } from '../redux/houses/housesSlice';

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
    <div className="flex w-full justify-between items-center">
      <div className="p-6 md:pl-12 bg-lime text-white-100 rounded-r-full">
        <BiLeftArrow onClick={prevSlide} size={20} className="cursor-pointer" />
      </div>
      <div>
        <ul className="flex gap-8 md:gap-20">
          {housesList.length > 0 && (
          <>
            <li>
              <div
                className="w-[220px] h-[220px] lg:w-[370px] lg:h-[370px] rounded-full bf-center bg-cover duration-500"
                style={{ backgroundImage: `url(${housesList[indexOne].photo})` }}
              />
              <h2 className="text-center mt-10 font-black text-2xl">{housesList[indexOne].name}</h2>
              <ul className="flex top-4 justify-center py-2 list-none mb-20">
                {Array.from({ length: 10 }, (_, i) => (
                  <li className="text-sm text-gray-100" key={i}><RxDotFilled /></li>
                ))}
              </ul>
            </li>
            <li className="hidden sm:block">
              <div
                className="w-[220px] h-[220px] lg:w-[370px] lg:h-[370px] rounded-full bf-center bg-cover duration-500"
                style={{ backgroundImage: `url(${housesList[indexTwo].photo})` }}
              />
              <h2 className="text-center mt-10 font-black text-2xl">{housesList[indexTwo].name}</h2>
              <ul className="flex top-4 justify-center py-2 list-none mb-20">
                {Array.from({ length: 10 }, (_, i) => (
                  <li className="text-sm text-gray-100" key={i}><RxDotFilled /></li>
                ))}
              </ul>
            </li>
            <li className="hidden xl:block">
              <div
                className="w-[220px] h-[220px] lg:w-[370px] lg:h-[370px] rounded-full bf-center bg-cover duration-500"
                style={{ backgroundImage: `url(${housesList[indexThree].photo})` }}
              />
              <h2 className="text-center mt-10 font-black text-2xl">{housesList[indexThree].name}</h2>
              <ul className="flex top-4 justify-center py-2 list-none mb-20">
                {Array.from({ length: 10 }, (_, i) => (
                  <li className="text-sm text-gray-100" key={i}><RxDotFilled /></li>
                ))}
              </ul>
            </li>
          </>
          )}
        </ul>
      </div>
      <div className="p-6 md:pr-12  bg-lime text-white-100 rounded-l-full">
        <BiRightArrow onClick={nextSlide} size={20} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default HouseSlider;
