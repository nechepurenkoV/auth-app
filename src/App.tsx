import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import BgColor from './components/BgColor/BgColor';
import LoginForm from './components/LoginForm/LoginForm';

function App() {
  const getAuth = () => {
    const str = sessionStorage.getItem('auth')
    return str != null ? JSON.parse(str) : null;
  }
  
  const [auth, setAuth] = useState<any>(getAuth)
  const [loginShow, setLoginShow] = useState<any>(true)

  const setAndSaveAuth = (auth: any) => {
    sessionStorage.setItem('auth', JSON.stringify(auth))
    setAuth(auth)
  }

  return (
    <div className="App">
      <Header auth={auth} setLoginShow={setLoginShow} setAuth={setAndSaveAuth}/>

     <section>
      <BgColor/>
      {!auth && loginShow ? <LoginForm setAuth={setAndSaveAuth} setLoginShow={setLoginShow}/> : null}
     </section>

      <Footer/>
    </div>
  );
}

export default App;
