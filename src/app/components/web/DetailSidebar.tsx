const categories = [
  { label: "Apples", count: 3 },
  { label: "Oranges", count: 5 },
  { label: "Strawbery", count: 2 },
  { label: "Banana", count: 8 },
  { label: "Pumpkin", count: 5 },
];

const featuredProducts = [
  { img: "/assets/img/featur-1.jpg",        name: "Big Banana", price: "2.99", oldPrice: "4.11", stars: 4 },
  { img: "/assets/img/featur-2.jpg",        name: "Big Banana", price: "2.99", oldPrice: "4.11", stars: 4 },
  { img: "/assets/img/featur-3.jpg",        name: "Big Banana", price: "2.99", oldPrice: "4.11", stars: 4 },
  { img: "/assets/img/vegetable-item-4.jpg",name: "Big Banana", price: "2.99", oldPrice: "4.11", stars: 4 },
  { img: "/assets/img/vegetable-item-5.jpg",name: "Big Banana", price: "2.99", oldPrice: "4.11", stars: 4 },
  { img: "/assets/img/vegetable-item-6.jpg",name: "Big Banana", price: "2.99", oldPrice: "4.11", stars: 4 },
];

function StarRating({ filled }: { filled: number }) {
  return (
    <div className="d-flex mb-2">
      {[1, 2, 3, 4, 5].map((n) => (
        <i key={n} className={`fa fa-star${n <= filled ? " text-secondary" : ""}`} />
      ))}
    </div>
  );
}

export default function DetailSidebar() {
  return (
    <div className="col-lg-4 col-xl-3">
      <div className="row g-4 fruite">

        {/* Search */}
        <div className="col-lg-12">
          <div className="input-group w-100 mx-auto d-flex mb-4">
            <input
              type="search"
              className="form-control p-3"
              placeholder="keywords"
              aria-describedby="detail-search-icon"
            />
            <span id="detail-search-icon" className="input-group-text p-3">
              <i className="fa fa-search" />
            </span>
          </div>

          {/* Categories */}
          <div className="mb-4">
            <h4>Categories</h4>
            <ul className="list-unstyled fruite-categorie">
              {categories.map((cat) => (
                <li key={cat.label}>
                  <div className="d-flex justify-content-between fruite-name">
                    <a href="#">
                      <i className="fas fa-apple-alt me-2" />
                      {cat.label}
                    </a>
                    <span>({cat.count})</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Featured Products */}
        <div className="col-lg-12">
          <h4 className="mb-4">Featured products</h4>
          {featuredProducts.map((p, i) => (
            <div
              key={i}
              className="d-flex align-items-center justify-content-start mb-3"
            >
              <div className="rounded me-4" style={{ width: 100, height: 100 }}>
                <img src={p.img} className="img-fluid rounded" alt={p.name} />
              </div>
              <div>
                <h6 className="mb-2">{p.name}</h6>
                <StarRating filled={p.stars} />
                <div className="d-flex mb-2">
                  <h5 className="fw-bold me-2">{p.price} $</h5>
                  <h5 className="text-danger text-decoration-line-through">
                    {p.oldPrice} $
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
              View More
            </a>
          </div>
        </div>

        {/* Sidebar Banner */}
        <div className="col-lg-12">
          <div className="position-relative">
            <img
              src="/assets/img/banner-fruits.jpg"
              className="img-fluid w-100 rounded"
              alt="Fresh Fruits Banner"
            />
            <div
              className="position-absolute"
              style={{ top: "50%", right: 10, transform: "translateY(-50%)" }}
            >
              <h3 className="text-secondary fw-bold">
                Fresh <br /> Fruits <br /> Banner
              </h3>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
