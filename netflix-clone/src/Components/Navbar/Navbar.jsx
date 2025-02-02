import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix logo" />
        <img className='avatar' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Chlod_%28avatar%29.png/640px-Chlod_%28avatar%29.png" alt="User Avatar" />
    </div>
  )
}

export default Navbar