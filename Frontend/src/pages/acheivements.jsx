import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/skill.css';
import axios from 'axios';
import { achievementsRoute } from '../utils/frontendRoutes';

function Acheivements() {
  let navigate = useNavigate();
  const [achievementFields, setAchievementFields] = useState([
    { title: '', dateAchieve: '', description: '' },
  ]);

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const fields = [...achievementFields];
    fields[index][name] = value;
    setAchievementFields(fields);
  };

  const handleAddField = () => {
    setAchievementFields([
      ...achievementFields,
      { title: '', dateAchieve: '', description: '' },
    ]);
  };

  const handleRemoveField = () => {
    if (achievementFields.length > 1) {
      const fields = [...achievementFields];
      fields.pop();
      setAchievementFields(fields);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(achievementFields);
    axios
      .post(achievementsRoute, { achievementFields })
      .then((response) => {
        console.log(response.data);
        navigate('/workexp');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const renderFields = () => {
    return achievementFields.map((field, index) => {
      return (
        <div key={index}>
          <h3>Achievement {index + 1}</h3>
          <label>
            <b>Title</b>
            <input
              type="text"
              name="title"
              value={field.title}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
          <label>
            <b>Achievement Date</b>
            <input
              type="text"
              name="dateAchieve"
              value={field.dateAchieve}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
          <label>
            <b>Description</b>
            <input
              type="text"
              name="description"
              value={field.description}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
        </div>
      );
    });
  };

  return (
    <div className="App">
      <h1>Achievements Form</h1>
      <form onSubmit={handleSubmit}>
        {renderFields()}
        <button className="field" type="button" onClick={handleAddField}>
          Add Field
        </button>
        {achievementFields.length > 1 && (
          <button type="button" onClick={handleRemoveField}>
            Remove Field
          </button>
        )}
        <button className="field" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Acheivements;
