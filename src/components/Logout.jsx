import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../redux/logout/logoutSlice';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  return (
    <button onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
