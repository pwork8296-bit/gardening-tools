export default function Banner() {
  return (
    <div className="container-fluid banner bg-secondary my-5">
      <div className="container py-5">
        <div className="row g-4 align-items-center">
          {/* Left: Text */}
          <div className="col-lg-6">
            <div className="py-4">
              <h1 className="display-3 text-white">Organic Vermicompost</h1>
              <p className="fw-normal display-4 text-dark mb-4">Nutrient-Rich Soil Fertilizer</p>
              <p className="mb-4 text-dark fs-5">
                Give your indoor &amp; flowering plants 100% natural organic nourishment. Guaranteed healthy growth and root strength.
              </p>
              <a href="#" className="banner-btn btn border-2 border-white rounded-pill text-dark py-3 px-5 fw-bold">
                SHOP NOW
              </a>
            </div>
          </div>

          {/* Right: Image with price badge */}
          <div className="col-lg-6">
            <div className="position-relative">
              <img src="/assets/img/plants/vermicompost.jpg" className="img-fluid w-100 rounded" style={{ maxHeight: "350px", objectFit: "cover" }} alt="Organic Vermicompost" />
              <div
                className="d-flex align-items-center justify-content-center bg-white rounded-circle position-absolute"
                style={{ width: "130px", height: "130px", top: 0, left: 0 }}
              >
                <div className="d-flex flex-column text-center">
                  <span className="h3 mb-0 fw-bold text-primary">₹99</span>
                  <span className="h6 text-muted mb-0">1 kg pack</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
