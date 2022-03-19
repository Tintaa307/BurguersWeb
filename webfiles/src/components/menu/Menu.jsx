import React from 'react'
import './menu.css'
import Img from '..//menu/title-img.png'
import Menu1 from '..//menu/product-1.png'
import Menu2 from '..//menu/product-2.png'
import Menu3 from '..//menu/product-3.png'
import Menu4 from '..//menu/product-4.png'
import Menu5 from '..//menu/product-5.png'
import Menu6 from '..//menu/product-6.png'

const Menu = () => {
  return (
    <section className="section section-menu">
        <div className="container container-menu">
            <div className="container-menu-services">
              <div className="box">
                <i className='fas fa-hamburger'></i>
                <h3>BEST QUALITY</h3>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>

              <div className="box">
                <i className='fas fa-headset'></i>
                <h3>24/7 SERVICE</h3>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>

              <div className="box">
                <i className='fas fa-motorcycle'></i>
                <h3>FREE DELIVERY</h3>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>

            <div className="container-menu-info" id='Menu'>
              <div className="container-img-title">
                <img src={Img} alt="" />
                <h2>OUR MENU</h2>
              </div>
              <div className="container-menu-products">
                <div className="menu">
                  <img src={Menu1} alt="" />
                  <div className="container-stars">
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                  </div>
                  <h4>CHEESE HAMBURGER</h4>
                  <h5>29.50$</h5>
                  <button className='btn-add-cart'>Add To Cart</button>
                </div>

                <div className="menu">
                  <img src={Menu2} alt="" />
                  <div className="container-stars">
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                  </div>
                  <h4>CHEESE HAMBURGER</h4>
                  <h5>29.50$</h5>
                  <button className='btn-add-cart'>Add To Cart</button>
                </div>

                <div className="menu">
                  <img src={Menu3} alt="" />
                  <div className="container-stars">
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                  </div>
                  <h4>CHEESE HAMBURGER</h4>
                  <h5>29.50$</h5>
                  <button className='btn-add-cart'>Add To Cart</button>
                </div>

                <div className="menu">
                  <img src={Menu4} alt="" />
                  <div className="container-stars">
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                  </div>
                  <h4>CHEESE HAMBURGER</h4>
                  <h5>29.50$</h5>
                  <button className='btn-add-cart'>Add To Cart</button>
                </div>

                <div className="menu">
                  <img src={Menu5} alt="" />
                  <div className="container-stars">
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                  </div>
                  <h4>CHEESE HAMBURGER</h4>
                  <h5>29.50$</h5>
                  <button className='btn-add-cart'>Add To Cart</button>
                </div>

                <div className="menu">
                  <img src={Menu6} alt="" />
                  <div className="container-stars">
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                  </div>
                  <h4>CHEESE HAMBURGER</h4>
                  <h5>29.50$</h5>
                  <button className='btn-add-cart'>Add To Cart</button>
                </div>
              </div>
              
            </div>
        </div>
    </section>
  )
}

export default Menu