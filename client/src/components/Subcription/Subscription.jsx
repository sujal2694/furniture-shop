import React from 'react'
import './Subscription.css'

const Subcription = () => {
  return (
    <div>
      <div className='subscription-section'>
        <div className="subscription-heading">
            <h1>Never Miss a Deal!</h1>
            <p>Subcripbe and get daily updates and new collections notifications form us</p>
        </div>
        <div className="subscription-form">
            <form>
                <input type="text" placeholder='Type here' />
                <button type='submit'>Subscribe</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Subcription
