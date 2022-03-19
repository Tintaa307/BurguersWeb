import React from 'react'
import './home.css'
import Img from '../home/burger-baner.png'

const Home = () => {
  return (
    <section className="section section_home" id='Home'>
      <div className='container home_container'>
          <div className="container-imgs">
            <img src={Img}/>
          </div>
          <div className="container-home-info">
            <h1>SO MEATY YOU'LL GO CRAZY</h1>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nobis officiis deserunt at vitae consectetur!</h5>
            <button className='btn-home'>Our Menu</button>
          </div>
      </div>
    </section>
  )
}

export default Home