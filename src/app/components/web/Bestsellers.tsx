const bestsellerCards = [
  { img: "best-product-1.jpg", name: "Organic Tomato", price: "3.12 $", stars: 4 },
  { img: "best-product-2.jpg", name: "Organic Tomato", price: "3.12 $", stars: 4 },
  { img: "best-product-3.jpg", name: "Organic Tomato", price: "3.12 $", stars: 4 },
  { img: "best-product-4.jpg", name: "Organic Tomato", price: "3.12 $", stars: 4 },
  { img: "best-product-5.jpg", name: "Organic Tomato", price: "3.12 $", stars: 4 },
  { img: "best-product-6.jpg", name: "Organic Tomato", price: "3.12 $", stars: 4 },
];

const featuredItems = [
  { img: "fruite-item-1.jpg", name: "Organic Tomato", price: "3.12 $", stars: 4 },
  { img: "fruite-item-2.jpg", name: "Organic Tomato", price: "3.12 $", stars: 4 },
  { img: "fruite-item-3.jpg", name: "Organic Tomato", price: "3.12 $", stars: 4 },
  { img: "fruite-item-4.jpg", name: "Organic Tomato", price: "3.12 $", stars: 4 },
];

function StarRating({ count, total = 5 }: { count: number; total?: number }) {
  return (
    <div className="d-flex my-3">
      {Array.from({ length: total }, (_, i) => (
        <i key={i} className={`fas fa-star${i < count ? " text-primary" : ""}`}></i>
      ))}
    </div>
  );
}

export default function Bestsellers() {
  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        {/* Section Header */}
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "700px" }}>
          <h1 className="display-4">Bestseller Products</h1>
          <p>
            Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
          </p>
        </div>

        <div className="row g-4">
          {/* Horizontal bestseller cards */}
          {bestsellerCards.map((p, i) => (
            <div className="col-lg-6 col-xl-4" key={i}>
              <div className="p-4 rounded bg-light">
                <div className="row align-items-center">
                  <div className="col-6">
                    <img src={`/assets/img/${p.img}`} className="img-fluid rounded-circle w-100" alt={p.name} />
                  </div>
                  <div className="col-6">
                    <a href="#" className="h5">{p.name}</a>
                    <StarRating count={p.stars} />
                    <h4 className="mb-3">{p.price}</h4>
                    <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary">
                      <i className="fa fa-shopping-bag me-2 text-primary"></i>Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Featured item cards */}
          {featuredItems.map((p, i) => (
            <div className="col-md-6 col-lg-6 col-xl-3" key={`feat-${i}`}>
              <div className="text-center">
                <img src={`/assets/img/${p.img}`} className="img-fluid rounded" alt={p.name} />
                <div className="py-4">
                  <a href="#" className="h5">{p.name}</a>
                  <div className="d-flex my-3 justify-content-center">
                    {Array.from({ length: 5 }, (_, j) => (
                      <i key={j} className={`fas fa-star${j < p.stars ? " text-primary" : ""}`}></i>
                    ))}
                  </div>
                  <h4 className="mb-3">{p.price}</h4>
                  <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary">
                    <i className="fa fa-shopping-bag me-2 text-primary"></i>Add to cart
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
