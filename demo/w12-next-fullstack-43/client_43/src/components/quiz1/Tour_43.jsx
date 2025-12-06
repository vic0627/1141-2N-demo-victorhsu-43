import { FaMap } from 'react-icons/fa';

const Tour_43 = ({ img, date, title, info, location, duration, cost }) => {
  return (
    <article className='tour-card'>
      <div className='tour-img-container'>
        <img src={img} className='tour-img' alt={title} />
        <p className='tour-date'>{date}</p>
      </div>
      <div className='tour-info'>
        <div className='tour-title'>
          <h4>{title}</h4>
        </div>
        <p>{info}</p>
        <div className='tour-footer'>
          <p>
            <span className='flex items-center justify-center gap-1.5'>
              <FaMap /> {location}
            </span>{' '}
          </p>
          <p>from ${cost}</p>
          <p>{duration} days</p>
        </div>
      </div>
    </article>
  );
};
export default Tour_43;
