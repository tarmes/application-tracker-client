import React, { useState } from 'react';
import axios from 'axios';

const initialRegisterFormValues = {
   username: '',
   password: '',
   role: 'user'
}

function Register() {

   const [registerFormValues, setRegisterFormValues] = useState(initialRegisterFormValues);

   const handleChange = e => {
      const { name, value } = e.target;
      setRegisterFormValues({ ...registerFormValues, [name] : value })
   }

   const handleSubmit = e => {
      e.preventDefault();
      const newUser = {
         username: registerFormValues.username.trim(),
         password: registerFormValues.password.trim(),
         role: registerFormValues.role
      }
   }

   return (
      <div className='register-form-container'>
         <form onSubmit={handleSubmit}>
            <label htmlFor='username'>Username </label>
               <input 
                  type='text'
                  name='username'
                  placeholder=' enter your desired username'
                  onChange={handleChange}
                  value={registerFormValues.username}
               />
            <label htmlFor='password'>Password </label>
               <input 
                  type='text'
                  name='password'
                  placeholder=' enter your desired password'
                  onChange={handleChange}
                  value={registerFormValues.password}
               />
            <label className='register-selct'>
               Choose Your Role:
                  <select value={registerFormValues.role} onChange={handleChange} name='role'>
                     <option value='user'>User</option>
                     <option value='admin'>Admin</option>
                  </select>
            </label>
            <button>Register</button>
         </form>
      </div>
   )
};

export default Register;