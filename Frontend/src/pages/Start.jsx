import React from 'react'
import {Link} from 'react-router-dom'

const Start = () => {
  return (
    <div>
        <div className='bg-[url(assets\Uber.jpg)] bg-cover bg-center bg-opacity-85 h-screen pt-5 p w-full  flex justify-between flex-col'>
            <img className="w-16 ml-7" src="https://cdn.freelogovectors.net/wp-content/uploads/2023/05/uber-logo-freelogovectors.net_.png" alt="" />
            <div className='bg-gradient-to-r from-white to-transparent py-6 px-8'>
            <h3 className='text-3xl mb-3 font-bold'>Get Started with Uber</h3>
            <Link to='/user-login' className='text-white bg-black w-full py-3 rounded mt-3 flex justify-center font-semibold text-xl'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Start;