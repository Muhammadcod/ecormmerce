import React from 'react';
import styled from 'styled-components';
import Heart from '../uploads/Heart.svg';
import Cart from '../uploads/Cart.svg';
import Profile from '../uploads/Ellipse 2.svg';

const Tag = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  //background: #e97171;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
`;

const Header = () => {
  return (
    <div className="position-absolute" style={{ width: `100%` }}>
      <nav className="navbar navbar-expand-lg navbar-light mt-3">
        <div className="container">
          <a className="navbar-brand" href="#" style={{ marginRight: `40px` }}>
            <h4>Funiro.</h4>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav  mb-2 mb-lg-0 "
              style={{ marginRight: `40px` }}
            >
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Rooms
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Inspirations
                </a>
              </li>
            </ul>
            <form className="d-flex me-auto">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search for minimalist chair"
                aria-label="Search"
              />
            </form>
            <div>
              <ul className="navbar-nav   ">
                <li className="nav-item dropdown me-4">
                  <Tag>
                    <img src={Heart} alt="" />
                  </Tag>
                  {/*<a
                    className="nav-link "
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pro
                  </a>*/}
                </li>
                <li className="nav-item dropdown me-4">
                  <Tag>
                    <img src={Cart} alt="" />
                  </Tag>

                  {/* <a
                    className="nav-link"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Roo
                  </a>*/}
                </li>
                <li className="nav-item">
                  <Tag>
                    <img src={Profile} alt="" />
                  </Tag>
                  {/*<a className="nav-link" href="#">
                    Ins
                  </a>*/}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
