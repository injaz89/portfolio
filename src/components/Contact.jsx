import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend, FiMapPin } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch("https://formsubmit.co/ajax/mohamedinjas66@gmail.com", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message
        })
      });

      if (response.ok) {
        setStatus('success');
        alert("Message sent successfully!");
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        alert("Oops! Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      alert("Oops! Something went wrong. Please try again later.");
    }
    
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <section id="contact" className="section contact-section">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        Get In <span>Touch</span>
      </motion.h2>

      <div className="contact-container">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="contact-info glass-card"
        >
          <h3>Let's Connect</h3>
          <p>I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
          
          <div className="contact-methods">
            <div className="contact-method">
              <div className="method-icon"><FiMail /></div>
              <div className="method-details">
                <h4>Email</h4>
                <p>mohamedinjas66@gmail.com</p>
              </div>
            </div>
            <div className="contact-method">
              <div className="method-icon"><FiPhone /></div>
              <div className="method-details">
                <h4>Phone</h4>
                <p>+94 76 790 1071</p>
              </div>
            </div>
            <div className="contact-method">
              <div className="method-icon"><FiMapPin /></div>
              <div className="method-details">
                <h4>Location</h4>
                <p>No.60 Park Residence, Dehiwala</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <a href="https://github.com/injaz89" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub"><FiGithub /></a>
            <a href="https://linkedin.com/in/injas" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn"><FiLinkedin /></a>
          </div>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="contact-form glass-card"
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
              placeholder="John Doe"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required 
              placeholder="john@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              value={formData.message}
              onChange={handleChange}
              required 
              placeholder="Your message here..."
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'} <FiSend />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
