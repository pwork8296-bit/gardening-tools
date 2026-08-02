const specs = [
  { label: "Plant Height", value: "10-14 Inches" },
  { label: "Pot Size", value: "6 Inch Nursery Pot" },
  { label: "Sunlight", value: "Indirect Bright Light" },
  { label: "Watering", value: "When Topsoil Dries" },
  { label: "Maintenance", value: "Low & Easy Care" },
];

const reviews = [
  {
    avatar: "/assets/img/avatar.jpg",
    date: "May 10, 2025",
    name: "Jason Smith",
    stars: 5,
    text: "Received a healthy Dracaena Compacta plant in perfect condition. Delivered fast in Noida!",
  },
  {
    avatar: "/assets/img/avatar.jpg",
    date: "June 2, 2025",
    name: "Priya Sharma",
    stars: 5,
    text: "Beautiful lush green leaves. Excellent quality indoor plant from PlantNCR nursery.",
  },
];

function StarRating({ filled, size }: { filled: number; size?: string }) {
  return (
    <div className="d-flex" style={size ? { fontSize: size } : undefined}>
      {[1, 2, 3, 4, 5].map((n) => (
        <i
          key={n}
          className={`fa fa-star${n <= filled ? " text-secondary" : ""}`}
        />
      ))}
    </div>
  );
}

export default function ProductDetail() {
  return (
    <div className="col-lg-8 col-xl-9">
      <div className="row g-4">

        {/* Product Image */}
        <div className="col-lg-6">
          <div className="border rounded overflow-hidden">
            <a href="#">
              <img
                src="/assets/img/plants/dracaena.jpg"
                className="img-fluid rounded w-100"
                style={{ maxHeight: "400px", objectFit: "cover" }}
                alt="Dracaena Compacta Indoor Plant"
              />
            </a>
          </div>
        </div>

        {/* Product Info */}
        <div className="col-lg-6">
          <h4 className="fw-bold mb-3">Dracaena Compacta Indoor Plant</h4>
          <p className="mb-3 text-secondary">Category: Indoor Air Purifying Plants</p>
          <h5 className="fw-bold mb-3 text-primary">₹299</h5>
          <div className="mb-4">
            <StarRating filled={5} />
          </div>
          <p className="mb-3">
            Dracaena Compacta is a gorgeous, low-maintenance air-purifying indoor plant with deep green compact foliage. It thrives in indirect sunlight and improves indoor air quality.
          </p>
          <p className="mb-4 text-muted">
            Includes healthy plant in a 6-inch polybag/nursery pot. Fast express delivery across Delhi NCR (Delhi, Noida &amp; Ghaziabad).
          </p>

          {/* Quantity Stepper */}
          <div className="input-group quantity mb-5" style={{ width: 100 }}>
            <div className="input-group-btn">
              <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                <i className="fa fa-minus" />
              </button>
            </div>
            <input
              type="text"
              className="form-control form-control-sm text-center border-0"
              defaultValue="1"
            />
            <div className="input-group-btn">
              <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                <i className="fa fa-plus" />
              </button>
            </div>
          </div>

          <a
            href="#"
            className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary fw-bold"
          >
            <i className="fa fa-shopping-bag me-2 text-primary" />
            Add to cart
          </a>
        </div>

        {/* Tabs: Description + Reviews */}
        <div className="col-lg-12">
          <nav>
            <div className="nav nav-tabs mb-3">
              <button
                className="nav-link active border-white border-bottom-0"
                type="button"
                role="tab"
                id="nav-about-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-about"
                aria-controls="nav-about"
                aria-selected="true"
              >
                Plant Care &amp; Info
              </button>
              <button
                className="nav-link border-white border-bottom-0"
                type="button"
                role="tab"
                id="nav-mission-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-mission"
                aria-controls="nav-mission"
                aria-selected="false"
              >
                Customer Reviews
              </button>
            </div>
          </nav>

          <div className="tab-content mb-5">
            {/* Description Tab */}
            <div
              className="tab-pane active"
              id="nav-about"
              role="tabpanel"
              aria-labelledby="nav-about-tab"
            >
              <p>
                Dracaena Compacta features thick, glossy, dark green leaves tightly clustered on woody stems. It is a slow-growing plant, making it ideal for tabletop displays, living rooms, and office desks.
              </p>
              <p>
                Water only when the top layer of soil feels dry to the touch. Avoid overwatering to keep the root system healthy and vibrant.
              </p>
              <div className="px-2">
                <div className="row g-4">
                  <div className="col-lg-8 col-md-10">
                    {specs.map((spec, i) => (
                      <div
                        key={spec.label}
                        className={`row text-center align-items-center justify-content-center py-2${
                          i % 2 === 0 ? " bg-light" : ""
                        }`}
                      >
                        <div className="col-6 text-start ps-4">
                          <p className="mb-0 fw-bold">{spec.label}</p>
                        </div>
                        <div className="col-6 text-start">
                          <p className="mb-0">{spec.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Reviews Tab */}
            <div
              className="tab-pane"
              id="nav-mission"
              role="tabpanel"
              aria-labelledby="nav-mission-tab"
            >
              {reviews.map((r) => (
                <div className="d-flex mb-3" key={r.name}>
                  <img
                    src={r.avatar}
                    className="img-fluid rounded-circle p-2"
                    style={{ width: 80, height: 80 }}
                    alt={r.name}
                  />
                  <div>
                    <p className="mb-2" style={{ fontSize: 14 }}>
                      {r.date}
                    </p>
                    <div className="d-flex justify-content-between">
                      <h5>{r.name}</h5>
                      <div className="d-flex mb-3">
                        <StarRating filled={r.stars} />
                      </div>
                    </div>
                    <p>{r.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leave a Reply Form */}
          <form action="#">
            <h4 className="mb-5 fw-bold">Leave a Reply</h4>
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="border-bottom rounded">
                  <input
                    type="text"
                    className="form-control border-0 me-4"
                    placeholder="Your Name *"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="border-bottom rounded">
                  <input
                    type="email"
                    className="form-control border-0"
                    placeholder="Your Email *"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="border-bottom rounded my-4">
                  <textarea
                    className="form-control border-0"
                    cols={30}
                    rows={8}
                    placeholder="Your Review *"
                    spellCheck={false}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="d-flex justify-content-between py-3 mb-5">
                  <div className="d-flex align-items-center">
                    <p className="mb-0 me-3">Please rate:</p>
                    <div
                      className="d-flex align-items-center"
                      style={{ fontSize: 12 }}
                    >
                      {[1, 2, 3, 4, 5].map((n) => (
                        <i
                          key={n}
                          className={`fa fa-star${n === 1 ? " text-muted" : ""}`}
                        />
                      ))}
                    </div>
                  </div>
                  <a
                    href="#"
                    className="btn border border-secondary text-primary rounded-pill px-4 py-3"
                  >
                    Post Comment
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}
