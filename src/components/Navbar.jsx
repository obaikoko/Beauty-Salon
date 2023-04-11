import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(logout());
    dispatch(reset());
    window.location.reload();
  };
  return (
    <div>
      <nav
        className='navbar  navbar-expand-lg bg-body-tertiary fixed-top '
        style={{ backgroundColor: 'coral' }}
      >
        <div className='container-fluid'>
          <Link className='navbar-brand' href='#'>
            BEAUTY COMPLEX WORLD
            <h1 className='lead text-white text-uppercase'>{user && `welcome ${user.name}`}</h1>
          </Link>
          <br />

          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='offcanvas'
            data-bs-target='#offcanvasNavbar'
            aria-controls='offcanvasNavbar'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='offcanvas offcanvas-end'
            tabindex='-1'
            id='offcanvasNavbar'
            aria-labelledby='offcanvasNavbarLabel'
          >
            <div className='offcanvas-header'>
              <h5 className='offcanvas-title' id='offcanvasNavbarLabel'>
                Beauty complex world
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='offcanvas'
                aria-label='Close'
              ></button>
            </div>
            <div className='offcanvas-body'>
              <ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
                <li className='nav-item'>
                  <Link to='/' className='nav-link active' aria-current='page'>
                    HOME
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/reservation' className='nav-link'>
                    MAKE A RESERVATION
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/about' className='nav-link'>
                    ABOUT US
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/gallery' className='nav-link'>
                    GALLERY
                  </Link>
                </li>
                {user ? (
                  <li className='nav-item'>
                    <Link to='/login' onClick={onClick} className='nav-link'>
                      LOGOUT
                    </Link>
                  </li>
                ) : (
                  <li className='nav-item'>
                    <Link to='/login' className='nav-link'>
                      LOGIN
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
