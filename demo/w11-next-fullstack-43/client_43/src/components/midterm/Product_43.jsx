import Wrapper from '../../assets/wrappers/midterm/Shop_43';

const Product_43 = ({ name, price, img_url }) => {
  return (
    <Wrapper>
      <div className='collection-item'>
        <img className='image' src={img_url} />
        <div className='collection-footer'>
          <span className='name'>{name}</span>
          <span className='price'>{price}</span>
        </div>
        <button className='custom-button'>Add to Cart</button>
      </div>
    </Wrapper>
  );
};
export default Product_43;
