import React, { useState, useEffect } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      window.location.replace('http://localhost:3000/login/');
    } else {
      setLoading(false);
    }
  }, []);

  const onSubmit = e => {
    e.preventDefault();

    const user = {
      username: username,
      email: email,
      password: password
    };

    fetch('http://127.0.0.1:8000/api/v1/dj-rest-auth/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.key) {
          localStorage.clear();
          localStorage.setItem('token', data.key);
          window.location.replace('http://localhost:3000/');
        } else {
          setUsername('');
          setEmail('');
          setPassword('');
          localStorage.clear();
          setErrors(true);
        }
      });
  };

  return (
    <div className='container mx-auto my-16'>
      <div className='w-full flex justify-center font-fredoka'>
        {loading === false && <h1 class="font-poppins">Login</h1>}
        {errors === true && <p className='text-sm text-red-500'>Cannot log in with provided credentials</p>}
        {loading === false && (
          <form onSubmit={onSubmit} className="bg-gray-100 mt-12 p-8 shadow-lg rounded -space-y-4" >
            <div className='mb-2 p-4'>
              <label htmlFor='username'>Username:</label> <br />
              <input
                name='username'
                type='username'
                value={username}
                required
                onChange={e => setUsername(e.target.value)}
              />{' '}
            </div>
            <div className='mb-2 p-4'>
              <label htmlFor='email'>Email address:</label> <br />
              <input
                name='email'
                type='email'
                value={email}
                required
                onChange={e => setEmail(e.target.value)}
              />{' '}
            </div>
            <div className='mb-2 p-4'>
              <label htmlFor='password'>Password:</label> <br />
              <input
                name='password'
                type='password'
                value={password}
                required
                onChange={e => setPassword(e.target.value)}
              />{' '}
              </div>
            <input type='submit' value='Login' />
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;