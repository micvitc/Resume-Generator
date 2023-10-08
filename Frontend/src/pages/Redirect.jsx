import React from 'react';
import { useNavigate } from 'react-router-dom';

function Redirect() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/resumepage')}>on click</button>
    </div>
  );
}

export default Redirect;
