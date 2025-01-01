import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setuserData] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    setuserData({
      email: email,
      password: password});
    console.log(userData);
    setEmail('');
    setPassword('');
  }
  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
       <div>
       <img className="w-16" src="https://cdn.freelogovectors.net/wp-content/uploads/2023/05/uber-logo-freelogovectors.net_.png" alt="" />
        <form onSubmit={(e)=>{
          handleSubmit(e)
        }} className='mt-3'>
            <h1 className='text-xl mb-2'>Whats your email?</h1>
            <input className='bg-gray-100 w-full rounded px-4 py-2'
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email" 
            placeholder='john@gmail.com' />
            <h1 className='text-xl mb-2'>Enter Password</h1>
            <input className='bg-gray-100 w-full rounded px-4 py-2' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password" 
            placeholder='password' />
            <button className='mt-6 w-full bg-black rounded text-white text-xl py-1 px-3'>Login</button>
            <p className='mt-2'>New here ? <Link to="/user-signup" className="text-blue-500">Create a new account.</Link>
            </p>
        </form>
       </div>
       <div>
        <Link to='/captain-login' className='mb-4 w-full flex items-center justify-center bg-green-600 rounded text-white text-xl py-1 px-3'>Sign In as Captain</Link>
       </div>
    </div>
  )
}

export default UserLogin