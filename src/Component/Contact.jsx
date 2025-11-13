import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-primary">
            <FaEnvelope className="me-2" />
            Get in Touch
          </h2>
          <p className="text-muted">
            We’d love to hear from you! Fill out the form below and we’ll get back to you soon.
          </p>
        </div>

        <div className="row g-4">
          {/* Contact Info */}
          <div className="col-md-5">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="fw-bold mb-4">Contact Information</h5>

                <div className="d-flex align-items-start mb-3">
                  <FaMapMarkerAlt className="text-primary fs-5 me-3 mt-1" />
                  <p className="mb-0">123 Business Street, Dehradun, Uttarakhand, India</p>
                </div>

                <div className="d-flex align-items-start mb-3">
                  <FaPhoneAlt className="text-primary fs-5 me-3 mt-1" />
                  <p className="mb-0">+91 9717122688</p>
                </div>

                <div className="d-flex align-items-start mb-3">
                  <FaEnvelope className="text-primary fs-5 me-3 mt-1" />
                  <p className="mb-0">gm@indianbarcode.com</p>
                </div>

                <p className="text-muted small mt-4">
                  We usually respond within 24 hours. Thank you for reaching out!
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-7">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <form>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label">Your Name</label>
                      <input type="text" id="name" className="form-control" placeholder="Enter your name" required />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">Email Address</label>
                      <input type="email" id="email" className="form-control" placeholder="Enter your email" required />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input type="text" id="subject" className="form-control" placeholder="Enter subject" required />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea id="message" className="form-control" rows="4" placeholder="Write your message..." required></textarea>
                  </div>

                  <div className="text-end">
                    <button type="submit" className="btn btn-primary px-4 d-inline-flex align-items-center gap-2">
                      <FaPaperPlane /> Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
