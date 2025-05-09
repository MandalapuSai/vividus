import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BGV_Img from "../assets/bgv_img.jpeg";

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = (path) => {
    setIsOpen(!isOpen);
    if (path) navigate(path);
  };

  return (
    <header
      className="bg-white shadow sticky-top"
      style={{
        backgroundImage: `url(${BGV_Img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <nav className="navbar navbar-expand-lg navbar-light container py-3">
        <span
          className="navbar-brand"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <img
            src="https://digispheretech.in/img/logo.webp"
            alt="Logo"
            height="80"
          />
        </span>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            {/* <li className="nav-item">
              <span
                className="nav-link"
                style={{ color: "black", cursor: "pointer" }}
                onClick={() => toggleMenu("/")}
              >
              </span>
            </li> */}
            <li className="nav-item">
              <span
                className="nav-link"
                style={{ color: "black", cursor: "pointer" }}
                onClick={() => toggleMenu("/about")}
              >
                About
              </span>
            </li>
            <li className="nav-item">
              <span
                className="nav-link"
                style={{ color: "black", cursor: "pointer" }}
                onClick={() => toggleMenu("/product")}
              >
                Product
              </span>
            </li>
            <li className="nav-item">
              <span
                className="nav-link"
                style={{ color: "black", cursor: "pointer" }}
                onClick={() => toggleMenu("/career")}
              >
                Career
              </span>
            </li>
            <li className="nav-item">
              <span
                className="nav-link"
                style={{ color: "black", cursor: "pointer" }}
                onClick={() => toggleMenu("/contact-us")}
              >
                Contact
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
