import React from 'react'
import Map from './Map'

const BusInfo = () => {
  return (
    <div className='container p-5 d-sm-flex  text-white' style={{backgroundColor:'coral'}}>
      <div className='d-sm-flex align-items-center justify-content-center m-4'>
        <section className='about-us m-4'>
          <div className='lead'>About Us</div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          error laudantium similique nulla doloribus laborum.
        </section>
        <section className='contact-us m-4'>
          <div className='lead'>Contact Us</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          doloremque quos nam animi fuga dolorem.
        </section>
        <section className='location m-4'>
          <div className='lead'>Location</div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          doloremque quos nam animi fuga dolorem.
        </section>
        <Map />
      </div>
    </div>
  );
}

export default BusInfo