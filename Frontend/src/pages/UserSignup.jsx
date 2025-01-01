import React , {useState} from 'react';
import { Link } from 'react-router-dom';


const UserSignup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newuserData, setnewuserData] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    setnewuserData({
      fullName:{
        firstName:firstName,
        lastName:lastName
      },
      email:email,
      password:password
     });
    console.log(newuserData);
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };
  return (
    <div>
       <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-16 mb-6"
          src="https://cdn.freelogovectors.net/wp-content/uploads/2023/05/uber-logo-freelogovectors.net_.png"
          alt=""
        />
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="mt-3 flex flex-col gap-1 font-serif"
        >
          <h1 className="text-lg mb-2 font-serif">What's your name?</h1>
          <div className='flex w-full gap-2 mb-2'>
            <input
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName} 
            className="bg-gray-100 w-full rounded px-4 py-2"
            type="text"
            required
            placeholder='First Name' />
            <input 
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            className="bg-gray-100 w-full rounded px-4 py-2"
            type="text"
            required
            placeholder='Last Name' />
          </div>
          <h1 className="text-lg mb-2">Whats your email?</h1>
          <input
        
            onChange={(e) => setEmail(e.target.value)}
          value={email}
            className="bg-gray-100 mb-2 w-full rounded px-4 py-2"
            required
            type="email"
            placeholder="john@gmail.com"
          />
          <h1 className="text-lg mb-2">Enter Password</h1>
          <input
            onChange={(e) => setPassword(e.target.value)}
          value={password}
            className="bg-gray-100 mb-2 w-full rounded px-4 py-2"
            type="password"
            placeholder="Password"
          />
          <button className="mt-6 w-full bg-black rounded text-white text-xl py-1 px-3">
            Login
          </button>
          <p className="mt-2 flex justify-center mb-2">
            Already have an account ?{" "}
            <Link to="/user-login" className="text-blue-500">
              Login here.
            </Link>
          </p>
        </form>
      </div>
      <div>
        <p className='text-[12px] text-gray-600'>By proceding, you consent to get calls , messages and updates from Uber and if affiliates to the email provided. </p>
      </div>
    </div>
    </div>
  )
}

export default UserSignup