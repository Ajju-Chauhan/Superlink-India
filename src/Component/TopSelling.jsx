import { FaShoppingCart, FaExternalLinkAlt, FaStar } from "react-icons/fa";

const products = [
  {
    title: "TDP 247 Direct Thermal Label Printer 203dpi",
    rating: 5,
    reviews: 204,
    imageAlt: "TDP 247 printer",
    imageSrc: "https://m.media-amazon.com/images/I/61YzS3iVjIL._AC_SL1500_.jpg",
  },
  {
    title: "Mindware 21.5'' Capacitive Touch Monitor",
    rating: 5,
    reviews: 92,
    imageAlt: "Touch monitor",
    imageSrc: "https://m.media-amazon.com/images/I/71UQ7o7R32L._AC_SL1500_.jpg",
  },
  {
    title: "Mindware PVC Lamination Card",
    rating: 5,
    reviews: 128,
    imageAlt: "PVC lamination card",
    imageSrc: "https://m.media-amazon.com/images/I/61RhH7LOp8L._AC_SL1500_.jpg",
  },
  {
    title: "TSC TTP 244 Plus Printer Head",
    rating: 5,
    reviews: 128,
    imageAlt: "TSC printer head",
    imageSrc: "https://m.media-amazon.com/images/I/61FV+pruflL._AC_SL1500_.jpg",
  },
  {
    title: "Mindware On-Counter 1D/2D Barcode Scanner",
    rating: 5,
    reviews: 164,
    imageAlt: "On-counter barcode scanner",
    imageSrc: "https://m.media-amazon.com/images/I/61YMIhYHQIL._AC_SL1500_.jpg",
  },
  {
    title: "Mindware Barcode Ribbons",
    rating: 5,
    reviews: 150,
    imageAlt: "Barcode ribbons",
    imageSrc: "https://m.media-amazon.com/images/I/61Hc8N9jF2L._AC_SL1500_.jpg",
  },
];

export default function TopSelling() {
  return (
    <section className="py-5 bg-light" aria-label="Top Selling Products">
      <div className="container">
        <h2 className="text-center fw-bold mb-5 text-primary">
          🏆 Top Selling Products
        </h2>
        <div className="row g-4">
          {products.map((p) => (
            <div key={p.title} className="col-sm-6 col-lg-4">
              <div className="card h-100 shadow-sm border-0 rounded-3">
                {/* Image */}
                <div className="ratio ratio-4x3">
                  <img
                    src={p.imageSrc}
                    alt={p.imageAlt}
                    className="img-fluid object-fit-cover rounded-top"
                  />
                </div>

                {/* Card Body */}
                <div className="card-body">
                  <h5 className="card-title fw-semibold">{p.title}</h5>
                  <div className="d-flex align-items-center mt-2">
                    {Array.from({ length: p.rating }).map((_, i) => (
                      <FaStar key={i} color="gold" className="me-1" />
                    ))}
                    <small className="text-muted ms-1">({p.reviews})</small>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="card-footer bg-white border-0 d-flex justify-content-between align-items-center">
                  <button className="btn btn-primary btn-sm d-flex align-items-center gap-2">
                    <FaShoppingCart /> Buy Now
                  </button>
                  <a
                    href="#"
                    className="btn btn-outline-primary btn-sm d-flex align-items-center gap-2"
                  >
                    <FaExternalLinkAlt /> View More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
