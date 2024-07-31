import React, { useState } from 'react';
import './App.css';
import icon from './icon/user-icon.svg'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import BgColor from './components/BgColor/BgColor';
import LoginForm from './components/LoginForm/LoginForm';

function App() {
  const [auth, setAuth] = useState<any>(null)
  const [loginShow, setLoginShow] = useState<any>(true)

  return (
    <div className="App">
      <Header auth={auth} setLoginShow={setLoginShow}/>

     <section>
      <BgColor/>
      {!auth && loginShow ? <LoginForm setAuth={setAuth} setLoginShow={setLoginShow}/> : null}
     </section>

      <Footer/>
    </div>
  );
}

export default App;
