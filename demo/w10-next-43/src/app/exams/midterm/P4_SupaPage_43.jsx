import { useEffect, useState } from 'react';
import { supabase } from '../../db/clientSupabase';
import Product_43 from '../../components/midterm/Product_43';
import Wrapper from '../../assets/wrappers/midterm/Shop_43';

const P4_SupaPage_43 = () => {
  const [shop_43, setShop_43] = useState([]);
  const [category, setCategory] = useState('sneakers');

  const fetchShopFromSupaServer = async () => {
    try {
      let { data, error } = await supabase
        .from('shop_43')
        .select('*')
        .eq('category', category);
      console.log('shops', data);
      data && setShop_43(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchShopFromSupaServer();
  }, []);

  return (
    <Wrapper>
      <div className='shop-page'>
        <div className='section-title'>
          <h3>P1_StaticPage_43, </h3>
          <p className='text-center text-[16px]'>Victor Hsu, 213410243</p>
        </div>
        <div className='collection-page'>
          <h1 className='title'>{category}</h1>
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

export default P4_SupaPage_43;
