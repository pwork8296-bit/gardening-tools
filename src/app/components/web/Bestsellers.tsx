const bestsellerCards = [
  { img: "dracaena.jpg", name: "Dracaena Compacta", price: "₹299", stars: 5 },
  { img: "elaichi.jpg", name: "Elaichi Cardamom Plant", price: "₹199", stars: 5 },
  { img: "plant-1.jpg", name: "Rama Tulsi Sacred Plant", price: "₹149", stars: 5 },
  { img: "plant-2.jpg", name: "Jade Good Luck Plant", price: "₹199", stars: 5 },
  { img: "vermicompost.jpg", name: "1 Kg Vermicompost Soil", price: "₹99", stars: 5 },
  { img: "plant-3.jpg", name: "Hibiscus Bonsai Plant", price: "₹249", stars: 4 },
];

const featuredItems = [
  { img: "plant-4.jpg", name: "Lucky Bamboo Plant", price: "₹179", stars: 5 },
  { img: "plant-5.jpg", name: "Cineraria Winter Flower", price: "₹199", stars: 4 },
  { img: "plant-6.jpg", name: "Song of India Dracaena", price: "₹279", stars: 5 },
  { img: "plant-7.jpg", name: "Kadhi Patta Curry Leaf", price: "₹119", stars: 5 },
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
          <h1 className="display-4">Bestseller Plants</h1>
          <p className="text-secondary fs-5">
            Our most loved indoor air-purifying, flowering, and medicinal plants delivered fresh to plant lovers in Delhi NCR.
          </p>
        </div>

        <div className="row g-4">
          {/* Horizontal bestseller cards */}
          {bestsellerCards.map((p, i) => (
            <div className="col-lg-6 col-xl-4" key={i}>
              <div className="p-4 rounded bg-light">
                <div className="row align-items-center">
                  <div className="col-6">
                    <img src={`/assets/img/plants/${p.img}`} className="img-fluid rounded-circle w-100" style={{ height: "130px", objectFit: "cover" }} alt={p.name} />
                  </div>
                  <div className="col-6 text-start">
                    <a href="#" className="h5 d-block text-truncate">{p.name}</a>
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
              <div className="text-center p-3 rounded bg-light">
                <img src={`/assets/img/plants/${p.img}`} className="img-fluid rounded w-100" style={{ height: "200px", objectFit: "cover" }} alt={p.name} />
                <div className="py-4">
                  <a href="#" className="h5 d-block text-truncate">{p.name}</a>
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
