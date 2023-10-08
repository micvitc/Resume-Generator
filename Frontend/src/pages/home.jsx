import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './css/home.css';

function Home() {


  const location = useLocation();
  const user = queryString.parse(location.search);

  useEffect(() => {
    // Access the user details here
    console.log(user);
  }, []);


  const navigate = useNavigate();

  const handleLogout = async () => {
    window.location.href = 'http://localhost:3001/logout';
  };
  const createresume = async () => {
    
    navigate('/personal');
  };

  return (
    <div className="container">
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>

      <div className="row">
        <div className="x">
          {/* <div className="card" onClick={() => console.log("Create new Resume clicked")}> */}
          <div className="card" onClick={createresume}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCy2hlj1QlYnZHuPvRDQ6ypitFV3HHEFiQQk7Ex_Es5mcCiIJzDxV3cRGs-kd48IjYIo8&usqp=CAU"
              className="card-img-top"
              alt="google"
            />
            <div className="card-body">
              <h3>Create new Resume</h3>
            </div>
          </div>
        </div>
        <div className="x">
          <div className="card" onClick={() => console.log("Update Resume clicked")}>
            <img
              src="https://resumegenius.com/wp-content/uploads/update-resume-1.png"
              className="card-img-top"
              alt="google"
            />
            <div className="card-body">
              <h3>Update Resume</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;