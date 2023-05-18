import './register.css'


export const Register = () => {
  return (
    <div className='wrapper'>
      <form className='login'>
        <h1>Register</h1>
        <input type="text" placeholder='username'  />
        <input type="password" placeholder='password'  />
        <button>Register</button>
      </form>
    </div>
  )
}