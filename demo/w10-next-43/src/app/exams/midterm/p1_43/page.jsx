import Wrapper from '@/assets/wrappers/midterm/Shop_43';

const P1_StaticPage_43 = () => {
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
            <div className='collection-item'>
              <img
                className='image'
                src='/images/midterm/sneakers/adidas-nmd.png'
              />
              <div className='collection-footer'>
                <span className='name'>Adidas NMD</span>
                <span className='price'>220</span>
              </div>
              <button className='custom-button'>Add to Cart</button>
            </div>
            <div className='collection-item'>
              <img className='image' src='/images/midterm/sneakers/yeezy.png' />
              <div className='collection-footer'>
                <span className='name'>Adidas Yeezy</span>
                <span className='price'>280</span>
              </div>
              <button className='custom-button'>Add to Card</button>
            </div>
            <div className='collection-item'>
              <img
                className='image'
                src='/images/midterm/sneakers/black-converse.png'
              />
              <div className='collection-footer'>
                <span className='name'>Black Converse</span>
                <span className='price'>110</span>
              </div>
              <button className='custom-button'>Add to Cart</button>
            </div>
            <div className='collection-item'>
              <img
                className='image'
                src='/images/midterm/sneakers/white-nike-high-tops.png'
              />
              <div className='collection-footer'>
                <span className='name'>Nike White AirForce</span>
                <span className='price'>160</span>
              </div>
              <button className='custom-button'>Add to Cart</button>
            </div>
            <div className='collection-item'>
              <img
                className='image'
                src='/images/midterm/sneakers/nikes-red.png'
              />
              <div className='collection-footer'>
                <span className='name'>Nike Brown High Tops</span>
                <span className='price'>160</span>
              </div>
              <button className='custom-button'>Add to Cart</button>
            </div>
            <div className='collection-item'>
              <img
                className='image'
                src='/images/midterm/sneakers/nike-funky.png'
              />
              <div className='collection-footer'>
                <span className='name'>Air Jordan Limited</span>
                <span className='price'>190</span>
              </div>
              <button className='custom-button'>Add to Cart</button>
            </div>
            <div className='collection-item'>
              <img
                className='image'
                src='/images/midterm/sneakers/timberlands.png'
              />
              <div className='collection-footer'>
                <span className='name'>Timberlands</span>
                <span className='price'>200</span>
              </div>
              <button className='custom-button'>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default P1_StaticPage_43;
