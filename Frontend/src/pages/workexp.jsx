import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/skill.css';
import axios from 'axios';
import { experienceRoute } from '../utils/frontendRoutes';

const Workexp = () => {
  let navigate = useNavigate();
  const [workExperiences, setWorkExperiences] = useState([{ company: '', timeperiod: '', description: '' }]);

  const handleAddExperience = () => {
    setWorkExperiences([...workExperiences, { company: '', timeperiod: '', description: '' }]);
  };

  const handleDeleteExperience = () => {
    if(workExperiences.length > 1){
      setWorkExperiences(workExperiences.slice(0, -1));
    }
  };

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const newWorkExperiences = [...workExperiences];
    newWorkExperiences[index][name] = value;
    setWorkExperiences(newWorkExperiences);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post(experienceRoute, {workExperiences})
      .then(response => {
        console.log('Form data successfully sent to backend:', response.data);
        navigate('/project');
      })
      .catch(error => {
        console.error('Error sending form data to backend:', error);
      });
  };

  return (
    <div className="App">
      <h1>Work Experience</h1>
      <form onSubmit={handleSubmit}>
        {workExperiences.map((experience, index) => (
          <div key={index}>
            <label><b>Profile {index + 1}</b></label>
            <label>
              <b>Company</b>
              <input
                type="text"
                name="company"
                value={experience.company}
                onChange={(event) => handleChange(event, index)}
              />
            </label>
            <label>
              <b>Timeperiod</b>
              <input
                type="text"
                name="timeperiod"
                value={experience.timeperiod}
                onChange={(event) => handleChange(event, index)}
              />
            </label>
            <label>
              <b>Description</b>
              <input
                type="text"
                name="description"
                value={experience.description}
                onChange={(event) => handleChange(event, index)}
              />
            </label>
          </div>
        ))}
        <button className="field" type="button" onClick={handleAddExperience}>Add another experience</button>
        {workExperiences.length > 1 && (
          <button className="field" type="button" onClick={handleDeleteExperience}>Delete last experience</button>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Workexp;
