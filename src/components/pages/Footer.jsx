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
      <section>
        <footer className='bg-dark text-light'>
          <div className='container'>
            <div className='row' style={{borderBottom: '2px solid white'}}>
              <div className='col'>
                <section className='contact-us m-4'>
                  <div className='lead'>BEAUTY COMPLEX WORLD</div>
                  Beauty complex worl provide excellent services in all kinds of Briads making, Nails fixing, Eyelashes, and other services, we also sell hair products.
                </section>
              </div>
              <div className='col'>
                <section className='contact-us m-4'>
                  <div className='lead'>Contact Us</div>
                  Our Main Office is at No 10 Zik Avenew Awka <br />
                  You can also reach at our sub branches <br />
                  <ul>
                    <li>Iruokpa Nkwelle Awkuzu , Oyi LGA, Anambra State </li>
                  </ul>
                  <ul>
                    <li> Abuja Road Dutsin-ma LGA, Katsina State </li>
                  </ul>
                  <ul>
                    <li> No12 Gwagwalada, Abuja </li>
                  </ul>
                </section>
              </div>
              <div className='col'>
                <section className='contact-us m-4'>
                  <div className='lead'>Legal</div>
                  <ul className='list-style-none'>
                    <li>Terms and conditions </li>
                    <li>Policy </li>
                    <li>Support </li>
                  </ul>
                 
                </section>
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
