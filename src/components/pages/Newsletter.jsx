import React from 'react';

const Newsletter = () => {
  return (
    <div className=' bg-dark text-light text-center mb-2 p-5'>
      <p className='lead'>SIGN UP FOR OUR </p>
      <h1>NEWSLETTER</h1>
      <span>
        Sign Up To Our VIP List And Get: First For New Products, Exclusive
        Events, Offers & Many More from Us!
      </span>

      <form className='form'>
        <input
          className='form-input '
          type='email'
          name='email'
          placeholder='Email'
        />
        <br />
        <button className='btn btn-block bg-white text-dark mt-4 '>
          SIGN UP
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
