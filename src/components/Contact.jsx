import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would connect this to a service like EmailJS
    console.log(formData);
    alert("Message sent successfully!");
    setFormData({ name: '', email: '', message: '' });
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
                <p>injas@example.com</p>
              </div>
            </div>
            <div className="contact-method">
              <div className="method-icon"><FiPhone /></div>
              <div className="method-details">
                <h4>Phone</h4>
                <p>+94 77 123 4567</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <a href="#" className="social-icon" aria-label="GitHub"><FiGithub /></a>
            <a href="#" className="social-icon" aria-label="LinkedIn"><FiLinkedin /></a>
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
          <button type="submit" className="btn btn-primary submit-btn">
            Send Message <FiSend />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
