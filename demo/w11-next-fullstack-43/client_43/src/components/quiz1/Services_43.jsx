import { FaWallet } from 'react-icons/fa';
import { FaTree } from 'react-icons/fa';
import { FaSocks } from 'react-icons/fa';

const Services_43 = () => {
  return (
    <section className='section services' id='services'>
      <div className='section-title'>
        <h2>
          our <span>services</span>
        </h2>
      </div>
      <div className='section-center services-center'>
        <article className='service'>
          <span className='service-icon'>
            {/* <i className='fas fa-wallet fa-fw'></i> */}
            <FaWallet size={40} className='m-2' />
          </span>
          <div className='service-info'>
            <h4 className='service-title'>saving money</h4>
            <p className='service-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>

        <article className='service'>
          <span className='service-icon'>
            {/* <i className='fas fa-tree fa-fw'></i> */}
            <FaTree size={40} className='m-2' />
          </span>
          <div className='service-info'>
            <h4 className='service-title'>endless hiking</h4>
            <p className='service-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>

        <article className='service'>
          <span className='service-icon'>
            {/* <i className='fas fa-socks fa-fw'></i> */}
            <FaSocks size={40} className='m-2' />
          </span>
          <div className='service-info'>
            <h4 className='service-title'>amazing comfort</h4>
            <p className='service-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};
export default Services_43;
