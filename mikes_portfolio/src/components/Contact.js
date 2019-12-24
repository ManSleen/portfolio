import React from "react"
import phone from "../assets/icons/phone.svg"
import contactPhone from "../assets/icons/contact-phone.svg"
import message from "../assets/icons/message.svg"

const Contact = () => {
  return (
    <>
      <a className="contact-anchor" id="contact"></a>
      <div className="contact-container">
        <img src={phone} />
        <h2>Contact</h2>
        <p>Reach me by phone, email or carrier pigeon.</p>
        <div className="contact-info-container">
          <a href="tel:1-786-286-8944">
            <img className="phone" src={contactPhone} />
            <p>(786) 286-8944</p>
          </a>
        </div>
        <div className="contact-info-container">
          <a
            href="mailto:mike.vansleen@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="message" src={message} />
            <p>mike.vansleen@gmail.com</p>
          </a>
        </div>
      </div>
    </>
  )
}

export default Contact
