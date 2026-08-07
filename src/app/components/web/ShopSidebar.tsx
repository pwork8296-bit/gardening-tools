const categories = [
  { label: "Tool Kits & Combos", count: 28 },
  { label: "Cutters & Pruners", count: 20 },
  { label: "Water Spray Guns", count: 12 },
  { label: "Socket & Wrench Sets", count: 10 },
  { label: "Watering Cans & Hose", count: 8 },
];

const featuredProducts = [
  { img: "/assets/img/agttools/IMG_20210220_173942_670-1.jpg", name: "108-Piece Socket Tool Set", price: "₹4,500.00", oldPrice: "₹5,200.00", stars: 5 },
  { img: "/assets/img/agttools/3pcs-gardening-scissors-pruner-and-mini-folding-hand-saw-alloy-steel-construction-b0fkbf9534-1000x1000.webp", name: "AGT 3-Piece Tool Set", price: "₹800.00", oldPrice: "₹999.00", stars: 5 },
  { img: "/assets/img/agttools/ChatGPTImageJan9_2026_05_24_30PM.png", name: "AGT Car Washing Spray Gun", price: "₹599.00", oldPrice: "₹750.00", stars: 5 },
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
            <h4>Tool Categories</h4>
            <ul className="list-unstyled fruite-categorie">
              {categories.map((cat) => (
                <li key={cat.label}>
                  <div className="d-flex justify-content-between fruite-name">
                    <a href="#">
                      <i className="fas fa-tools me-2 text-primary" />
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
              min={100}
              max={5000}
              defaultValue={1000}
            />
            <output id="amount" htmlFor="rangeInput">₹1,000</output>
          </div>
        </div>

        {/* Additional Filters */}
        <div className="col-lg-12">
          <div className="mb-3">
            <h4>Tool Specification</h4>
            {["Heavy Duty Alloy Steel", "Ergonomic Rubber Grip", "Rust-Resistant Coating", "High-Pressure Brass", "Folding & Compact"].map(
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
          <h4 className="mb-3">Featured Tools</h4>
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
                <h6 className="mb-2 text-truncate" style={{ maxWidth: "150px" }} title={p.name}>{p.name}</h6>
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
              View All Tools
            </a>
          </div>
        </div>

        {/* Sidebar Banner */}
        <div className="col-lg-12">
          <div className="position-relative rounded overflow-hidden">
            <img
              src="/assets/img/agttools/3pcs-gardening-scissors-pruner-and-mini-folding-hand-saw-alloy-steel-construction-b0fkbf9534-1000x1000.webp"
              className="img-fluid w-100 rounded"
              style={{ height: "250px", objectFit: "cover" }}
              alt="Heavy Duty Tools Banner"
            />
            <div
              className="position-absolute p-3 rounded"
              style={{ top: "50%", left: 10, transform: "translateY(-50%)", backgroundColor: "rgba(255,255,255,0.85)" }}
            >
              <h4 className="text-primary fw-bold mb-0">
                Heavy <br /> Duty <br /> Tool Kits
              </h4>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
