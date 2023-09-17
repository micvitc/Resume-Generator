import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/skill.css';
import axios from 'axios';
import { projectsRoute } from '../utils/frontendRoutes';

function Projects() {
  let navigate = useNavigate();
  const [fields, setFields] = useState([
    { project: '', duration: '', completionDate: '' },
  ]);

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const newFields = [...fields];
    newFields[index][name] = value;
    setFields(newFields);
  };

  const handleAddField = () => {
    setFields([...fields, { project: '', duration: '', completionDate: '' }]);
  };

  const handleRemoveField = () => {
    if (fields.length > 1) {
      const newFields = [...fields];
      newFields.pop();
      setFields(newFields);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fields);
    axios
      .post(projectsRoute, { fields })
      .then((response) => {
        console.log('Form data successfully sent to backend:', response.data);
        navigate('/acheivements');
      })
      .catch((error) => {
        console.error('Error sending form data to backend:', error);
      });
  };

  const renderFields = () => {
    return fields.map((field, index) => {
      return (
        <div key={index}>
          <h3>Field {index + 1}</h3>
          <label>
            <b>Project</b>
            <input
              type="text"
              name="project"
              value={field.project}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
          <label>
            <b>Duration</b>
            <input
              type="text"
              name="duration"
              value={field.duration}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
          <label>
            <b>Completion Date</b>
            <input
              type="text"
              name="completionDate"
              value={field.completionDate}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
        </div>
      );
    });
  };

  return (
    <div className="App">
      <h1>Project Details Form</h1>
      <form onSubmit={handleSubmit}>
        {renderFields()}
        <button className="field" type="button" onClick={handleAddField}>
          Add Field
        </button>
        {fields.length > 1 && (
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

export default Projects;
