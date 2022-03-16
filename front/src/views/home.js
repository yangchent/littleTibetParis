import React, { useState, useEffect } from 'react';


function Home() {  

  const [userEmail, setUserEmail] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      window.location.replace('http://localhost:3000/login/');
    } else {
      fetch('http://127.0.0.1:8000/api/v1/dj-rest-auth/user/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(data => {
          setUserEmail(data.email);
          setLoading(false);
        });
    }
  }, []);

  return (
  <div className="container mx-auto ">
    {loading === false && (
      <div className="h-screen flex items-center justify-center">
        <h2 className='pt-16'>Hello y {userEmail}!</h2>
        <>
          <h1 className="text-8xl font-bold text-mygreen font-poppins text-center">TIBET  </h1>
          <h1 className="text-8xl font-bold text-myorange font-poppins text-center">PARIS  </h1> 
        </>
      </div>
    )}
  </div>
  );
}
export default Home;