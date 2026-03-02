import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-us'>
      <h1>Contact</h1>
      <form className="contact-form">
        <div className='multi-fields'>
          <input type="text" placeholder='first name' />
          <input type="text" placeholder='last name' />
        </div>
        <textarea cols={40} rows={5} placeholder='address type here...'></textarea>
        <div className='multi-fields'>
          <input type="text" placeholder='mobile no.' />
          <input type="text" placeholder='city' />
        </div>
        <button type='submit' className='contact-submit-btn'>Submit</button>
      </form>
    </div>
  )
}

export default Contact;
