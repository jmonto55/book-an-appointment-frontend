import { useSelector } from 'react-redux';
import { BiLeftArrow } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { MdLocationOn, MdAdsClick } from 'react-icons/md';

const ShowHouse = () => {
  const { currentHouse } = useSelector((store) => store.houses);
  return (
    <>
      <h2 className="mt-[120px] text-center font-black text-4xl">HOUSE DETAILS</h2>
      <div className="mt-[120px] w-screen flex justify-evenly">
        <div className="bg-lime p-6 pl-12 w-[90px] rounded-r-full absolute bottom-10 left-0">
          <NavLink to="/">
            <BiLeftArrow size={20} className="cursor-pointer text-white-100" />
          </NavLink>
        </div>
        <div
          className="w-[700px] h-[400px] bg-center bg-cover"
          style={{ backgroundImage: `url(${currentHouse.photo})` }}
        />
        <div className="flex flex-col items-start justify-between min-w-[375px] h-[400px]">
          <h2 className="text-start font-black text-4xl">
            {currentHouse.name}
            <p className="font-medium text-[14px]">*$45 deposit upon any reservation</p>
          </h2>
          <p className="w-full text-center text-black-100 mt-4 text-lg bg-gray-200 p-2">{currentHouse.description}</p>
          <div className="w-full text-xl mx-auto w-full flex bg-gray-200 p-2 flex-col items-center lg:flex-row lg:justify-between text-black-100 mt-4 text-lg">
            <div className="flex gap-2 items-center">
              <MdLocationOn size={22} />
              <p>{currentHouse.city}</p>
            </div>
            <p>-</p>
            <div className="flex justify-evenly">
              <p>{currentHouse.address}</p>
            </div>
          </div>
          <div className="flex justify-center gap-2 items-center">
            $
            <span className="text-4xl font-medium">{currentHouse.night_price}</span>
            night
          </div>
          <button type="button" className="flex bg-lime text-white-100 p-2 px-4 rounded-full">
            <NavLink className="flex items-center">
              Reserve
              <MdAdsClick className="ml-4" />
            </NavLink>
          </button>
        </div>
      </div>
    </>
  );
};
export default ShowHouse;
