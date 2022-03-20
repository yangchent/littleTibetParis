import React, { useState, useEffect } from 'react';


function Home() {  

  const [userEmail, setUserEmail] = useState(false);
  const [isLoggedIn, setIsloggedIn] = useState(false);
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
            setUserEmail(data.email)
            setIsloggedIn(true);
            setLoading(false);
            console.log(data.email)
          });
      }
  }, []);

  return (
  <div className="relative container mx-auto ">
    {loading === false && (
      <div className="h-screen flex items-center justify-center">
        
          <h1 className="text-5xl sm:text-8xl font-bold text-mygreen font-poppins text-center">TIBET  </h1>
          <h1 className="text-5xl sm:text-8xl font-bold text-myorange font-poppins text-center">PARIS  </h1> 
      
      </div>
    )}
  </div>
  );
}
export default Home;