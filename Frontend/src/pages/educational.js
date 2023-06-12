import logo from '../logo.svg';
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './css/educational.css';
import { click } from '@testing-library/user-event/dist/click';

// let navigate = useNavigate();


const Educational = () => {
  let navigate = useNavigate();
  const [name, setName] = useState('');
  const [degree, setDegree] = useState('');
  const [Percentage, setPercentage] = useState('');
  const [passingyear, setpassingyear] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setName(value);
  };

  const handleSubmit = (event) => {
    navigate("/address");
    event.preventDefault();


  };

 

  return (
    <div className="App">
      <h1>Educational Details Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <b>Institute</b>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>
        <label>
          <b>Degree</b>
          <input
            type="text"
            name="Degree"
            value={degree}
            onChange={handleChange}
          />
        </label>
        <label>
          <b>Percentage</b>
          <input
            type="number"
            name="Percentage"
            value={Percentage}
            onChange={handleChange}
          />
        </label>

        <label>
          <b>Year Of Passing</b>
          <input
            type="number"
            name="passing-year"
            value={passingyear}
            onChange={handleChange}
          />
        </label>
        <button  type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Educational;
