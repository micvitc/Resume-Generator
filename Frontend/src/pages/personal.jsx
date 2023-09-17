import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/personal.css';
import axios from 'axios';
import { checkResumeRoute, personalRoute } from '../utils/frontendRoutes';

const Personal = () => {
  let navigate = useNavigate();
  const [ProjectName, setPN] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');


  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'ProjectName') setPN(value);
    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'phoneNumber') setPhoneNumber(value);

  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const queryParams = {
        ProjectName,
        name,
      };
      const rspns = await axios.get(checkResumeRoute, { params: queryParams });
      const response = rspns.data;
      console.log('hello', response);
      console.log('data', response[0]);
      console.log('check', response[0]);
      if (!response[0]) {
        console.log('if');
        // Make a POST request to your backend API with the form data
        axios.post(personalRoute, {
          ProjectName,
          name,
          email,
          phoneNumber,
        });
  
        navigate('/address');
      } else {
        console.log('else');
        alert(
          'Resume name already exists please choose a different Project Name'
        );
        // window.location.reload();
      }
    } catch (error) {
      console.error('Error sending form data to backend:', error);
    }
  };

  return (
    <div className="App">
      <h1>Personal Details Form</h1>

      <form onSubmit={handleSubmit}>
        <label>
          <b>Project Name</b>
          <input
            type="text"
            name="ProjectName"
            value={ProjectName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <b>Name</b>
          <input type="text" name="name" value={name} onChange={handleChange} required/>
        </label>
        <label>
          <b>Email</b>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <b>Phone Number</b>
          <input
            type="tel"
            name="phoneNumber"
            value={phoneNumber}
            maxLength="10"
            onChange={handleChange}
            required
          />
        </label>
        
        <button type="submit">Submit</button>
      </form>

    </div>
  );
};

export default Personal;
