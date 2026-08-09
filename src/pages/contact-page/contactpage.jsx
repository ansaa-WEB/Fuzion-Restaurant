import React, { useState } from 'react';
import './contactpage.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <div className="contact-page-container">
      {/* Hero Section with Background Image */}
      <section className="contact-hero-section">
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content">
          {/* Yahan Home / Contact Us ki jagah naya stylish tag laga diya hai */}
          <span className="contact-breadcrumb">We'd Love To Hear From You</span>
          <h1 className="contact-hero-title">Get In Touch</h1>
          <p className="contact-hero-subtitle">Reach out for reservations, queries, or feedback anytime.</p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="contact-content-section">
        <div className="contact-grid-wrapper">
          
          {/* Left Side: Contact Information Cards */}
          <div className="contact-info-side">
            <h2>Let's Start a Conversation</h2>
            <p className="contact-info-desc">
              Whether you have a question about our menu, private events, or delivery, our team is always ready to assist you.
            </p>

            <div className="contact-cards-grid">
              <div className="contact-info-card">
                <div className="contact-icon-box">📍</div>
                <div>
                  <h3>Our Location</h3>
                  <p>123 Luxury Avenue, Gourmet Street, City</p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-icon-box">📞</div>
                <div>
                  <h3>Phone Number</h3>
                  <p>+92 300 1234567<br />+92 51 9876543</p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-icon-box">✉️</div>
                <div>
                  <h3>Email Address</h3>
                  <p>support@fuzionrestaurant.com<br />info@fuzion.com</p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-icon-box">⏰</div>
                <div>
                  <h3>Working Hours</h3>
                  <p>Mon - Sun: 12:00 PM - 11:30 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="contact-form-side">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Send Us a Message</h2>
              <p className="form-sub-text">Fill out the form below and we’ll get back to you shortly.</p>

              {submitted && (
                <div className="contact-success-msg">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="John Doe" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>Your Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="john@example.com" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input 
                    type="text" 
                    name="phone" 
                    placeholder="+92 3XX XXXXXXX" 
                    value={formData.phone} 
                    onChange={handleChange} 
                  />
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input 
                    type="text" 
                    name="subject" 
                    placeholder="Reservation / Query" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <label>Your Message</label>
                <textarea 
                  name="message" 
                  rows="5" 
                  placeholder="Write your message here..." 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                ></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">Send Message</button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}