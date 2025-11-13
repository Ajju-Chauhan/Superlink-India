import { FaQuoteRight, FaBoxOpen } from "react-icons/fa";

export default function Home() {
  return (
    <section aria-label="Hero" className="bg-primary text-white py-5">
      <div className="container-fluid">
        <div className="row align-items-center g-4">
          
          {/* Left Section - Text */}
          <div className="col-md-6">
            <p
              className="text-uppercase small opacity-75"
              style={{ letterSpacing: "0.1em" }}
            >
              Since 1907
            </p>

            <h2 className="display-5 fw-bold mt-2">
              Quality, Reliability, Best Support
            </h2>

            <p className="lead mt-4 opacity-90">
              Redefining Technology with Human Touch. Nationwide sales, service, 
              and support for barcode printers, scanners, ribbons, labels, and more.
            </p>

            <div className="d-flex flex-wrap gap-3 mt-4">
              <button className="btn btn-success btn-lg d-flex align-items-center gap-2">
                <FaQuoteRight size={18} />
                Get a Quote
              </button>

              <button className="btn btn-outline-light btn-lg d-flex align-items-center gap-2">
                <FaBoxOpen size={18} />
                View Products
              </button>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="col-md-6">
            <div className="bg-light rounded-3 p-3 shadow-sm">
              <img
                src="https://bdsdoc.com/wp-content/uploads/2024/09/Kinds-of-Printers.jpg"
                alt="Barcode printer on laptop"
                className="img-fluid rounded-3"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
