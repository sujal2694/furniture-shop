import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className='footer-head'>
            <h1>shop</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, autem possimus exercitationem voluptatem, quasi impedit architecto ullam at repellendus voluptas porro nam illo amet cumque pariatur odio quis accusantium tempore.</p>
        </div>

        <div className="links">
            <ul className="nav-links">
               <li>Home</li>
               <li>About</li>
               <li>Products</li>
               <li>Contact Us</li> 
            </ul>

            <ul className="social-links">
                <li>
                    <i className='bx bx-facebook'></i>
                    <p>Facebook</p>
                </li>
                <li>
                    <p>YouTube</p>
                </li>
                <li>
                    <p>X</p>
                </li>
                <li>
                    <p>Instagram</p>
                </li>
            </ul>
        </div>
      </div>
      <p className='footer-text-para'>Copyright &copy;2025 Shop name, All Right Reserved.</p>
    </div>
  )
}

export default Footer
