import  { useState, useEffect } from 'react';
import axios from 'axios';

function ResumeDetails() {
  const [resumeData, setResumeData] = useState({});
  const [addressToDelete, setAddressToDelete] = useState('');

  useEffect(() => {
    // Fetch the resume data when the component mounts
    // Replace 'apiEndpoint' with your actual API endpoint
    axios.get('apiEndpoint')
      .then((response) => {
        setResumeData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching resume data:', error);
      });
  }, []);

  const handleDeleteAddress = () => {
    // Make a DELETE request to delete the address
    // Replace 'apiEndpoint' with your actual API endpoint
    axios.delete('apiEndpoint/deleteAddress', {
      data: {
        ProjectName: resumeData.ProjectName, // Provide the ProjectName
        addressId: addressToDelete, // Provide the addressId to delete
      },
    })
      .then((response) => {
        setResumeData(response.data);
        setAddressToDelete(''); // Clear the addressToDelete state
      })
      .catch((error) => {
        console.error('Error deleting address:', error);
      });
  };

  return (
    <div>
      <h2>Resume Details</h2>
      <p>Project Name: {resumeData.ProjectName}</p>
      {/* Render other resume details here */}
      <div>
        <h3>Addresses</h3>
        <ul>
          {resumeData.address && resumeData.address.map((address) => (
            <li key={address._id}>
              {address.street}, {address.city}, {address.state}, {address.country}
              <button onClick={() => setAddressToDelete(address._id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={handleDeleteAddress}>Delete Selected Address</button>
    </div>
  );
}

export default ResumeDetails;
