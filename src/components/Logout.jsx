import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, NavLink } from 'react-router-dom';
import { BiLeftArrow } from 'react-icons/bi';
import { logoutUser } from '../redux/logout/logoutSlice';
import houseImage from '../assets/house.jpg';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  return (
    <div className="relative w-full bg-center bg-cover" style={{ backgroundImage: `url(${houseImage})` }}>
      <div className="z-50 hover:bg-opacity-100 shadow-lg bg-mustard p-6 pl-4 md:pl-12 rounded-r-full absolute top-14 md:top-10 left-0 border-2 border-t-0 border-l-0 border-white/25 backdrop-filter backdrop-blur-lg bg-opacity-70">
        <NavLink to="/home">
          <BiLeftArrow size={20} className="cursor-pointer text-white" />
        </NavLink>
      </div>
      <div className="p-8 h-screen w-full flex flex-col justify-center gap-2 bg-gray-100 bg-opacity-80">
        <h2 className="font-black uppercase mx-auto text-center text-3xl text-white tracking-wider">Log out?</h2>
        <div className="mx-auto w-full flex justify-center gap-10">
          <NavLink
            type="button"
            to="/home"
            className="mt-4 text-lg border-2 border-t-0 border-l-0 border-white/25 backdrop-filter backdrop-blur-lg bg-opacity-80 shadow-md hover:bg-opacity-100 bg-gray-100 rounded-full px-4 py-2 color text-white flex justify-evenly items-center w-24"
          >
            Cancel
          </NavLink>
          <button
            type="button"
            onClick={handleLogout}
            className="mt-4 text-lg border-2 border-t-0 border-l-0 border-white/25 backdrop-filter backdrop-blur-lg bg-opacity-80 shadow-md hover:bg-opacity-100 bg-mustard rounded-full px-4 py-2 color text-white flex justify-evenly items-center w-24"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutButton;
