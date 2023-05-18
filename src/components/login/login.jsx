import './login.css'


export const Login = () => {
  return (
    <div className='wrapper'>
      <form className='login'>
        <h1>Login</h1>
        <input type="text" placeholder='username'  />
        <input type="password" placeholder='password'  />
        <button>Login</button>
      </form>
    </div>
  )
}
