import logo from '../logo.svg';
import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './css/home.css';
import { click } from '@testing-library/user-event/dist/click';
// import Input from "./input";
// import google(1).png from "./google(1).png"
// import login2 from "./Login2"

function Home() {
  
  const [page, setPage] = useState("");
  function google() {
    setPage();
  }
  return (
    <div className="row">
      <div className="column">
        <table>
          <tr>
            <td>
              <div className="div2">
                <img
                  className="googleimg-1"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCy2hlj1QlYnZHuPvRDQ6ypitFV3HHEFiQQk7Ex_Es5mcCiIJzDxV3cRGs-kd48IjYIo8&usqp=CAU"
                  alt="google"
                />

                <a className="createnew" href="Createnew.html">
                  <h3>Create new Resume</h3>
                </a>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div class="column">
        <table>
          <tr>
            <td>
              <div className="div2">
                <img
                  className="googleimg-2"
                  src="https://resumegenius.com/wp-content/uploads/update-resume-1.png "
                  alt="google"
                />

                <a className="createnew" href="Upgrade.html">
                  <h3>Update Resume</h3>
                </a>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Home;