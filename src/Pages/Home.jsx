"use client";
import Hero from "./Hero";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Top Selling Products */}
      <section aria-labelledby="top-selling" className="py-5">
        <div className="container">
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-between mb-4">
            <h2 id="top-selling" className="h3 fw-semibold mb-2 mb-md-0">
              Top Selling Products
            </h2>
            <a href="/products" className="text-primary text-decoration-none fw-500">
              View All →
            </a>
          </div>

          <div className="row g-4">
            {/* Product Card 1 */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <img
                  src="https://m.media-amazon.com/images/I/61eqyvdgC4L._AC_SL1500_.jpg"
                  alt="TDP 247 Direct Thermal Label Printer"
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">TDP 247 Direct Thermal</h5>
                  <p className="card-text text-muted small">
                    203 DPI Label Printer with high-speed printing capabilities
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="badge bg-warning text-dark">★★★★★</span>
                    <small className="text-muted">204 reviews</small>
                  </div>
                </div>
                <div className="card-footer bg-white border-0 pt-0">
                  <button className="btn btn-sm btn-primary w-100">Buy Now</button>
                </div>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <img
                  src="https://m.media-amazon.com/images/I/61kpXScHLfL._AC_SL1500_.jpg"
                  alt="Mindware Barcode Scanner"
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Mindware Barcode Scanner</h5>
                  <p className="card-text text-muted small">
                    1D/2D On-Counter Scanner with advanced reading technology
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="badge bg-warning text-dark">★★★★★</span>
                    <small className="text-muted">164 reviews</small>
                  </div>
                </div>
                <div className="card-footer bg-white border-0 pt-0">
                  <button className="btn btn-sm btn-primary w-100">Buy Now</button>
                </div>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <img
                  src="https://m.media-amazon.com/images/I/61yOfa8aDAL._AC_SL1500_.jpg"
                  alt="Barcode Ribbons"
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">Barcode Ribbons</h5>
                  <p className="card-text text-muted small">
                    High-quality thermal transfer ribbons for all printer types
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="badge bg-warning text-dark">★★★★★</span>
                    <small className="text-muted">128 reviews</small>
                  </div>
                </div>
                <div className="card-footer bg-white border-0 pt-0">
                  <button className="btn btn-sm btn-primary w-100">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="h3 fw-semibold mb-4">Featured Brands</h2>
          <div className="row g-4">
            {[
              {
                img: "https://upload.wikimedia.org/wikipedia/commons/0/0c/TSC_Auto_ID_Technology_logo.png",
                title: "TSC Printers",
                desc: "National authorization sales partner. Best prices and support.",
                color: "#e3f2fd",
              },
              {
                img: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Zebra_Technologies_logo.svg",
                title: "Zebra Printers",
                desc: "Distributor & supplier with best service support nationwide.",
                color: "#f3e5f5",
              },
              {
                img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Citizen_logo.svg",
                title: "Citizen Printers",
                desc: "Expert distributor with comprehensive service support.",
                color: "#e0f2f1",
              },
            ].map((brand, i) => (
              <div key={i} className="col-md-4">
                <div className="card border-0 shadow-sm h-100">
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      height: "200px",
                      background: brand.color,
                    }}
                  >
                    <img
                      src={brand.img}
                      alt={brand.title}
                      style={{ maxHeight: "150px", objectFit: "contain" }}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{brand.title}</h5>
                    <p className="card-text text-muted small">{brand.desc}</p>
                  </div>
                  <div className="card-footer bg-white border-0">
                    <a href="#" className="btn btn-sm btn-outline-primary w-100">
                      View More →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="h3 fw-semibold mb-4">Explore Applications</h2>
          <div className="row g-3">
            {["Retail", "Logistics", "Garment", "Chemical", "Automotive", "Jewelry", "Durable Goods"].map((app) => (
              <div key={app} className="col-md-3 col-sm-6">
                <div
                  className="p-3 rounded text-center border"
                  style={{
                    background: "#f0f4ff",
                    borderColor: "#d0deff",
                    cursor: "pointer",
                    transition: "0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "#0b5ed7";
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.borderColor = "#0b5ed7";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "#f0f4ff";
                    e.currentTarget.style.color = "inherit";
                    e.currentTarget.style.borderColor = "#d0deff";
                  }}
                >
                  <p className="mb-0 fw-500">{app}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-5 text-white text-center"
        style={{
          background: "linear-gradient(135deg, #0b5ed7 0%, #084298 100%)",
        }}
      >
        <div className="container-fluid m-0">
          <h2 className="h3 fw-bold">Need a Custom Solution?</h2>
          <p className="lead mb-4">Contact our team for personalized barcode solutions for your business</p>
          <div className="d-flex flex-column flex-md-row gap-3 justify-content-center">
            <button className="btn btn-lg btn-success px-4">Get a Quote</button>
            <a href="https://wa.me/99717122688?text=Hi%20SuperLink%20Idea" className="btn btn-lg btn-outline-light px-4">
              WhatsApp: +91-99717122688
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
