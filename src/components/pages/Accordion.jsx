import React from 'react'

const Accordion = () => {
  return (
    <div className='container mt-2'>
      <div className='accordion accordion-flush' id='accordionFlushExample'>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='flush-headingOne'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#flush-collapseOne'
              aria-expanded='false'
              aria-controls='flush-collapseOne'
            >
              What is Gel Polish?
            </button>
          </h2>
          <div
            id='flush-collapseOne'
            className='accordion-collapse collapse'
            aria-labelledby='flush-headingOne'
            data-bs-parent='#accordionFlushExample'
          >
            <div className='accordion-body'>
              Gel polish, also known as soak-off gel polish or UV/LED gel
              polish, is a type of nail polish that is cured or hardened under a
              UV or LED lamp. It is a popular choice in nail salons and among
              individuals who prefer long-lasting and chip-resistant manicures.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='flush-headingTwo'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#flush-collapseTwo'
              aria-expanded='false'
              aria-controls='flush-collapseTwo'
            >
              What are Braids?
            </button>
          </h2>
          <div
            id='flush-collapseTwo'
            className='accordion-collapse collapse'
            aria-labelledby='flush-headingTwo'
            data-bs-parent='#accordionFlushExample'
          >
            <div className='accordion-body'>
              Braids are a type of hairstyle created by interweaving three or
              more strands of hair together. The strands are woven over and
              under each other in a repetitive pattern to form a unified plaited
              structure. Braids can be worn by people of all genders and ages
              and are popular for their versatility and long-lasting nature.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='flush-headingThree'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#flush-collapseThree'
              aria-expanded='false'
              aria-controls='flush-collapseThree'
            >
              How long do braids typically last?
            </button>
          </h2>
          <div
            id='flush-collapseThree'
            className='accordion-collapse collapse'
            aria-labelledby='flush-headingThree'
            data-bs-parent='#accordionFlushExample'
          >
            <div className='accordion-body'>
              The duration that braids can last depends on various factors,
              including the type of braids, hair texture, maintenance routine,
              and individual hair growth rate. Generally, braids can last
              anywhere from a few days to several weeks.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion