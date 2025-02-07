import React, { useState, useContext } from 'react';
import {FirebaseContext} from '../../store/FirebaseContext'
import Logo from '../../olx-logo.png';
import './Login.css';
import {useHistory} from 'react-router-dom'
function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const {firebase} = useContext(FirebaseContext)
  const navigate = useHistory()

  const handleLogin = (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(username, password).then(() =>{
      navigate.push('/')
    }).catch((error) => {
      alert(error.message)
    })
  }
  const handleClick = () => {
    navigate.push('/signup')
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" alt='logo' src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value)
            }}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            placeholder="Enter the Password"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <button type="button" onClick={handleClick}>SignUp</button>
      </div>
    </div>
  );
}

export default Login;