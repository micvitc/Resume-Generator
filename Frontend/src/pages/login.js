import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './css/login.css';


function Login() {
  const googleAuth = () => {
		window.open(
			`${process.env.REACT_APP_API_URL}/auth/google/callback`,
			"_self"
		);
	};
  const [logvalue, setlogvalue] = useState(0);
  function baba() {
    <login2 />;
    console.log(logvalue);
  }
  return (
    <div className="body-login">
    <div className="maindiv">
      {/* <h1>resume generator</h1> */}
      <div className="heading">
        <h1 className="Title">Resume Generator</h1>
      </div>
      <table border="1" className="table">
        <tr>
          <td rowspan="2">
            <div className="login">
              <h1>
                <strong className="signin">
                  <u>sign up</u>
                </strong>
              </h1>

              <form className="form">

                  <button onclick={baba} type="submit" className="googlebutton">
                    <img
                      className="googleimage"
                      src="https://cdn-icons-png.flaticon.com/512/2875/2875331.png"
                      alt="google"
                      // icon="fa-brands fa-google"
                    />
                  </button>
                  {/* <p>google</p> */}

              </form>
            </div>
          </td>
          <td rowspan="2">
            <div className="sideimage">
              <img
                className="Meher"
                src="https://images.websitebuilderexpert.com/wp-content/uploads/2018/10/Best-Online-Resume-Builder-Websites-2018-Featured-Image.png "
              />
            </div>
          </td>
        </tr>
      </table>
    </div>
    </div>

  );
}

export default Login;