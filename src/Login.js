import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import logo from './logo2.png'; // with import
import { auth } from 'firebase';
import firebase from 'firebase';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (event) => {
    event.preventDefault(); ///this stop the refresh
    //do the login logic
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in ,redirect to home
        history.push('/');
      })
      .catch((e) => alert(e.message));
  };
  const register = (event) => {
    event.preventDefault(); ///this stop the refresh
    //do the login logic
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //created user and logged in..
        alert('Succesfully Create your account');
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className='login'>
      <Link to='/'>
        <img className='login__logo' src={logo} alt=''></img>
      </Link>
      <div className='login__container'>
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type='email'
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type='password'
          />
          <button onClick={login} type='submit' className='login__signInButton'>
            Sign In
          </button>
        </form>
        <p>
          By singing-in you agree to Ekhenei's Conditions of use $ sale.Please
          see our privacy notice,our cookies notice and our internet based ads
          notice
        </p>
        <button onClick={register} className='login__registerButton'>
          Create Your Ekhenei's Account
        </button>
      </div>
    </div>
  );
}

export default Login;
