import logo from '../logo.svg';
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './css/personal.css';
import { click } from '@testing-library/user-event/dist/click';

// let navigate = useNavigate();


const Personal = () => {
  let navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setName(value);
  };

  const handleSubmit = (event) => {
    navigate("/address");
    event.preventDefault();

    console.log(name, email, password);
  };

 

  return (
    <div className="App">
      <h1>Personal Details Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <b>Name</b>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>
        <label>
          <b>Email</b>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          <b>Password</b>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button  type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Personal;
