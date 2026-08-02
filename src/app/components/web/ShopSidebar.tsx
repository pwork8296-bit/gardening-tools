const categories = [
  { label: "Indoor Plants", count: 24 },
  { label: "Flowering Plants", count: 18 },
  { label: "Medicinal & Herbs", count: 15 },
  { label: "Succulents & Cactus", count: 12 },
  { label: "Pots & Soil", count: 30 },
];

const featuredProducts = [
  { img: "/assets/img/plants/dracaena.jpg", name: "Dracaena Compacta", price: "₹299", oldPrice: "₹349", stars: 5 },
  { img: "/assets/img/plants/elaichi.jpg", name: "Elaichi Cardamom", price: "₹199", oldPrice: "₹249", stars: 5 },
  { img: "/assets/img/plants/vermicompost.jpg", name: "Organic Vermicompost", price: "₹99", oldPrice: "₹120", stars: 5 },
];

function StarRating({ filled }: { filled: number }) {
  return (
    <div className="d-flex mb-2">
      {[1, 2, 3, 4, 5].map((n) => (
        <i
          key={n}
          className={`fa fa-star${n <= filled ? " text-secondary" : ""}`}
        />
      ))}
    </div>
  );
}

export default function ShopSidebar() {
  return (
    <div className="col-lg-3">
      <div className="row g-4">

        {/* Categories */}
        <div className="col-lg-12">
          <div className="mb-3">
            <h4>Nursery Categories</h4>
            <ul className="list-unstyled fruite-categorie">
              {categories.map((cat) => (
                <li key={cat.label}>
                  <div className="d-flex justify-content-between fruite-name">
                    <a href="#">
                      <i className="fas fa-leaf me-2 text-primary" />
                      {cat.label}
                    </a>
                    <span>({cat.count})</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Price Range */}
        <div className="col-lg-12">
          <div className="mb-3">
            <h4 className="mb-2">Price (₹)</h4>
            <input
              type="range"
              className="form-range w-100"
              id="rangeInput"
              name="rangeInput"
              min={50}
              max={1000}
              defaultValue={500}
            />
            <output id="amount" htmlFor="rangeInput">₹500</output>
          </div>
        </div>

        {/* Additional Filters */}
        <div className="col-lg-12">
          <div className="mb-3">
            <h4>Plant Type</h4>
            {["Air Purifying", "Low Maintenance", "Balcony Plants", "Full Sun", "Shade Loving"].map(
              (label, i) => (
                <div className="mb-2" key={label}>
                  <input
                    type="radio"
                    className="me-2"
                    id={`Categories-${i + 1}`}
                    name="Categories-1"
                    value={label}
                  />
                  <label htmlFor={`Categories-${i + 1}`}> {label}</label>
                </div>
              )
            )}
          </div>
        </div>

        {/* Featured Products */}
        <div className="col-lg-12">
          <h4 className="mb-3">Featured Plants</h4>
          {featuredProducts.map((p, i) => (
            <div
              key={i}
              className="d-flex align-items-center justify-content-start mb-3"
            >
              <div className="rounded me-4" style={{ width: 80, height: 80, overflow: "hidden" }}>
                <img
                  src={p.img}
                  className="img-fluid rounded w-100 h-100"
                  style={{ objectFit: "cover" }}
                  alt={p.name}
                />
              </div>
              <div>
                <h6 className="mb-2">{p.name}</h6>
                <StarRating filled={p.stars} />
                <div className="d-flex mb-2">
                  <h5 className="fw-bold me-2">{p.price}</h5>
                  <h5 className="text-danger text-decoration-line-through">
                    {p.oldPrice}
                  </h5>
                </div>
              </div>
            </div>
          ))}
          <div className="d-flex justify-content-center my-4">
            <a
              href="#"
              className="btn border border-secondary px-4 py-3 rounded-pill text-primary w-100"
            >
              View All Plants
            </a>
          </div>
        </div>

        {/* Sidebar Banner */}
        <div className="col-lg-12">
          <div className="position-relative rounded overflow-hidden">
            <img
              src="/assets/img/plants/plant-3.jpg"
              className="img-fluid w-100 rounded"
              style={{ height: "250px", objectFit: "cover" }}
              alt="Fresh Plants Banner"
            />
            <div
              className="position-absolute p-3 rounded"
              style={{ top: "50%", left: 10, transform: "translateY(-50%)", backgroundColor: "rgba(255,255,255,0.85)" }}
            >
              <h4 className="text-primary fw-bold mb-0">
                Fresh <br /> Plants <br /> Delivery
              </h4>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
