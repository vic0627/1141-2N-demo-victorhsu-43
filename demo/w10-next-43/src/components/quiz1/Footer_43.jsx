import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaSquarespace } from 'react-icons/fa';

const Footer_43 = () => {
  return (
    <footer class='section footer'>
      <ul class='footer-links'>
        <li>
          <Link to='/' class='footer-link'>
            TKUdemo
          </Link>
        </li>
        <li>
          <Link to='#home' class='footer-link'>
            home
          </Link>
        </li>
        <li>
          <Link to='#about' class='footer-link'>
            about
          </Link>
        </li>
        <li>
          <Link to='#services' class='footer-link'>
            services
          </Link>
        </li>
        <li>
          <Link to='#featured' class='footer-link'>
            featured
          </Link>
        </li>
      </ul>
      <ul className='nav-icons flex justify-center items-center gap-3'>
        <li>
          <Link
            to='https://www.twitter.com'
            target='_blank'
            className='nav-icon'
          >
            <FaFacebook size={30} />
          </Link>
        </li>
        <li>
          <Link
            to='https://www.twitter.com'
            target='_blank'
            className='nav-icon'
          >
            <FaXTwitter size={30} />
          </Link>
        </li>
        <li>
          <Link
            to='https://www.twitter.com'
            target='_blank'
            className='nav-icon'
          >
            <FaSquarespace size={30} />
          </Link>
        </li>
      </ul>
      <p class='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'></span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer_43;
