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
    <div className='mb-0 container'>
      <section>
        <footer className='bg-dark text-light'>
          <div className='container'>
            <div className='row' style={{ borderBottom: '2px solid white' }}>
              <div className='col-lg-4 col-md-6'>
                <section className='contact-us m-4'>
                  <div className='lead'>BEAUTY COMPLEX WORLD</div>
                  <p>
                    Beauty Complex World provides excellent services in all
                    kinds of Braid making, Nail fixing, Eyelashes, and other
                    services. We also sell hair products.
                  </p>
                </section>
              </div>
              <div className='col-lg-4 col-md-6'>
                <section className='contact-us m-4'>
                  <div className='lead'>Contact Us</div>
                  <p>Our Main Office is at No 10 Zik Avenue Awka.</p>
                  <p>You can also reach us at our sub-branches:</p>
                  <ul className='list-unstyled'>
                    <li>Iruokpa Nkwelle Awkuzu, Oyi LGA, Anambra State</li>
                    <li>Abuja Road Dutsin-ma LGA, Katsina State</li>
                    <li>No 12 Gwagwalada, Abuja</li>
                  </ul>
                </section>
              </div>
              <div className='col-lg-4'>
                <section className='contact-us m-4'>
                  <div className='lead'>Legal</div>
                  <ul className='list-unstyled'>
                    <li>Terms and Conditions</li>
                    <li>Policy</li>
                    <li>Support</li>
                  </ul>
                </section>
              </div>
            </div>
            {/* Lower Footer */}
            <div className='lower-footer m-5 pb-5'>
              <ul className='d-flex align-items-center justify-content-center list-unstyled'>
                <li className='m-2'>
                  <a href='https://web.facebook.com/profile.php?id=100080057067273'>
                    <FaFacebook />
                  </a>
                </li>
                <li className='m-2'>
                  <a href='https://web.whatsapp.com'>
                    <FaWhatsapp />
                  </a>
                </li>
                <li className='m-2'>
                  <a href='https://www.instagram.com'>
                    <FaInstagram />
                  </a>
                </li>
                <li className='m-2'>
                  <a href='https://twitter.com'>
                    <FaTwitter />
                  </a>
                </li>
                <li className='m-2'>
                  <a href='https://www.linkedin.com'>
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
              <p className='text-center'>
                &copy; {new Date().getFullYear()} Beauty Complex World. All
                Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Footer;
