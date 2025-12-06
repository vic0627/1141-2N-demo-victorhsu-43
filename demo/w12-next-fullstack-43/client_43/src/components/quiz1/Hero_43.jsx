import { Link } from 'react-router-dom';
const Hero_43 = () => {
  return (
    <section className='hero' id='home'>
      <div className='hero-banner'>
        <h1>continue exploring</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          explicabo debitis est autem dicta.
        </p>
        <Link to='#tours' className='btn hero-btn'>
          explore tours
        </Link>
      </div>
    </section>
  );
};
export default Hero_43;
