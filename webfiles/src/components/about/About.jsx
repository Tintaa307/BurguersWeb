import React from 'react'
import './about.css'
import Img from '..//menu/title-img.png'
import Img2 from '..//about/about-img.png'

const About = () => {
  return (
    <section className="section section-about" id='About'>
      <div className="container container-about">
        <div className="container-img-title">
          <img src={Img} alt="" />
          <h2>ABOUT US</h2>
        </div>
        <div className="container-about-info">
          <div className="container-img-info">
            <img src={Img2} alt="" />
          </div>
          <div className="container-text-info">
            <h2>STEP INTO A BURGER HEAVEN</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error consequatur placeat deserunt consequuntur, exercitationem quisquam itaque dicta nam recusandae minima esse ut officiis fuga similique ullam temporibus! Itaque voluptas officia labore saepe atque dolores provident enim! Sunt ratione mollitia, provident quasi quaerat excepturi doloribus alias fuga dolores inventore deleniti debitis aliquid quo corporis eaque dignissimos quam tempore dicta possimus accusantium!</p>
            <div className="container-expecifics">
              <div className="expecifics">
                <i className='fas fa-check'></i>
                <h5>Best Price</h5>
              </div>
              <div className="expecifics">
                <i className='fas fa-check'></i>
                <h5>Backed Buns</h5>
              </div>
              <div className="expecifics">
                <i className='fas fa-check'></i>
                <h5>Best Service</h5>
              </div>
              <div className="expecifics">
                <i className='fas fa-check'></i>
                <h5>Natural Cheese</h5>
              </div>
              <div className="expecifics">
                <i className='fas fa-check'></i>
                <h5>Fresh Ingredient</h5>
              </div>
              <div className="expecifics">
                <i className='fas fa-check'></i>
                <h5>Veg & Non-Veg</h5>
              </div>
            </div>
            <button id='btn-read-more'>Read More</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About