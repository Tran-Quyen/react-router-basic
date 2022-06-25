import { Link } from 'react-router-dom';
import RouterView from './router';

function App() {
  return (
    <div className='App'>
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

      <RouterView></RouterView>
    </div>
  );
}

export default App;

