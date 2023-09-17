import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/educational.css';
import axios from 'axios';
import { educationRoute } from '../utils/frontendRoutes';

const test = () => {
  let navigate = useNavigate();
  const [educationFields, setEducationFields] = useState([
    { name: '', degree: '', percentage: '', passingYear: '' },
  ]);

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const fields = [...educationFields];
    fields[index][name] = value;
    setEducationFields(fields);
  };

  const handleAddField = () => {
    setEducationFields([
      ...educationFields,
      { name: '', degree: '', percentage: '', passingYear: '' },
    ]);
  };

  const handleRemoveField = () => {
    if (educationFields.length > 1) {
      const fields = [...educationFields];
      fields.pop();
      setEducationFields(fields);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Make a POST request to your backend API with the form data
    axios
      .post(educationRoute, {
        educationFields,
      })
      .then((response) => {
        console.log('Form data successfully sent to backend:', response.data);
        navigate('/skills');
      })
      .catch((error) => {
        console.error('Error sending form data to backend:', error);
      });
  };

  const renderFields = () => {
    return educationFields.map((field, index) => {
      return (
        <div key={index}>
          <h3>Field {index + 1}</h3>
          <label>
            <b>Institute</b>
            <input
              type="text"
              name="name"
              value={field.name}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
          <label>
            <b>Degree</b>
            <input
              type="text"
              name="degree"
              value={field.degree}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
          <label>
            <b>Percentage</b>
            <input
              type="number"
              name="percentage"
              value={field.percentage}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
          <label>
            <b>Year Of Passing</b>
            <input
              type="number"
              name="passingYear"
              value={field.passingYear}
              onChange={(e) => handleChange(e, index)}
            />
          </label>
        </div>
      );
    });
  };

  return (
    <div className="App">
      <h1>Educational Details Form</h1>
      <form onSubmit={handleSubmit}>
        {renderFields()}
        <button className="field" type="button" onClick={handleAddField}>
          Add Field
        </button>
        {educationFields.length > 1 && (
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
};

export default test;
