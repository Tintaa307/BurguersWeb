import React from 'react'
import './reviews.css'
import Img from '..//menu/title-img.png'
import Note1 from '..//reviews/blog-1.jpg'
import Note2 from '..//reviews/blog-2.jpg'
import Note3 from '..//reviews/blog-3.jpg'

/* ================ SWIPER JS ================ */

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: Note1,
    burger: 'Bellyful',
    info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, inventore deleniti   autem doloribus officia reprehenderit, libero veniam provident nisi illum impedit vero ipsum  saepe non a possimus velit distinctio. Architecto?'
  },
  {
    avatar: Note2,
    burger: 'BigNibble',
    info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, inventore deleniti   autem doloribus officia reprehenderit, libero veniam provident nisi illum impedit vero ipsum  saepe non a possimus velit distinctio. Architecto?'
  },
  {
    avatar: Note3,
    burger: 'ClubHouse',
    info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, inventore deleniti   autem doloribus officia reprehenderit, libero veniam provident nisi illum impedit vero ipsum  saepe non a possimus velit distinctio. Architecto?'
  },
] 

const Reviews = () => {
  return (
    <section className="section section-reviews" id='Reviews'>
      <div className="container-img-title">
        <img src={Img} alt="" />
        <h2>REVIEWS</h2>
      </div>
      <Swiper className="container container-reviews"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, burger, info}, index) => {
            return(
              <SwiperSlide key={index} className="container-review-info">
                <div className="note">
                  <img src={avatar} alt="img1" />
                  <h5>{burger}</h5>
                  <small>{info}</small>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Reviews

/*<div className="note">
    <img src={NOTE2} alt="img2" />
    <h5>{avatar}</h5>
    <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore natus voluptate deleniti ratione modi, rem dolor consequuntur harum fugit? Magni quasi ducimus ex saepe non, at impedit veniam numquam exercitationem.</small>
  </div>
  <div className="note">
   <img src={NOTE3} alt="img3" />
   <h5>AAAA</h5>
   <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore natus voluptate deleniti ratione modi, rem dolor consequuntur harum fugit? Magni quasi ducimus ex saepe non, at impedit veniam numquam exercitationem.</small>
  </div>*/