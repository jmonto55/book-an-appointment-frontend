import PropTypes from 'prop-types';
import { MdLocationOn } from 'react-icons/md';
import { RxDotFilled } from 'react-icons/rx';

const House = ({ house }) => (
  <div className="group hover:cursor-pointer hover:shadow-lg min-w-[250px] rounded-md hover:scale-105 duration-500 pb-6 w-full flex flex-col items-center">
    <div
      className="group-hover:rounded-none group-hover:w-full lg:group-hover:w-[370px] w-[220px] h-[220px] lg:w-[370px] lg:h-[370px] rounded-full bg-center bg-cover duration-500"
      style={{ backgroundImage: `url(${house.photo})` }}
    />
    <h2 className="text-center mt-10 font-black text-2xl tracking-wider">{house.name}</h2>
    <ul className="flex top-4 justify-center py-2 list-none">
      {Array.from({ length: 10 }, (_, i) => (
        <li className="text-sm text-gray-100" key={i}><RxDotFilled /></li>
      ))}
    </ul>
    <p className="text-center text-gray-100 mt-4">{house.description}</p>
    <div className="mx-auto w-full max-w-[320px] flex flex-col items-center lg:flex-row lg:justify-between text-gray-100 mt-4 text-lg">
      <div className="flex gap-2 items-center">
        <MdLocationOn size={22} />
        <p>{house.city}</p>
      </div>
      <p>-</p>
      <div className="flex justify-evenly">
        <p>{house.address}</p>
      </div>
    </div>
  </div>
);

House.propTypes = {
  house: PropTypes.shape({
    photo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
};

export default House;
