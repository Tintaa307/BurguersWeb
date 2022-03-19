import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <section className="section section-footer">
      <div className="container container-footer">
        <ul className='list-footer-nav'>
          <li>
            <div className="link">
              <a href="#Home">Home</a>
            </div>
          </li>
          <li>
            <div className="link">
              <a href="#Menu">Menu</a>
            </div>
          </li>
          <li>
            <div className="link">
              <a href="#About">About</a>
            </div>
          </li>
          <li>
            <div className="link">
              <a href="#Reviews">Reviews</a>
            </div>
          </li>
          <li>
            <div className="link">
              <a href="#Employers">Employers</a>
            </div>
          </li>
          <li>
            <div className="link">
              <a href="#Contact">Contact</a>
            </div>
          </li>
        </ul>
        <div className="container-msg">
          <h6>Created By <span>Tinta</span> | All Rights Reserved</h6>
        </div>
      </div>
    </section>
  )
}

export default Footer