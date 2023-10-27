import React, { useState } from 'react'
import './style.scss'
import { Link } from 'react-router-dom';


const Header = () => {

 const [isLoggedIn,setIsLoggedIn]= useState(false);

  return (
    <section>
      <header className="site-navbar" role="banner">
        <div className="header-container">
          <div className="left">
            <img src='assets/images/eidiko-logo.jpg' className='banner' alt='logo_image'/>
          </div>
          <div className="right">
          {isLoggedIn && <img src="https://assets.codepen.io/1480814/adam-argyle.png" alt="Adam argyle" className='profile' />}
          {!isLoggedIn && <Link to='/login' className='link-text'>Login</Link> }          
          </div>
        </div>
      </header>
    </section>

  )
}

export default Header