import React from 'react'
import './employers.css'
import Img from '..//menu/title-img.png'
import Employer1 from '..//employers/pic-1.png'
import Employer2 from '..//employers/pic-2.png'
import Employer3 from '..//employers/pic-3.png'

const Employers = () => {
  return (
    <section className="section section-employers" id='Employers'>
      <div className="container container-employers">
        <div className="container-img-title">
          <img src={Img} alt="" />
          <h2>EMPLOYERS</h2>
        </div>
        <div className="container-info-employers">
          <div className="employer">
            <img src={Employer1} alt="" />
            <div className="container-stars">
              <i className='fas fa-star'></i>
              <i className='fas fa-star'></i>
              <i className='fas fa-star'></i>
              <i className='fas fa-star'></i>
            </div>
            <h5>Lucy Miller</h5>
          </div>
          <div className="employer">
            <img src={Employer2} alt="" />
            <div className="container-stars">
              <i className='fas fa-star'></i>
              <i className='fas fa-star'></i>
              <i className='fas fa-star'></i>
              <i className='fas fa-star'></i>
            </div>
            <h5>John Brown</h5>
          </div>
          <div className="employer">
            <img src={Employer3} alt="" />
            <div className="container-stars">
              <i className='fas fa-star'></i>
              <i className='fas fa-star'></i>
              <i className='fas fa-star'></i>
              <i className='fas fa-star'></i>
            </div>
            <h5>Sophia Jones</h5>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Employers