import React from 'react';

import Footer from './Footer';
// import Accordion from './Accordion';
import Newsletter from './Newsletter';

const Home = () => {
  return (
    <div>
      {/* CAROUSAL */}
      <section className='mb-1 mt-5 pt-5'>
        <div
          id='carouselExampleInterval'
          className='carousel slide'
          data-bs-ride='carousel'
        >
          <div className='carousel-inner'>
            <div className='carousel-item active' data-bs-interval='5000'>
              <img
                src='https://res.cloudinary.com/dzajrh9z7/image/upload/v1681123187/braid6_pph0w2.jpg'
                className='d-block w-100'
                alt='...'
              />
            </div>
            <div className='carousel-item' data-bs-interval='5000'>
              <img
                src='https://res.cloudinary.com/dzajrh9z7/image/upload/v1681123301/braid5a_ytgp9q.jpg'
                className='d-block w-100'
                alt='...'
              />
            </div>
            <div className='carousel-item'>
              <img
                src='https://res.cloudinary.com/dzajrh9z7/image/upload/v1681207029/nail9a_z3dewc.jpg'
                className='d-block w-100'
                alt='...'
              />
            </div>
          </div>
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleInterval'
            data-bs-slide='prev'
          >
            <span
              className='carousel-control-prev-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Previous</span>
          </button>
          <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleInterval'
            data-bs-slide='next'
          >
            <span
              className='carousel-control-next-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
      </section>
      {/* BOOKINGS */}
      <section className='mb-5'>
        <div>
          <div
            className='text-white align-items-center justify-content-center d-flex '
            style={{
              backgroundColor: 'coral',
              height: '400px',
              flexDirection: 'column ',
            }}
          >
            <h1>BOOK AN APPOINTMENT</h1>
            <p>Book and Appointment with Us from any location in Nigeria </p>
            <button className='btn btn-block bg-light text-dark'>
              BOOK NOW
            </button>
          </div>
        </div>
      </section>
      {/* WORKING HOURS */}
      <section className=' align-items-center d-sm-flex  '>
        <div className=' p-5 mx-5  w-50'>
          <h1>WORKING HOURS</h1>
        </div>
        <div>
          <div className='row mx-4'>
            <div className='col'>
              <p>MONDAY</p>
              <span style={{ color: 'blue' }}>8am - 7pm</span>
            </div>
            <div className='col'>
              <p>TUESDAY</p>
              <span style={{ color: 'blue' }}>8am - 7pm</span>
            </div>
            <div className='col'>
              <p>WEDNESSDAY</p>
              <span style={{ color: 'blue' }}>8am - 7pm</span>
            </div>
            <div className='col'>
              <p>THURSDAY</p>
              <span style={{ color: 'blue' }}>8am - 7pm</span>
            </div>
            <div className='col'>
              <p>FRIDAY</p>
              <span style={{ color: 'blue' }}>8am - 7pm</span>
            </div>
            <div className='col'>
              <p>SARTURDAY</p>
              <span style={{ color: 'blue' }}>8am - 7pm</span>
            </div>
            <div className='col'>
              <p>SUNDAY</p>
              <span style={{ color: 'red' }}>CLOSED</span>
            </div>
          </div>
        </div>
      </section>
      {/* Cards */}
      <section className='d-sm-flex justify-content-between mb-1 '>
        <div
          className=' text-center d-flex justify-content-center align-items-center text-white w-sm-50 mt-1'
          style={{ backgroundColor: 'coral' }}
        >
          <h1>Your Beauty Is Our Priority</h1>
        </div>
        <div className='w-sm-50'>
          <img
            src='https://res.cloudinary.com/dzajrh9z7/image/upload/v1681123402/eyelash1_ertmmz.jpg'
            className='img-fluid '
            alt=''
          />
        </div>
      </section>
      <section className='d-sm-flex justify-content-between  '>
        <div className='w-sm-50'>
          <img
            src='https://res.cloudinary.com/dzajrh9z7/image/upload/v1681208338/nails14c_hdq2r3.jpg'
            className='img-fluid '
            alt=''
          />
        </div>
        <div
          className=' text-center d-flex justify-content-center align-items-center text-white w-sm-50 '
          style={{ backgroundColor: 'coral' }}
        >
          <h1>Our Goal Is Your Satisfaction</h1>
        </div>
      </section>

      <section className='mb-1'>
        <div className='d-sm-flex'></div>
      </section>

      <Newsletter />
      <section>
        <img
          className='img-fluid'
          src='https://res.cloudinary.com/dzajrh9z7/image/upload/v1681123504/carousal-2_favwky.jpg'
          alt=''
        />

        {/* <Accordion /> */}
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
