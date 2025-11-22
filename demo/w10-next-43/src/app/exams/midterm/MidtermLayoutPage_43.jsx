import { Outlet } from 'react-router-dom';
import NavbarShop_43 from '../../components/midterm/NavbarShop_43';
import Wrapper from '../../assets/wrappers/midterm/Shop_43';

const MidtermLayoutPage_43 = () => {
  return (
    <Wrapper>
      <div className='midterm'>
        <NavbarShop_43 />
        <Outlet />
      </div>
    </Wrapper>
  );
};

export default MidtermLayoutPage_43;
