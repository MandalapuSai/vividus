import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaWhatsapp, FaBars, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import BGV_Img from '../assets/bgv_img.jpeg';

const FooterComponent = () => {
  const [showIcons, setShowIcons] = useState(true);
  const navigate = useNavigate();

  const toggleIcons = (path) => {
    if (path) {
      navigate(path);
    } else {
      setShowIcons(!showIcons);
    }
  };

  return (
    <footer className="py-4 border-top" style={{
      backgroundImage: `url(${BGV_Img})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundColor: '#1D2124',
      color: 'black'
    }}>
      <div className="container">
        <div className="row">
          {/* Logo */}
          <div className="col-md-3 mb-4">
            <img
              onClick={() => navigate("/")}
              src='https://digispheretech.in/img/logo.webp
'
              alt="Logo"
              className="img-fluid mb-3"
              style={{ height: '80px', cursor: 'pointer' }}
            />
          </div>


          <div className="col-md-3 mb-4 text-black">
            <h5 className="mb-3 fw-semibold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><span onClick={() => toggleIcons('/')} style={{ cursor: 'pointer', display: 'block' }}>Home</span></li>
              <li><span onClick={() => toggleIcons('/about')} style={{ cursor: 'pointer', display: 'block' }}>About</span></li>
              <li><span onClick={() => toggleIcons('/product')} style={{ cursor: 'pointer', display: 'block' }}>Product</span></li>
              <li><span onClick={() => toggleIcons('/career')} style={{ cursor: 'pointer', display: 'block' }}>Career</span></li>
            </ul>
          </div>


          {/* Contact Info */}
          <div className="col-md-3 mb-4 text-black">
            <h5 className="mb-3 fw-semibold">Contact Info</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><FaEnvelope className="me-2" />abc@gmail.com</li>
              <li className="mb-2">
                <FaMapMarkerAlt className="me-2" />
                Vijayawada, Ramavarappadu, Andhra Pradesh, 520010
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Floating Icons */}
      <div className="position-fixed bottom-0 end-0 m-4">
        <button className="btn btn-warning rounded-circle mb-2" onClick={() => toggleIcons()}>
          <FaBars />
        </button>
        {showIcons && (
          <div className="d-flex flex-column align-items-end gap-2">
            <a href="" target="_blank" rel="noopener noreferrer" className="btn btn-danger rounded-circle">
              <FaEnvelope />
            </a>
            <a href="" className="btn btn-success rounded-circle">
              <FaPhone />
            </a>
            <a href="#" className="btn btn-primary rounded-circle">
              <FaLinkedin />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="btn btn-success rounded-circle">
              <FaWhatsapp />
            </a>
          </div>
        )}
      </div>

      {/* Footer Bottom */}
      <div className="border-top pt-3 text-center text-black">
        <p className="mb-0">&copy; 2025 digispheretech, all copy rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
