import logo from './logo.svg';
import './App.css';

import { Navigate, useNavigate } from 'react-router-dom';
import React from 'react';
import { useEffect, useState } from "react";
import Address from './pages/address';
import Personal from './pages/personal';
import Login from './pages/login';
import Home from './pages/home';
import Educational from './pages/educational';
import Skill from './pages/skills';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";


// const address = () => {
//   return <Address/>;
// };

// // const personal = () => {
// //   // return <Personal/>;
// // };



function App() {
  const [user, setUser] = useState(null);

	const getUser = async () => {
		try {
			const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });
			setUser(data.user._json);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUser();
	}, []);
  return (
    
<Router>
      {/* <Link to='/address'>Address</Link>
      <Link to='/personal'>Personal</Link>
      <Link to='/login'>login</Link> */}

      <Routes>
      <Route exact path="/" element={user ? <Home user={user} /> : <Navigate to="/login" />}/>
      <Route path='/address' element={<Address/>} />
      <Route path='/personal' element={<Personal/>} />
      <Route exact path='/login' element={user ? <Navigate to="/" /> : <Login/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/educational' element={<Educational/>} />
      <Route path='/skill' element={<Skill/>} />
    
      </Routes>
      </Router>

  );
}

export default App;



// <Router>
// <Switch>
//   <Route path="/personal" component={personal} />
//   <Route path="/address" component={address} />
// </Switch>
// </Router>