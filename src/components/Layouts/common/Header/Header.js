import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <ul className='nav-list'>
        <li className='nav-item'>
          <Link to='/' className='nav-link'>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/about' className='nav-link'>
            About
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/contact' className='nav-link'>
            Contact
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/product' className='nav-link'>
            Product
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;

