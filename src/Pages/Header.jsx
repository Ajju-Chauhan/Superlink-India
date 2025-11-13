import React from "react";
import Logo from "../assets/Logo.png";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaBoxOpen,
  FaCertificate,
  FaIndustry,
  FaUserFriends,
  FaEnvelopeOpenText,
  FaWhatsapp,
} from "react-icons/fa";

export default function Header() {
  return (
    <>
      {/* Top contact bar */}
      <div className="bg-primary text-white py-2">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center small text-center text-md-start">
          <span className="d-flex align-items-center gap-2 mb-1 mb-md-0">
            <FaEnvelope /> gm@indianbarcode.com
          </span>
          <span className="d-flex align-items-center gap-2">
            <FaPhoneAlt /> +91 9717122688
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg " style={{ backgroundColor: "white" }}>
        <div className="container">
          {/* Brand / Logo */}
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img
              src={Logo}
              alt="Mindware Logo"
              className="img-fluid"
              style={{
                maxHeight: "55px",
                width: "auto",
                objectFit: "contain",
              }}
            />
          </a>

          {/* Toggler for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-center text-lg-start">
              <li className="nav-item">
                <a className="nav-link text-black d-flex align-items-center justify-content-center gap-2" href="/products">
                  <FaBoxOpen /> Our Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black d-flex align-items-center justify-content-center gap-2" href="/applications">
                  <FaIndustry /> Applications
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black d-flex align-items-center justify-content-center gap-2" href="/certificates">
                  <FaCertificate /> Certificates
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="/brands/tsc">TSC</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="/brands/zebra">Zebra</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="/brands/citizen">Citizen</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black d-flex align-items-center justify-content-center gap-2" href="/partners">
                  <FaUserFriends /> Partners
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black d-flex align-items-center justify-content-center gap-2" href="/contact">
                  <FaEnvelopeOpenText /> Contact
                </a>
              </li>

              {/* WhatsApp Button */}
              <li className="nav-item d-flex align-items-center justify-content-center ms-lg-3">
                <a
                  href="https://wa.me/+919953277386?text=Hi%20SuperLink%20Idea"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success d-flex align-items-center gap-2 px-3 py-2"
                  style={{ borderRadius: "30px", fontWeight: "500" }}
                >
                  <FaWhatsapp size={18} /> WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
