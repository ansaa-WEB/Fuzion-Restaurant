import React, { useState } from 'react';
import './reservation.css';

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequest: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="reservation-page-container">
      {/* Hero Section */}
      <section className="reservation-hero-section">
        <div className="reservation-hero-overlay"></div>
        <div className="reservation-hero-content">
          <span className="reservation-breadcrumb">Book A Table</span>
          <h1 className="reservation-hero-title">Table Reservation</h1>
          <p className="reservation-hero-subtitle">Reserve your spot for an unforgettable dining experience.</p>
        </div>
      </section>

      {/* Form Section */}
      <section className="reservation-content-section">
        <div className="reservation-card">
          {submitted ? (
            <div className="success-message">
              <h2>Thank You, {formData.name}!</h2>
              <p>Your table for {formData.guests} has been successfully reserved for {formData.date} at {formData.time}.</p>
              <button onClick={() => setSubmitted(false)} className="reservation-btn">Book Another Table</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="reservation-form">
              <h2>Reserve Your Experience</h2>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" name="name" required placeholder="Enter your name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email5" name="email" required placeholder="Enter your email" value={formData.email} onChange={handleChange} />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" name="phone" required placeholder="Enter phone number" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Number of Guests</label>
                  <select name="guests" value={formData.guests} onChange={handleChange}>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5+">5+ People</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Date</label>
                  <input type="date" name="date" required value={formData.date} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Time</label>
                  <input type="time" name="time" required value={formData.time} onChange={handleChange} />
                </div>
              </div>

              <div className="form-group full-width">
                <label>Special Requests (Optional)</label>
                <textarea name="specialRequest" rows="4" placeholder="Any allergies or special arrangements?" value={formData.specialRequest} onChange={handleChange}></textarea>
              </div>

              <button type="submit" className="reservation-btn">Confirm Reservation</button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}