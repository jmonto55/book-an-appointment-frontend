import { useSelector } from 'react-redux';
import { BiLeftArrow } from 'react-icons/bi';
import { NavLink, useNavigate } from 'react-router-dom';
import { MdLocationOn, MdAdsClick } from 'react-icons/md';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const ShowHouse = (props) => {
  const { currentHouse } = useSelector((store) => store.houses);
  const { authorized } = props;
  const navigate = useNavigate();
  useEffect(() => {
    if (!authorized) {
      navigate('/');
    }
  }, [authorized, navigate]);
  if (!authorized) {
    return (<></>);
  }

  return (
    <div type="button" className="w-full relative">
      <h2 className="mt-[120px] md:mt-[70px] text-center font-black text-4xl tracking-wider">HOUSE DETAILS</h2>
      <div className="pb-28 mx-auto xl:mt-[140px] mt-6 max-w-[1840px] flex w-full flex-col items-center xl:flex-row justify-evenly">
        <div className="hover:bg-opacity-100 z-20 bg-lime p-6 pl-4 md:pl-12 rounded-r-full absolute bottom-8 md:bottom-10 left-0 border-2 border-t-0 border-l-0 border-white/25 backdrop-filter backdrop-blur-lg bg-opacity-80 shadow-lg">
          <NavLink to="/home">
            <BiLeftArrow size={20} className="cursor-pointer text-white-100" />
          </NavLink>
        </div>
        <div
          className="mt-4 xl:mt-0 w-[370px] h-[185px] sm:w-[550px] sm:h-[275px] xl:w-[700px] xl:h-[400px] bg-center bg-cover rounded-lg"
          style={{ backgroundImage: `url(${currentHouse.photo})` }}
        />
        <div className="flex flex-col items-start justify-between min-w-[375px] max-w-[700px] h-[400px]">
          <h2 className="mt-8 xl:mt-0 text-start font-black text-4xl tracking-wider">
            {currentHouse.name}
            <p className="font-medium text-[14px]">*$45 deposit upon any reservation.</p>
          </h2>
          <p className="w-full text-start text-black-100 mt-4 text-lg bg-gray-200 p-2">{currentHouse.description}</p>
          <div className="w-full mx-auto flex bg-gray-200 p-2 items-center lg:flex-row lg:justify-between text-black-100 mt-4 text-lg">
            <div className="flex gap-2 items-center">
              <MdLocationOn size={22} />
              <p>{currentHouse.city}</p>
            </div>
            <p>-</p>
            <div className="flex justify-evenly">
              <p>{currentHouse.address}</p>
            </div>
          </div>
          <div className="flex ml-auto justify-center gap-2 items-center">
            $
            <span className="text-4xl font-medium">{currentHouse.night_price}</span>
            night
          </div>

          <button type="button" onClick={() => navigate(`/reserve?id=${currentHouse.id}`)} className="ml-auto flex bg-lime text-white-100 p-2 px-4 rounded-full">
            <NavLink className="flex items-center">
              Reserve
              <MdAdsClick className="ml-4" />
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};
ShowHouse.propTypes = {
  authorized: PropTypes.bool.isRequired,
};
export default ShowHouse;
