import React from "react";
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

export default function Footer() {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Subscribed!");
  };

  return (
    <footer
      id="contact"
      className="mt-5 border-top"
      style={{ backgroundColor: "#2c2c2c", color: "#f1f1f1" }}
    >
      {/* Main Footer Section */}
      <div className="container-fluid py-5">
        <div className="row gy-5">
          {/* Company Info */}
          <div className="col-md-4">
            <h3 className="fw-bold mb-3 text-uppercase text-light border-bottom pb-2 border-secondary">
              SuperLink Idea
            </h3>
            <p className="fst-italic mb-3 text-secondary">
              “Technology with human touch”
            </p>
            <ul className="list-unstyled small">
              <li className="mb-2">
                📍 Malsipuliya Chowk, Upper Nakronda, Dehradun, India
              </li>
              <li className="mb-2">
                📞 +91-9953277386, 9310863707
              </li>
              <li className="mb-2">
                ✉️ <a href="mailto:shiv@superlinkidea.com" className="text-light text-decoration-none">shiv@superlinkidea.com</a>
              </li>
              <li>🕒 Mon–Sat 09:00am–8:30pm</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5 className="fw-semibold mb-3 text-uppercase text-light border-bottom pb-2 border-secondary">
              Useful Links
            </h5>
            <div className="d-flex flex-wrap gap-3 small">
              {[
                "Home",
                "Our Products",
                "Our Services",
                "Blog",
                "Banking Details",
                "Contact Us",
                "About",
                "Checkout",
                "My Account",
                "Cart",
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-decoration-none text-secondary px-2 py-1 border rounded"
                  style={{
                    transition: "all 0.3s",
                    borderColor: "#444",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#444";
                    e.target.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = "#bbb";
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-md-4">
            <h5 className="fw-semibold mb-3 text-uppercase text-light border-bottom pb-2 border-secondary">
              Get Updates
            </h5>
            <form onSubmit={handleSubscribe}>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control bg-dark text-white border-secondary"
                  placeholder="Enter your email"
                  required
                />
                <button
                  type="submit"
                  className="btn btn-outline-light fw-semibold"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="small text-secondary">
              Stay informed with the latest updates and offers.
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-top border-secondary"></div>

      {/* Footer Bottom Bar */}
      <div
        style={{ backgroundColor: "#1e1e1e", color: "#ccc" }}
      >
        <div className="container py-3 d-flex flex-column flex-md-row justify-content-between align-items-center small">
          <p className="mb-2 mb-md-0">
            © 2025 SuperLink Idea • All rights reserved • 24x7 Online Support
          </p>

          {/* Social Icons */}
          <div className="d-flex gap-3">
            {[
              { icon: <FaFacebookF />, color: "#3b5998" },
              { icon: <FaXTwitter />, color: "#1da1f2" },
              { icon: <FaLinkedinIn />, color: "#0077b5" },
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                className="d-flex align-items-center justify-content-center rounded-circle border border-secondary"
                style={{
                  width: "38px",
                  height: "38px",
                  color: "white",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = item.color;
                  e.target.style.borderColor = item.color;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.borderColor = "#666";
                }}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
