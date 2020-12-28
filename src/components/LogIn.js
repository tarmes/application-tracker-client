import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const initialLoginFormValues = {
   username: '',
   password: ''
}

function LogIn() {

   const [loginFormValues, setLoginFormValues] = useState(initialLoginFormValues);

   const { push } = useHistory();

   const handleChange = e => {
      const { name, value } = e.target;
      setLoginFormValues({ ...loginFormValues, [name] : value })
   }

   const handleSubmit = e => {
      e.preventDefault();
      const userValues = {
         username: loginFormValues.username.trim(),
         password: loginFormValues.password.trim()
      }
   }

   return (
      <div className='login-form-container'>
         <form onSubmit={handleSubmit}>
            <label htmlFor='username'>Username</label>
               <input 
                  type='text'
                  name='username'
                  placeholder='enter your desired username'
                  onChange={handleChange}
                  value={loginFormValues.username}
               />
            <label htmlFor='password'>Password</label>
               <input 
                  type='text'
                  name='password'
                  placeholder='enter your password'
                  onChange={handleChange}
                  value={loginFormValues.password}
               />
            <button>Log In</button>
         </form>
         <a href='/register'>New User?</a>
      </div>
   )
};

export default LogIn;