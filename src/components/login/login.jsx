import { useState } from 'react'
import './login.css'


export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = (ev) => {
    ev.preventDefault();

    fetch('http://localhost:4000/login', {
      method : 'POST',
      body : JSON.stringify({username, password}),
      headers : {'Content-Type' : 'application/json'},
      credentials : 'include',
    })
  }

  return (
    <div className='wrapper'>
      <form className='login' onSubmit={login}>
        <h1>Login</h1>
        <input type="text" 
          placeholder='username'
          value={username} onChange={(ev) => setUsername(ev.target.value)}
          />
        <input type="password" 
          placeholder='password'
          value={password} onChange={(ev) => setPassword(ev.target.value)}/>
        <button>Login</button>
      </form>
    </div>
  )
}
