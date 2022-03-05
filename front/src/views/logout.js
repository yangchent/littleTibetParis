import React, { useState, useEffect, Fragment } from 'react';

const Logout = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') == null) {
      window.location.replace('http://localhost:3000/login/');
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogout = e => {
    e.preventDefault();
    fetch('http://127.0.0.1:8000/api/v1/dj-rest-auth/logout/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`
      }

    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        localStorage.clear();
        window.location.replace('http://localhost:3000/login/');
      });
  };

  return (
    <div className='container mx-auto mt-28'>
      {loading === false && (
        
            <div className="bg-gray-200 ">
                <h1>Are you sure you want to logout?</h1>
                <input type='submit' value='Logout' onClick={handleLogout} />
            </div>
        
      )}
    </div>
  );
};

export default Logout;