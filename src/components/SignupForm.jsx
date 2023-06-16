import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../redux/signup/signupSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const SignupForm = (props) => {
  const { authorized } = props;
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const navigate = useNavigate();
  
  useEffect(() => {
    if (authorized) {
      navigate('/home');
    }
  }, [authorized, navigate]);
  const handleSubmit = (e) => {
    e.preventDefault();
    
    dispatch(signup({ name, email, password, passwordConfirmation }))
      .unwrap()
      .then((token) => {
        // Handle successful login
        localStorage.setItem('token', token);
        console.log('signup successful');
        navigate('/login');
      })
      .catch((error) => {
        // Handle login error
        console.error('Signup error:', error);
      });
      
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <input
        type="password"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        placeholder="Password Confirmation"
      />
      <button type="submit">Sign up</button>
    </form>
  );
};

export default SignupForm;
