import NavBarWrapper_43 from "../assets/wrappers/NavBar_43";
import { Link } from "react-router-dom";

const Navbar_43 = () => {
  return (
    <NavBarWrapper_43>
      <header className="header">
        <div
          className="header-row container"
          role="navigation"
          aria-label="Main"
        >
          <div className="header-left">
            <div className="logo">
              <h1>TKUDemo</h1>
            </div>
          </div>
          <div className="header-right">
            <ul className="main-menu">
              <li className="menu-item">
                <Link to="#" className="active">
                  Home
                </Link>
              </li>

              <li className="menu-item mega-menu">
                <Link to="#">Mega menu +</Link>
                <div className="mega-menu-wrapper slideInUp">
                  <div className="mega-menu-col">
                    <h5>Menu block 1</h5>
                    <ul className="mega-sub-menu">
                      <li>
                        <Link to="#">Menu block item 1</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 2</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 3</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 4</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-col">
                    <h5>Menu block 2</h5>
                    <ul className="mega-sub-menu">
                      <li>
                        <Link to="#">Menu block item 1</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 2</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 3</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 4</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-col">
                    <h5>Menu block 3</h5>
                    <ul className="mega-sub-menu">
                      <li>
                        <Link to="#">Menu block item 1</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 2</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 3</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 4</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-col">
                    <h5>Menu block 4</h5>
                    <ul className="mega-sub-menu">
                      <li>
                        <Link to="#">Menu block item 1</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 2</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 3</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 4</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="menu-item dropdown">
                <Link to="#">Demo +</Link>
                <div className="sub-menu-wrapper slideInUp">
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <Link to="/static_43">W3-BlogStatic_43</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/localjson_43">W3-BlogLocalJson_43</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/node_43">W4-BlogNode_43</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="#">W5-BlogSupa_43</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="menu-item">
                <Link to="#">Blog</Link>
              </li>
              <li className="menu-item">
                <Link to="#">Contact</Link>
              </li>
            </ul>
            <Link
              to="#"
              id="hamburger-icon"
              className="mobile-toggler"
              aria-label="Mobile Menu"
            >
              <i className="fas fa-bars"></i>
            </Link>
          </div>

          <div id="mobile-menu" className="mobile-menu hidden slideInDown">
            <ul>
              <li className="menu-item">
                <Link to="#" className="active">
                  Home
                </Link>
              </li>

              <li className="menu-item mega-menu">
                <Link to="#">Mega menu +</Link>
                <div className="mega-menu-wrapper">
                  <div className="mega-menu-col">
                    <h5>Menu block 1</h5>
                    <ul className="mega-sub-menu">
                      <li>
                        <Link to="#">Menu block item 1</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 2</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 3</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 4</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-col">
                    <h5>Menu block 2</h5>
                    <ul className="mega-sub-menu">
                      <li>
                        <Link to="#">Menu block item 1</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 2</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 3</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 4</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-col">
                    <h5>Menu block 3</h5>
                    <ul className="mega-sub-menu">
                      <li>
                        <Link to="#">Menu block item 1</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 2</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 3</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 4</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="mega-menu-col">
                    <h5>Menu block 4</h5>
                    <ul className="mega-sub-menu">
                      <li>
                        <Link to="#">Menu block item 1</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 2</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 3</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 4</Link>
                      </li>
                      <li>
                        <Link to="#">Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="menu-item dropdown">
                <Link to="#">Services +</Link>
                <div className="sub-menu-wrapper">
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <Link to="#">Service 1</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="#">Service 2</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="#">Service 3</Link>
                    </li>
                    <li className="menu-item">
                      <Link to="#">Service 4</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="menu-item">
                <Link to="#">Blog</Link>
              </li>
              <li className="menu-item">
                <Link to="#">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </NavBarWrapper_43>
  );
};

export default Navbar_43;
