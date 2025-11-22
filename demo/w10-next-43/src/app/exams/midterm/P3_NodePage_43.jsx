import { useEffect, useState } from 'react';
import Product_43 from '../../components/midterm/Product_43';
import Wrapper from '../../assets/wrappers/midterm/Shop_43';

const P3_NodePage_43 = () => {
  const [shop_43, setShop_43] = useState([]);
  const fetchShop_43 = async () => {
    const res = await fetch('http://localhost:5000/api/shop_43/sneakers');
    const data = await res.json();
    setShop_43(data);
  };
  useEffect(() => {
    fetchShop_43();
  }, []);

  return (
    <Wrapper>
      <div className='shop-page'>
        <div className='section-title'>
          <h3>P1_StaticPage_43, </h3>
          <p className='text-center text-[16px]'>Victor Hsu, 213410243</p>
        </div>
        <div className='collection-page'>
          <h1 className='title'>Sneakers</h1>
          <div className='items'>
            {shop_43.map(({ id, name, price, img_url }) => (
              <Product_43
                key={name + id}
                name={name}
                price={price}
                img_url={img_url}
              />
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default P3_NodePage_43;
