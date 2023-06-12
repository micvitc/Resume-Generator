import logo from '../logo.svg';
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './css/skill.css';
import { click } from '@testing-library/user-event/dist/click';

// let navigate = useNavigate();


const Personal = () => {
  let navigate = useNavigate();
  const [skill, setSkill] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSkill(value);
  };

  const handleSubmit = (event) => {
    navigate("/address");
    event.preventDefault();
  };

 

  return (
    <div className="App">
      <h1>Personal Details Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <b>skill</b>
          <input
            type="text"
            name="Skill"
            value={skill}
            onChange={handleChange}
          />
        </label>
        <button  type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Personal;
