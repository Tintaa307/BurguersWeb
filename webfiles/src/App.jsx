import React from 'react'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Menu from './components/menu/Menu'
import Employers from './components/employers/Employers'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Reviews from './components/reviews/Reviews'

const App = () => {
  return (
    <>
      <Header/>
      <Home/>
      <Menu/>
      <About/>
      <Reviews/>
      <Employers/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App