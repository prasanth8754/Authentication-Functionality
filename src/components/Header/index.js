import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-cont">
    <ul className="ul-cont">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
)

export default Header
