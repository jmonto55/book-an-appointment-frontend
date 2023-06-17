import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logoutUser } from '../redux/logout/logoutSlice';

const LogoutButton = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authorized } = props;
  useEffect(
    () => {
      if (!authorized) {
        navigate('/');
      }
    },
  );
  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  return (
    <button type="button" onClick={handleLogout}>
      Logout
    </button>
  );
};
LogoutButton.propTypes = {
  authorized: PropTypes.bool.isRequired,
};
export default LogoutButton;
