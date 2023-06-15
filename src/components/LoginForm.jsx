import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/login/loginSlice';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login({ email, password }))
      .unwrap()
      .then((token) => {
        // Handle successful login
        console.log('Login successful');
      })
      .catch((error) => {
        // Handle login error
        console.error('Login error:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;
