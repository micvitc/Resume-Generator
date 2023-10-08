import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/address.css';
import axios from 'axios';
import { addressRoute } from '../utils/frontendRoutes';

function AddressForm() {
  let navigate = useNavigate();
  const [address, setAddress] = useState({
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddress({
      ...address,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Make a POST request to your backend API with the form data
    axios
      .post(addressRoute, {
        streetAddress: address.streetAddress,
        city: address.city,
        state: address.state,
        zipCode: address.zipCode,
        country: address.country,
      })
      .then((response) => {
        console.log('Form data successfully sent to backend:', response.added);
        navigate('/educational');
      })
      .catch((error) => {
        console.error('Error sending form data to backend:', error);
      });
  };

  return (
    <div className="App">
      <div className="AddressDetailsForm">
        <h1>Address Details Form</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <b>Street Address</b>
            <input
              type="text"
              name="streetAddress"
              value={address.streetAddress}
              onChange={handleChange}
            />
          </label>
          <label>
            <b>City</b>
            <input
              type="text"
              name="city"
              value={address.city}
              onChange={handleChange}
            />
          </label>
          <label>
            <b>State</b>
            <input
              type="text"
              name="state"
              value={address.state}
              onChange={handleChange}
            />
          </label>
          <label>
            <b>Zip Code</b>
            <input
              type="text"
              name="zipCode"
              value={address.zipCode}
              onChange={handleChange}
            />
          </label>
          <label>
            <b>Country</b>
            <input
              type="text"
              name="country"
              value={address.country}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddressForm;
