import React, { useEffect, useState } from 'react';
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


  useEffect(() => {
    if(auth == null) return;


    fetch('https://dummyjson.com/auth/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${auth.token}`, 
      }, 
    })
    .then(res => {
      if(!res.ok) {
        fetch('https://dummyjson.com/auth/refresh', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            refreshToken: auth.refreshToken,
            expiresInMins: 30,
          })
        })
        .then(async res => {
          if(!res.ok) {
            setAndSaveAuth(null) 
          } else {
            const data = await res.json()

            setAndSaveAuth({...auth, ...data});
          }
        })
      }
    })
  }, [])


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