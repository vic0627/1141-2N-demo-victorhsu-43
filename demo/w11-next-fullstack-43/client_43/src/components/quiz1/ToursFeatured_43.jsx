import { useState, useEffect } from 'react';
// import { tours } from './data';
import Tour_43 from './Tour_43';

const api_url = 'http://localhost:5000/api/tour_43/featured';

const ToursFeatured_43 = () => {
  const [tours_43, setTours_43] = useState([]);
  const fetchTourFromNodeServer = async () => {
    try {
      const response = await fetch(api_url);
      const data = await response.json();
      console.log('tours', data);
      setTours_43(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTourFromNodeServer();
  }, []);

  return (
    <section className='section' id='tours'>
      <div className='section-title'>
        <h2>
          featured <span>tours</span>
        </h2>
        <h4>tours from Node -- htchung, 12345678 </h4>
      </div>

      <div className='section-center featured-center'>
        {tours_43?.map((tour) => {
          return <Tour_43 {...tour} key={tour.id} />;
        })}
      </div>
    </section>
  );
};
export default ToursFeatured_43;
