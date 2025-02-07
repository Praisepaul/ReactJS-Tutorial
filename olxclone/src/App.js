import React, { useEffect, useContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import LoginPage from './Pages/Login';
import { authContext, FirebaseContext } from './store/FirebaseContext';
import Create from './Components/Create/Create';

function App() {
  const { setUser } = useContext(authContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
  })
  return (
    <div>
      <Router>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" component={LoginPage} />
          <Route path='/sellForm' component={Create} />
      </ Router>
    </div>
  );
}

export default App;