import React from 'react';
import './Header.css'
import userIicon from '../../icon/user-icon.svg'
import burgerIicon from '../../icon/burger-icon.svg'


function Header(props: {auth: any}) {
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
        {!props.auth ? (<button className='btn-login roboto-regular header-btn-login' type='submit'>Login</button>) : (<div className='user-name'>{props.auth.username}</div>)}        
      </header>
      <a href="#"><img src={burgerIicon} alt="burger" className='burger-icon'/></a>
    </>
  );
}

export default Header;
