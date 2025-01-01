import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home.jsx';
import CaptainLogin from './pages/CaptainLogin.jsx';
import CaptainSignup from './pages/CaptainSignup.jsx';
import UserLogin from './pages/UserLogin.jsx';
import UserSignup from './pages/UserSignup.jsx';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/captain-login' element={<CaptainLogin/>} />
      <Route path='/captain-signup' element={<CaptainSignup/>} />
      <Route path='/user-login' element={<UserLogin/>} />
      <Route path='/user-signup' element={<UserSignup/>} />
    </Routes>
  )
}

export default App;