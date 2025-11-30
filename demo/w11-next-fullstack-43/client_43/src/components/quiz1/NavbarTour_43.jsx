import logo from '/images/quiz1/logo.svg';
import { Link } from 'react-router-dom';
import { FaMap } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';
import { FaWallet } from 'react-icons/fa';
import { FaTree } from 'react-icons/fa';
import { FaSocks } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaSquarespace } from 'react-icons/fa';

const NavbarTour_43 = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img
            src='/images/quiz1/logo.svg'
            className='nav-logo'
            alt='backroads'
          />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links' id='nav-links'>
          <li>
            <Link to='/' className='nav-link'>
              {' '}
              TKUdemo{' '}
            </Link>
          </li>
          <li>
            <Link to='#home' className='nav-link'>
              {' '}
              home{' '}
            </Link>
          </li>

          <li>
            <Link to='#about' className='nav-link'>
              {' '}
              about{' '}
            </Link>
          </li>

          <li>
            <Link to='#services' className='nav-link'>
              {' '}
              services{' '}
            </Link>
          </li>

          <li>
            <Link to='#tours' className='nav-link'>
              {' '}
              tours
            </Link>
          </li>
        </ul>

        <ul className='nav-icons flex justify-center items-center gap-3 pt-8'>
          <li>
            <Link
              to='https://www.twitter.com'
              target='_blank'
              className='nav-icon'
            >
              <FaFacebook />
            </Link>
          </li>
          <li>
            <Link
              to='https://www.twitter.com'
              target='_blank'
              className='nav-icon'
            >
              <FaXTwitter />
            </Link>
          </li>
          <li>
            <Link
              to='https://www.twitter.com'
              target='_blank'
              className='nav-icon'
            >
              <FaSquarespace />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavbarTour_43;
