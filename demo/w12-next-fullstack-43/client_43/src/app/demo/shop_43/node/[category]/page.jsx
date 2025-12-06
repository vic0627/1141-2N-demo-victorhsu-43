'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

import Wrapper from '../../_wrapper/Shop_43';
import Product_43 from '../../_components/Product_43';

const FetchShopByCategory_43 = () => {
  const [shop_43, setShop_43] = useState([]);
  const params = useParams();
  const category = params.category;
  console.log('category', category);

  const fetchShopFromNode = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/shop_43/${category}`)
      const data = await res.json()
      console.log('shop_43_data', data)
      if (data.length) {
        setShop_43(data)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchShopFromNode()
  }, [])

  return (
    <Wrapper>
      <div className='shop-page'>
        <div className='section-title'>
          <h3>Victor Hsu, 213410243</h3>
        </div>
        <div className='collection-page'>
          <h1 className='title'>{category[0].toUpperCase() + category.slice(1)}</h1>
          <div className='items'>
            {shop_43.map(({ pid, pname, img_url, price }) => <Product_43 key={pid} name={pname} img_url={img_url} price={price} />)}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FetchShopByCategory_43;
