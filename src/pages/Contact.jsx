import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, User, FileText } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('idle'); // idle, sending, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    setTimeout(() => {
      // Create new message object
      const newMessage = {
        id: Date.now(),
        name,
        email,
        subject: subject || 'General Collaboration Inquiry',
        message,
        date: new Date().toLocaleString(),
        read: false
      };

      // Read existing messages and append
      const existingMessages = JSON.parse(localStorage.getItem('messages')) || [];
      const updatedMessages = [newMessage, ...existingMessages];
      localStorage.setItem('messages', JSON.stringify(updatedMessages));

      // Reset states
      setStatus('success');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');

      // Auto clear success banner
      setTimeout(() => {
        setStatus('idle');
      }, 5000);

    }, 1200); // 1.2 second loading state simulation
  };

  return (
    <section id="contact" className="contact-section-container">
      <div className="contact-grid">
        
        {/* Left Side Details */}
        <div className="contact-info-col">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Let's build <br />something great <br />together.</h2>
          <p className="contact-paragraph">
            Feel free to reach out if you have a project idea, want to discuss a full-stack job opportunity, or just want to chat about UI/UX design trends. I am always open to creative collaborations.
          </p>

          <div className="contact-details-box">
            <div className="contact-detail-item glass-panel">
              <Mail className="contact-detail-icon cyan" size={20} />
              <div className="detail-texts">
                <span className="detail-title">Send an Email</span>
                <a href="mailto:kumarneeraj.inbox@gmail.com" className="detail-link">kumarneeraj.inbox@gmail.com</a>
              </div>
            </div>

            <div className="contact-detail-item glass-panel">
              <MapPin className="contact-detail-icon violet" size={20} />
              <div className="detail-texts">
                <span className="detail-title">Current Location</span>
                <span className="detail-val">Mohali, Punjab, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="contact-form-col">
          <div className="contact-form-card glass-panel">
            
            {status === 'success' && (
              <div className="success-banner">
                <CheckCircle2 size={18} className="banner-success-icon" />
                <span>Message successfully sent! I will respond shortly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="actual-contact-form">
              
              <div className="form-row-half">
                <div className="form-group violet-focus">
                  <label htmlFor="form-name">Name</label>
                  <div className="input-icon-wrapper">
                    <User size={15} className="input-icon" />
                    <input 
                      type="text" 
                      id="form-name" 
                      placeholder="Your Name" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      required 
                    />
                  </div>
                </div>

                <div className="form-group cyan-focus">
                  <label htmlFor="form-email">Email</label>
                  <div className="input-icon-wrapper">
                    <Mail size={15} className="input-icon" />
                    <input 
                      type="email" 
                      id="form-email" 
                      placeholder="your@email.com" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      required 
                    />
                  </div>
                </div>
              </div>

              <div className="form-group violet-focus">
                <label htmlFor="form-subject">Subject</label>
                <div className="input-icon-wrapper">
                  <FileText size={15} className="input-icon" />
                  <input 
                    type="text" 
                    id="form-subject" 
                    placeholder="Project Inquiry / Job Opportunity" 
                    value={subject} 
                    onChange={(e) => setSubject(e.target.value)} 
                  />
                </div>
              </div>

              <div className="form-group cyan-focus">
                <label htmlFor="form-message">Message</label>
                <textarea 
                  id="form-message" 
                  placeholder="Tell me about your product details, goals, and milestones..." 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)} 
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn-primary-large submit-form-btn"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <>
                    <span className="btn-spinner"></span> Sending Message...
                  </>
                ) : (
                  <>
                    Send Message <Send size={15} />
                  </>
                )}
              </button>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
