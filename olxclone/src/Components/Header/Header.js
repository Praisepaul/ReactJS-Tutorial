import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { authContext, FirebaseContext } from '../../store/FirebaseContext';


function Header() {
  const history = useHistory();
  const {user} = useContext(authContext)
  const {firebase} = useContext(FirebaseContext)
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName" onClick={() => {
          history.push('/')
        }} style={{cursor: 'pointer'}}>
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span style={{cursor: 'pointer'}}>{user ? `Welcome, ${user.displayName}` :  <button type='button' onClick={() => {
            history.push('/login')
          }}> Login </button> }</span>
          <hr />
        </div>
          {user && <span onClick={() => {
            firebase.auth().signOut()
            history.push('/')
          }} style={{cursor: 'pointer'}}>Logout</span> }

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent" onClick={() => {
            history.push('/sellForm')
          }}>
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;