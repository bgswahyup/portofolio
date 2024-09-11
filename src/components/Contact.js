import React, { useState } from 'react';
import '../styles/Contact.css';
import { FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp, FaTelegram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple mailto functionality to send form data via email
    const mailtoLink = `mailto:bgswahyup@gmail.com?subject=Contact Request from ${formData.name}&body=Name: ${formData.name}%0D%0APhone: ${formData.phone}%0D%0AEmail: ${formData.email}%0D%0AAddress: ${formData.address}%0D%0AMessage: ${formData.message}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <section className="contact" id="contact">
      <div className="container-contact">
        <div className="left-section">
          <h2>Location</h2>
          {/* Google Map iframe */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d508393.2839620793!2d104.67266668940178!3d-5.4438969300707045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e4731e73de35367%3A0xe139f3219649ec86!2sPringsewu%20Regency%2C%20Lampung!5e0!3m2!1sen!2sid!4v1726052837450!5m2!1sen!2sid"
            width="100%"
            height="300"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Follow Me Section */}
          <div className="follow-me">
            <h3>Follow Me</h3>
            <div className="follow-me-icons">
              <a href="https://instagram.com/baguspratomo"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/bagus-wahyu-pratomo-iota/"><FaLinkedin /></a>
              <a href="https://youtube.com/@baguswahyu6457?si=5wOx477NCSYgz2GK"><FaYoutube /></a>
              <a href="https://wa.me/+6285933537249"><FaWhatsapp /></a>
              <a href="https://telegram.me/exceediota"><FaTelegram /></a>
            </div>
          </div>
        </div>

        <div className="right-section">
          <h2>Ask Me</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
