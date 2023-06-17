import React from 'react';
import Footer from './Footer';
import Accordion from './Accordion';
import Newsletter from './Newsletter';

const Home = () => {
  return (
    <div>
      {/* HERO IMAGE */}
      <section className='mb-5 mt-5 pt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <img
                src='https://res.cloudinary.com/dzajrh9z7/image/upload/v1681123301/braid5a_ytgp9q.jpg'
                className='img-fluid'
                alt='...'
              />
            </div>
          </div>
        </div>
      </section>

      {/* BOOKINGS */}
      <section className='mb-5'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='text-light bg-dark text-center p-4'>
                <h1>BOOK AN APPOINTMENT</h1>
                <p>Book an appointment with us from any location in Nigeria.</p>
                <button className='btn btn-block btn-light text-dark'>
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORKING HOURS */}
      <section className='d-flex align-items-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='p-5'>
                <h1>WORKING HOURS</h1>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='row mx-4'>
                <div className='col'>
                  <p>MONDAY</p>
                  <span className='text-primary'>8am - 7pm</span>
                </div>
                <div className='col'>
                  <p>TUESDAY</p>
                  <span className='text-primary'>8am - 7pm</span>
                </div>
                <div className='col'>
                  <p>WEDNESDAY</p>
                  <span className='text-primary'>8am - 7pm</span>
                </div>
                <div className='col'>
                  <p>THURSDAY</p>
                  <span className='text-primary'>8am - 7pm</span>
                </div>
                <div className='col'>
                  <p>FRIDAY</p>
                  <span className='text-primary'>8am - 7pm</span>
                </div>
                <div className='col'>
                  <p>SATURDAY</p>
                  <span className='text-primary'>8am - 7pm</span>
                </div>
                <div className='col'>
                  <p>SUNDAY</p>
                  <span className='text-danger'>CLOSED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mb-1'>
        <div className='d-flex'></div>
      </section>

      <Newsletter />
      <Accordion />
      <Footer />
    </div>
  );
};

export default Home;
