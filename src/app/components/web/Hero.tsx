import { siteConfig } from "../../config/site";

export default function Hero() {
  return (
    <div className="container-fluid py-5 mb-5 hero-header">
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          {/* Left: Heading & Search */}
          <div className="col-md-12 col-lg-7">
            <h4 className="mb-3 text-secondary">Best Online Plant Nursery in Delhi NCR</h4>
            <h1 className="mb-5 display-3 text-primary">Fresh Indoor &amp; Outdoor Plants Delivered</h1>
            <div className="position-relative mx-auto">
              <input
                className="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill"
                type="text"
                placeholder="Search Tulsi, Jade, Indoor Plants, Vermicompost..."
              />
              <button
                type="submit"
                className="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100"
                style={{ top: 0, right: "25%" }}
              >
                Search Now
              </button>
            </div>
          </div>

          {/* Right: Carousel */}
          <div className="col-md-12 col-lg-5">
            <div id="carouselId" className="carousel slide position-relative" data-bs-ride="carousel">
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active rounded">
                  <img
                    src="/assets/img/plants/hero-banner-1.png"
                    className="img-fluid w-100 h-100 bg-secondary rounded"
                    alt="Fresh Plants Delivery"
                  />
                  <a href="#" className="btn px-4 py-2 text-white rounded">Fresh Plants</a>
                </div>
                <div className="carousel-item rounded">
                  <img
                    src="/assets/img/plants/hero-banner-2.png"
                    className="img-fluid w-100 h-100 rounded"
                    alt="Indoor Air Purifiers"
                  />
                  <a href="#" className="btn px-4 py-2 text-white rounded">Indoor Plants</a>
                </div>
                <div className="carousel-item rounded">
                  <img
                    src="/assets/img/plants/hero-banner-3.png"
                    className="img-fluid w-100 h-100 rounded"
                    alt="Flowering & Fertilizer"
                  />
                  <a href="#" className="btn px-4 py-2 text-white rounded">Flowering Plants</a>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselId"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselId"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
