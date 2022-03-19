import React from 'react'
import './contact.css'
import Img from '..//menu/title-img.png'

const Contact = () => {
  return (
    <section className="section section-contact" id='Contact'>
      <div className="container container-contact">
        <div className="container-img-title">
          <img src={Img} alt="" />
          <h2>CONTACT</h2>
        </div>
        <div className="container-info-contact">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52559.22591752211!2d-58.440946320898426!3d-34.5800907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb58f29a07ce5%3A0x9ff91a2fa763407a!2sThe%20Food%20Truck%20Store%20-%20Palermo!5e0!3m2!1ses!2sar!4v1647566244396!5m2!1ses!2sar" className='map'></iframe>
          <div className="container-icons-contact">
            <div className="contacts">
              <i className='fas fa-phone'></i>
              <h3>PHONE:</h3>
              <h6>+5491144489123</h6>
              <h6>+5491158251137</h6>
            </div>
            <div className="contacts">
              <i className='fas fa-envelope'></i>
              <h3>EMAIL:</h3>
              <h6>Valentinta@icloud.com</h6>
              <h6>Valenbola307@gmail.com</h6>
            </div>
            <div className="contacts">
              <i className='fas fa-phone'></i>
              <h3>ADDRESS:</h3>
              <h6>Palermo Av.Jose Flores</h6>
              <h6>Belgrano Av.Cabildo</h6>
            </div>
          </div>
          <div className="container-form">
            <h2>GET IN TOUCH</h2>
            <form className="contact-form" autoComplete='off'>
              <input type="text" id='txtname' placeholder='FullName'/>
              <input type="email" id='txtmail' placeholder='Email'/>
              <input type="tel" id='txtnumber' placeholder='Number'/>
              <input type="text" className='message' id='txtmessage' placeholder='Review'/>
              <input type="submit" value="Send Message" id='btn-send' className='btn'/>
           </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact