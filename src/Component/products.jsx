import TopSelling from "./TopSelling";

export default function Products() {
  return (
    <main className="min-vh-100 bg-light">
      {/* Products Section */}
      <section className="py-5">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-5">
            <h1 className="fw-bold display-6 text-primary">Our Products</h1>
            <p className="text-muted fs-5 mt-3">
              Explore printers, scanners, ribbons, labels, heads, and more.
            </p>
            <div className="d-flex justify-content-center mt-3">
              <div className="border-bottom border-3 border-primary" style={{ width: "80px" }}></div>
            </div>
          </div>

          {/* Products Listing */}
          <div className="mt-4">
            <TopSelling />
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
        <div className="container">
          <h2 className="fw-bold mb-3">Need Help Choosing the Right Product?</h2>
          <p className="lead mb-4">
            Get in touch with our support team for personalized product recommendations.
          </p>
          <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
            <a
              href="https://wa.me/99717122688?text=Hi%20SuperLink%20Idea,%20I%20need%20help%20choosing%20a%20product."
              className="btn btn-success btn-lg px-4"
            >
              Chat on WhatsApp
            </a>
            <a href="/contact" className="btn btn-outline-light btn-lg px-4">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
