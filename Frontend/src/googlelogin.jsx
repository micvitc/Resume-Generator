import React from 'react';
import axios from 'axios';

const GoogleLogin = () => {
  const handleLogin = () => {
    window.location.href = 'http://localhost:3001/auth/google';
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Google</button>
      {/* <button onClick={handleLogout}>Logout</button> */}
    </div>
  );
};

export default GoogleLogin;


























////////////////////////////////////////////////////////////////////////////////////////////


// import React, { useState } from 'react';
// import axios from 'axios';

// const GoogleLogin = () => {
//   const [loggedIn, setLoggedIn] = useState(false);

//   const handleLogin = () => {
//     // Redirect the user to the server's Google authentication route
//     window.location.href = 'http://localhost:3001/auth/google';
//     setLoggedIn(true);
//   };

//   const handleLogout = () => {
//     // Make a request to the server to log out the user
//     axios.get('/logout')
//       .then(() => {
//         // Clear the logged-in state and redirect to the home page
//         setLoggedIn(false);
//         window.location.href = '/';
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <div>
      
 
//         <button onClick={handleLogin}>Login with Google</button>
//     </div>
//   );
// };

// export default GoogleLogin;
