import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <section >
        <footer className='bg-black text-light'>
          <div className='container'>
            <div>
              <div className='d-sm-flex p-5 upper-footer'>
                <div className='d-sm-flex p-4'>
                  <p className='m-4'>
                    <Link className='text-decoration-none text-light'>
                      Terms and Conditions <br />
                      Privacy Policy <br />
                      Cokie Policy
                    </Link>
                  </p>
                  <p className='m-4'>
                    <Link
                      to='/about'
                      className='text-decoration-none text-light'
                      data-bs-target='#contact'
                    >
                      Contact Us <br />
                    </Link>
                    <Link
                      to='/about'
                      className='text-decoration-none text-light'
                    >
                      About Us
                      <br />
                    </Link>
                    <Link
                      to='/about'
                      className='text-decoration-none text-light'
                    >
                      Direction <br />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            {/* Lower Footer */}
            <div className='lower-footer m-5 pb-5'>
              <ul
                className='d-flex align-items-center justify-content-center'
                style={{ listStyle: 'none' }}
              >
                <li className='m-2'>
                  <Link to='https://web.facebook.com/profile.php?id=100080057067273'>
                    <FaFacebook />
                  </Link>
                </li>
                <li className='m-2'>
                  <Link>
                    <FaWhatsapp />
                  </Link>
                </li>
                <li className='m-2'>
                  <Link>
                    <FaInstagram />
                  </Link>
                </li>
                <li className='m-2'>
                  <Link>
                    <FaTwitter />
                  </Link>
                </li>
                <li className='m-2'>
                  <Link>
                    <FaLinkedin />
                  </Link>
                </li>
              </ul>
              <p className=' text-center'>
                &copy; 2023 Beauty Complex World. All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Footer;
