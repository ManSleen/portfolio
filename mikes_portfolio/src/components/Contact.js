import React from "react"
import phone from "../assets/icons/phone.svg"
import contactPhone from "../assets/icons/contact-phone.svg"
import message from "../assets/icons/message.svg"

const Contact = () => {
  return (
    <div className="contact-container">
      <img src={phone} />
      <h2>Contact</h2>
      <h3>Reach me by phone, email or carrier pigeon</h3>
      <div className="contact-info-container">
        <img className="phone" src={contactPhone} />
        <p>(786) 286-8944</p>
      </div>
      <div className="contact-info-container">
        <img className="message" src={message} />
        <p>mike.vansleen@gmail.com</p>
      </div>
    </div>
  )
}

export default Contact
