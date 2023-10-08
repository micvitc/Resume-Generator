import logo from './logo.svg';
import './App.css';

import { Navigate, useNavigate } from 'react-router-dom';
import React from 'react';
import { useEffect, useState } from "react";
import Address from './pages/address';
import Test from './pages/test';
import Personal from './pages/personal';
import Login from './pages/login';
import Home from './pages/home';
import Educational from './pages/educational';
import Education from './pages/educational';
import Skill from './pages/skills';
import Project from './pages/project';

import Workexp from './pages/workexp';
import Resumepage from './pages/resumepage';
import Googlelogin from './googlelogin';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Acheivements from './pages/acheivements';



// const address = () => {
//   return <Address/>;
// };

// // const personal = () => {
// //   // return <Personal/>;
// // };



function App() { 
  return (
   
    
<Router>
      {/* <Link to='/address'>Address</Link>
      <Link to='/personal'>Personal</Link>
      <Link to='/login'>login</Link> */}

      <Routes>

      {/* <Route exact path="/" element={user ? <Home user={user} /> : <Navigate to="/login" />}/> */}

      <Route path='/address' element={<Address/>} />
      <Route path='/testing' element={<Test/>} />
      <Route path='/personal' element={<Personal/>} />
      <Route path='/' element={<Login/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/education' element={<Education/>} />
      {/* <Route exact path='/login' element={user ? <Navigate to="/" /> : <Login/>} /> */}
      <Route path='/educational' element={<Educational/>} />
      <Route path='/skills' element={<Skill/>} />
      <Route path='/project' element={<Project/>} />
      <Route path='/acheivement' element={ <Acheivements/> } />
      <Route path='/workexp' element={<Workexp/>} />
      <Route path='/resumepage' element={<Resumepage/>} />
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