import React from 'react';
import Board from '../../Components/Board/Board';
import SignIn from '../../Components/SignIn/SignIn';
import './Login.css';

const Login = () => {
  return (
    <div>
      <Board className='Board'/>
      <SignIn className='SignIn'/>
    </div>
  )
}

export default Login
