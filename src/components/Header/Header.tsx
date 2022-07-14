import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header>
      <Link className="header-item" to="/"> 
        Home
      </Link>

      <Link className="header-item" to="/users"> 
        Users
      </Link>
    </header>
  ) 
}

export default Header;