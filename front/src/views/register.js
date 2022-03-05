import React, { useState, useEffect } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
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
      password1: password1,
      password2: password2
    };

    fetch('http://127.0.0.1:8000/api/v1/dj-rest-auth/registration/', {
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
          setPassword1('');
          setPassword2('');
          localStorage.clear();
          setErrors(true);
        }
      });
  };

  return (
    <div className='container mx-auto my-8'>
      <div className='w-full flex justify-center'>
        {loading === false && <h1>Signup</h1>}
        {errors === true && <h2>Cannot signup with provided credentials</h2>}
        <form onSubmit={onSubmit} className="bg-gray-100 mt-12 p-8 shadow-lg rounded -space-y-4">
        <div className='mb-2 p-4'>
          <label htmlFor='username'>Username:</label> <br />
          <input
            name='username'
            type='username'
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />{' '}
        </div>
        <div className='mb-2 p-4'>
        <label htmlFor='email'>Email address:</label> <br />
        <input
          name='email'
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />{' '}
        </div>
        <div className='mb-2 p-4'>
        <label htmlFor='password1'>Password:</label> <br />
        <input
          name='password1'
          type='password'
          value={password1}
          onChange={e => setPassword1(e.target.value)}
          required
        />{' '}
        </div>
        <div className='mb-2 p-4'>
        <label htmlFor='password2'>Confirm password:</label> <br />
        <input
          name='password2'
          type='password'
          value={password2}
          onChange={e => setPassword2(e.target.value)}
          required
        />{' '}
        </div>
        <input type='submit' value='Signup' />
      </form>
      </div>
    </div>
  );
};

export default Register;