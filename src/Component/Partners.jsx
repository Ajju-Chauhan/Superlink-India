import  React from "react";

const partners = [
  { name: "TSC", alt: "TSC logo", src: "/tsc-logo.jpg" },
  { name: "Zebra", alt: "Zebra logo", src: "/zebra-logo.jpg" },
  { name: "Citizen", alt: "Citizen logo", src: "/citizen-logo.jpg" },
  { name: "TVS Electronics", alt: "TVS Electronics logo", src: "/tvs-electronics-logo.jpg" },
  { name: "Wincode", alt: "Wincode logo", src: "/wincode-logo.jpg" },
  { name: "Zenpert", alt: "Zenpert logo", src: "/placeholder.svg?height=28&width=100" },
];

export default function Partners() {
  return (
    <div className="container">
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-6 g-4 justify-content-center">
        {partners.map((p) => (
          <div key={p.name} className="col text-center">
            <div
              className="card border-0 shadow-sm d-flex align-items-center justify-content-center p-3 h-100"
              style={{
                transition: "all 0.3s ease",
                borderRadius: "10px",
                backgroundColor: "#ffffff",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px) scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0) scale(1)")}
            >
              <img
                src={p.src || "/placeholder.svg"}
                alt={p.alt}
                className="img-fluid"
                style={{
                  maxHeight: "50px",
                  objectFit: "contain",
                  filter: "grayscale(100%) brightness(0.8)",
                  transition: "filter 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.filter = "none")}
                onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(100%) brightness(0.8)")}
              />
              <p className="mt-2 fw-semibold text-muted small">{p.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
