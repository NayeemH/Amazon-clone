import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import logo from './logo2.png'; // with import

function Login() {
  return (
    <div className='login'>
      <Link to='/'>
        <img className='login__logo' src={logo}></img>
      </Link>
      <div className='login__container'>
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input type='text' />
          <h5>Password</h5>
          <input type='password' />
          <button>Sign In</button>
        </form>
        <p>
          By singing-in you agree to Ekhenei's Conditions of use $ sale.Please
          see our privacy notice,our cookies notice and our internet based ads
          notice
        </p>
        <button>Create Your Ekhenei's Account</button>
      </div>
    </div>
  );
}

export default Login;
