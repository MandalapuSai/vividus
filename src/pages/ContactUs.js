import React, { useRef, useState, useEffect } from 'react';
import { FaHandsHelping } from 'react-icons/fa';
import axios from 'axios';
import Contact_Img from "../assets/Contact.jpg";

const ContactUs = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Mobile: '',
    Email: '',
    Message: '',
    Date: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
  };

  const closeModal = () => {
    setFormData({
      FirstName: '',
      LastName: '',
      Mobile: '',
      Email: '',
      Message: '',
      Date: ''
    });
    setOpenPopup(false);
  };

  return (
    <div className="bg-dark text-light py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Image */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img src={Contact_Img} alt="Contact Illustration" className="img-fluid rounded" />
          </div>

          {/* Right Side - Form */}
          <div className="col-md-6">
            <h1 className="text-center text-light mb-4" style={{ fontFamily: 'Rubik, sans-serif' }}>Contact Us</h1>
            <form ref={form} onSubmit={sendEmail}>
              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="FirstName" className="form-label">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="FirstName"
                    name="FirstName"
                    onChange={handleChange}
                    value={formData.FirstName}
                    required
                    disabled={loading}
                  />
                </div>
                <div className="col">
                  <label htmlFor="LastName" className="form-label">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="LastName"
                    name="LastName"
                    onChange={handleChange}
                    value={formData.LastName}
                    required
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <label htmlFor="Mobile" className="form-label">Mobile</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Mobile"
                    name="Mobile"
                    onChange={handleChange}
                    value={formData.Mobile}
                    required
                    disabled={loading}
                  />
                </div>
                <div className="col">
                  <label htmlFor="Email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="Email"
                    name="Email"
                    onChange={handleChange}
                    value={formData.Email}
                    required
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="Message" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="Message"
                  name="Message"
                  rows="4"
                  onChange={handleChange}
                  value={formData.Message}
                  required
                  disabled={loading}
                ></textarea>
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-warning px-4" disabled={loading}>
                  {loading ? "Sending..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Success Popup */}
        {openPopup && (
          <div className="modal show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content bg-light">
                <div className="modal-body text-center py-4">
                  <div className="mb-3">
                    <FaHandsHelping size={40} color="#4CAF50" />
                  </div>
                  <h5 className="text-success mb-2">Thank you for submitting your response!</h5>
                  <p className="text-success">We will reach out to you soon.</p>
                </div>
                <div className="modal-footer justify-content-center">
                  <button type="button" className="btn btn-success" onClick={closeModal}>OK</button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ContactUs;
