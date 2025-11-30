import Wrapper from '@/assets/wrappers/midterm/Shop_43';
import Link from 'next/link';

const P2_StaticPage_43 = () => {
  return (
    <Wrapper>
      <div className='homepage'>
        <div className='directory-menu'>
          <div className='menu-item'>
            <img
              className='background-image'
              src='/images/midterm/homepage/hats.png'
              alt=''
            />
            <a href='./hats.html' className='content'>
              <h1 className='title'>HATS</h1>
              <span className='subtitle'>SHOP NOW</span>
            </a>
          </div>
          <div className='menu-item'>
            <img
              className='background-image'
              src='/images/midterm/homepage/jackets.png'
              alt=''
            />
            <a href='./jackets.html' className='content'>
              <h1 className='title'>JACKETS</h1>
              <span className='subtitle'>SHOP NOW</span>
            </a>
          </div>
          <div className='menu-item'>
            <img
              className='background-image'
              src='/images/midterm/homepage/sneakers.png'
              alt=''
            />
            <a href='./sneakers.html' className='content'>
              <h1 className='title'>SNEAKERS</h1>
              <span className='subtitle'>SHOP NOW</span>
            </a>
          </div>
          <div className='large menu-item'>
            <img
              className='background-image'
              src='/images/midterm/homepage/womens.png'
              alt=''
            />
            <Link href='/exams/midterm/p1_43' className='content'>
              <h1 className='title'>WOMENS</h1>
              <span className='subtitle'>SHOP NOW</span>
            </Link>
          </div>
          <div className='large menu-item'>
            <img
              className='background-image'
              src='/images/midterm/homepage/mens.png'
              alt=''
            />
            <a href='./mens.html' className='content'>
              <h1 className='title'>MENS</h1>
              <span className='subtitle'>SHOP NOW</span>
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default P2_StaticPage_43;
