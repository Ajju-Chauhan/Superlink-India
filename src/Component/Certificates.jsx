import { FaCertificate } from "react-icons/fa";

export default function Certificates() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-2">
            <FaCertificate className="text-primary me-2" />
            Our Certifications
          </h2>
          <p className="text-muted mb-0">
            Recognized and trusted by industry leaders for our quality and expertise.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="row g-4 justify-content-center">
          <CertificateTile
            title="TSC Authorization"
            imageAlt="TSC authorization certificate"
          />
          <CertificateTile
            title="Posiflex VAR"
            imageAlt="Posiflex VAR certificate"
          />
          <CertificateTile
            title="Industry Certification"
            imageAlt="Industry certificate"
          />
        </div>
      </div>
    </section>
  );
}

function CertificateTile({ title, imageAlt }) {
  const imageSrcMap = {
    "TSC Authorization": "/tsc-authorization-certificate.jpg",
    "Posiflex VAR": "/posiflex-var-certificate.jpg",
    "Industry Certification": "/official-certificate-document.jpg",
  };

  const imageSrc = imageSrcMap[title];

  return (
    <div className="col-md-4 col-sm-6">
      <div className="card border-0 shadow-sm h-100 hover-shadow transition">
        <div className="ratio ratio-3x4 rounded-top overflow-hidden">
          <img
            src={imageSrc || "/placeholder.svg"}
            alt={imageAlt}
            className="w-100 h-100 object-fit-cover"
          />
        </div>
        <div className="card-body text-center">
          <FaCertificate className="text-primary fs-3 mb-2" />
          <h5 className="card-title fw-semibold">{title}</h5>
          <p className="card-text text-muted small">
            Officially verified and recognized for excellence.
          </p>
        </div>
        <div className="card-footer text-center bg-white border-0">
          <button className="btn btn-outline-primary btn-sm rounded-pill px-4">
            View Certificate
          </button>
        </div>
      </div>
    </div>
  );
}
