export default function Banner() {
  return (
    <div className="container-fluid banner bg-secondary my-5">
      <div className="container py-5">
        <div className="row g-4 align-items-center">
          {/* Left: Text */}
          <div className="col-lg-6">
            <div className="py-4">
              <h1 className="display-3 text-white">Professional Socket Set</h1>
              <p className="fw-normal display-4 text-dark mb-4">108-Piece Chrome Vanadium Kit</p>
              <p className="mb-4 text-dark fs-5">
                Complete ratcheting wrench, socket, and bit set for heavy-duty automotive, workshop, and home maintenance work.
              </p>
              <a href="#" className="banner-btn btn border-2 border-white rounded-pill text-dark py-3 px-5 fw-bold">
                SHOP NOW
              </a>
            </div>
          </div>

          {/* Right: Image with price badge */}
          <div className="col-lg-6">
            <div className="position-relative">
              <img src="/assets/img/agttools/IMG_20210220_173942_670-1.jpg" className="img-fluid w-100 rounded" style={{ maxHeight: "350px", objectFit: "cover" }} alt="108-Piece Socket Tool Set" />
              <div
                className="d-flex align-items-center justify-content-center bg-white rounded-circle position-absolute"
                style={{ width: "140px", height: "140px", top: 0, left: 0 }}
              >
                <div className="d-flex flex-column text-center">
                  <span className="h4 mb-0 fw-bold text-primary">₹4,500</span>
                  <span className="h6 text-muted mb-0">Complete Set</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
