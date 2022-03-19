import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header className="container">
      <nav className='container container-nav'>
        <div className="container header_container">
          <ul className="list-navbar">
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#Menu">Menu</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <span className='burger'>🍔BURGER</span>
            </li>
            <li>
              <a href="#Reviews">Reviews</a>
            </li>
            <li>
              <a href="#Employers">Employers</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
          <div className="busqueda">
            <a href="#"><i className='fas fa-search'></i></a>
          </div>
          <div className="compras">
            <a href="#"><i className='fas fa-shopping-cart'></i></a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header