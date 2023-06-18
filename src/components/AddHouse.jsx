import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { BiLeftArrow } from 'react-icons/bi';
import { NavLink, useNavigate } from 'react-router-dom';
import { MdAdsClick } from 'react-icons/md';
import PropTypes from 'prop-types';
import { createHouse } from '../redux/houses/housesSlice';
import houseImage from '../assets/house.jpg';

const AddHouse = (props) => {
  const { authorized } = props;
  console.log('add house authorized', authorized);
  const navigate = useNavigate();
  useEffect(() => {
    if (!authorized) {
      navigate('/');
    }
  }, [authorized, navigate]);
  const dispatch = useDispatch();
  const initialFormData = [
    { name: 'name', value: '' },
    { name: 'address', value: '' },
    { name: 'description', value: '' },
    { name: 'city', value: '' },
    { name: 'photo', value: '' },
    { name: 'night_price', value: '' },
  ];
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const successMessageRef = useRef(null);

  const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => prevFormData.map((field) => (
      field.name === name ? { ...field, value } : field)));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const houseData = formData.reduce(
      (data, field) => ({ ...data, [field.name]: field.value }),
      {},
    );
    dispatch(createHouse(houseData));
    setFormData(initialFormData);
    setIsSubmitted(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (successMessageRef.current && !successMessageRef.current.contains(event.target)) {
        setIsSubmitted(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  if (!authorized) {
    return (<></>);
  }

  return (
    <div className="relative w-full bg-center bg-cover" style={{ backgroundImage: `url(${houseImage})` }}>
      <div className="hover:bg-opacity-100 shadow-lg z-20 bg-gray-100 p-6 pl-4 md:pl-12 rounded-r-full absolute bottom-14 md:bottom-10 left-0 border-2 border-t-0 border-l-0 border-white/25 backdrop-filter backdrop-blur-lg bg-opacity-70">
        <NavLink to="/home">
          <BiLeftArrow size={20} className="cursor-pointer text-white" />
        </NavLink>
      </div>
      <div className="p-8 h-screen w-full flex flex-col justify-center gap-14 bg-lime bg-opacity-80">
        <h2 className="font-black uppercase mx-auto text-center text-4xl text-white tracking-wider">ADD A NEW HOUSE</h2>
        <form
          onSubmit={handleSubmit}
          className="border-2 border-t-0 border-l-0 border-white/25 backdrop-filter backdrop-blur-lg bg-opacity-70 shadow-xl flex flex-col items-end container mx-auto px-6 py-8 max-w-md mt-6 bg-gray-100 rounded-md"
        >
          {formData.map((field) => (
            <input
              key={field.name}
              type={field.name === 'night_price' ? 'number' : 'text'}
              name={field.name}
              placeholder={field.name === 'night_price' ? 'Price per Night' : capitalize(field.name)}
              value={field.value}
              onChange={handleChange}
              className="mt-2 w-full p-2 border border-slate-300 rounded text-sm shadow-sm
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
              required
              minLength={field.name === 'name' || field.name === 'address' || field.name === 'city' ? 3 : undefined}
              maxLength={field.name === 'name' || field.name === 'city' ? 16 : undefined}
              min={field.name === 'night_price' ? 0 : undefined}
              step={field.name === 'night_price' ? 1 : undefined}
              pattern={field.name === 'night_price' ? '[0-9]*' : undefined}
            />
          ))}
          {isSubmitted && (
          <p ref={successMessageRef} className="text-green-500 mt-2">
            Successfully created!
          </p>
          )}
          <button
            type="submit"
            className="bg-lime rounded-full px-6 py-2 mt-6 color text-white flex items-center"
          >
            Submit
            <MdAdsClick className="ml-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

AddHouse.propTypes = {
  authorized: PropTypes.bool.isRequired,
};
export default AddHouse;
