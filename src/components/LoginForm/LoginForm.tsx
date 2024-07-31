import React, { useState } from 'react';
import './LoginForm.css'

function LoginForm(props: { setAuth: (value: any) => void ; setLoginShow: any}) {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] =useState('')

  const sendLogin = () => fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      
      username: login,
      password: password,
      expiresInMins: 30,
    })
  })
  .then(res => res.json())
  .then(response => {
    if(response.message) {setErrorMessage(response.message)}
    else  {props.setAuth(response)}
  })
  .catch(e => setErrorMessage(e))

  return (
    <form className='login-wrapper roboto-regular' onSubmit={e => {sendLogin(); e.preventDefault()}}>
        <h3 className='roboto-bold'>Login</h3>

        <div className='input-block'>
          <label htmlFor="email">Email</label>
          <input type="text" value={login} onChange={e => setLogin(e.target.value)}/>
        </div>

        <div className='input-block'>
          <label htmlFor="password">Password</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
        </div>
        <div className='error-message'>{errorMessage}</div>

        <div className='btn-block'>
          <button className='btn-cancel roboto-regular' type='button' onClick={e => props.setLoginShow(false)}>Cancel</button>
          <button className='btn-login roboto-regular btn-margin-left' type='submit'>Login</button>
        </div>

      </form>
  );
}

export default LoginForm;
