import React, { useState, useEffect } from 'react';
import Button from '../components/button'


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
    <div className='relative container mx-auto mt-4 sm:mt-24'>
    <div className='w-full flex justify-center font-fredoka'>
      <div className="w-96 px-16 py-12 shadow-xl rounded-lg -space-y-2">
        {loading === false && <h1 class="font-poppins text-mygreen font-semibold text-lg text-center">S'inscrire</h1>}
        {errors === true && <h2>Cannot signup with provided credentials</h2>}
        <form onSubmit={onSubmit} >

        <div className='p-2'>
          <label htmlFor='username'>Username:</label>
          <input name='username' type='username' value={username} placeholder="nom d'utilisateur"
            onChange={e => setUsername(e.target.value)} required
            className={
              username.length > 5
                ?
                "appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                : "appearance-none rounded relative block w-full px-3 py-2 border border-red-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
            }            
          />
        </div>
        <div className='p-2'>
        <label htmlFor='email'>Email</label> 
        <input name='email' type='email' value={email}  placeholder="Email" onChange={e => setEmail(e.target.value)} required
          className={
            email.match(
              /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            )
              ? "appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
              : "appearance-none rounded relative block w-full px-3 py-2 border border-red-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm "
          }         
        />
        </div>
        <div className='p-2'>
        <label htmlFor='password1'>Mot de passe</label> 
        <input name='password1' type='password' value={password1} 
          onChange={e => setPassword1(e.target.value)} required placeholder="Mot de passe"
          className={
            password1.length > 7
              ?
              "appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
              : "appearance-none rounded relative block w-full px-3 py-2 border border-red-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm "
          }
        />
        </div>
        <div className='p-2'>
        <label htmlFor='password2'>Confirmez le mot de passe </label>
        <input name='password2' type='password' placeholder="Confirmez le mot de passe"
          value={password2} onChange={e => setPassword2(e.target.value)}  required
          className={
            password2.length > 7
              ?
              "appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm "
              : "appearance-none rounded relative block w-full px-3 py-2 border border-red-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm "
          }/>
        </div>
        <div className='flex flex-col justify-center m-2'>    
            <Button onClick='submit' value='SignUp' children="S'incrire" classAdd="mt-2 tracking-widest text-xl" />                   
        </div>
      </form>
      </div>
      </div>
    </div>
  );
};

export default Register;