import React, { useState } from 'react';
import './Header.css'
import userIicon from '../../icon/user-icon.svg'
import burgerIicon from '../../icon/burger-icon.svg'


function Header(props: {auth: any; setLoginShow: any; setAuth: any}) {
  const [showMobile, setShowMobile] = useState(false);

  return (
    <>
      <header className="App-header">
        <div className='main-wrapper'>
        <a href="#"><img src={userIicon} alt="logo"  className='user-icon'/></a>

          <div className='main-section'>
            <a href='#' className='main-elem roboto-regular'>Home</a>
            <a href='#' className='main-elem roboto-regular'>Contact</a>
            <a href='#' className='main-elem roboto-regular'>About</a>
          </div>
        </div>
        {!props.auth 
        ? (<button className='btn-login roboto-regular header-btn-login' type='button' onClick={e => props.setLoginShow(true)}>Login</button>) 
        : (<div className='main-wrapper'>
            <div className='user-name'>{props.auth.username}</div>
            <button className='btn-logout roboto-regular' type='button' onClick={e => props.setAuth(null)}>Logout</button>
        </div>)}        
      </header>
      <a href="#" onClick={e => setShowMobile(!showMobile)}><img src={burgerIicon} alt="burger" className='burger-icon'/></a>
      {showMobile ? <div className='main-mobile'>
        <a href='#' className='main-mobile-elem roboto-regular' onClick={e => setShowMobile(false)}>Home</a>
        <a href='#' className='main-mobile-elem roboto-regular' onClick={e => setShowMobile(false)}>Contact</a>
        <a href='#' className='main-mobile-elem roboto-regular' onClick={e => setShowMobile(false)}>About</a>
        {!props.auth 
        ? (<button className='btn-mobile-login roboto-regular' type='button' onClick={e => {props.setLoginShow(true); setShowMobile(false)}}>Login</button>) 
        : (<div>
            <div className='user-name-mobile'>{props.auth.username}</div>
            <button className='btn-mobile-logout roboto-regular' type='button' onClick={e => props.setAuth(null)}>Logout</button>
        </div>)}
      </div> : null}
    </>
  );
}

export default Header;
