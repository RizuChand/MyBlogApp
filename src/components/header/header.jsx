import { Link } from 'react-router-dom'
import './header.css'

export const Header = () => {
  return (
    <header>
          <Link to="google.com" className="logo">MyBlog</Link>
            <nav>
              <Link to="/login" className="login">Login</Link>
              <Link to="/register" className="register">Register</Link>
            </nav>
        </header>
  )
}
