import React from 'react';
// import Map from './Map'

const BusInfo = () => {
  return (
    <div
      className='container p-5 d-sm-flex mt-5  text-white'
      style={{ backgroundColor: 'coral' }}
    >
      <div className='d-sm-flex align-items-center justify-content-center m-4'>
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
    </div>
  );
};

export default BusInfo;
