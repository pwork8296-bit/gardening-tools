const products = [
  { img: "/assets/img/plants/dracaena.jpg", category: "Indoor Plants", name: "Dracaena Compacta Plant", price: "₹299" },
  { img: "/assets/img/plants/elaichi.jpg", category: "Medicinal & Herbs", name: "Elaichi Plant in Nursery Bag", price: "₹199" },
  { img: "/assets/img/plants/plant-1.jpg", category: "Medicinal & Herbs", name: "Rama Tulsi Plant in Pot", price: "₹149" },
  { img: "/assets/img/plants/plant-2.jpg", category: "Indoor Plants", name: "Jade Plant (Good Luck)", price: "₹199" },
  { img: "/assets/img/plants/vermicompost.jpg", category: "Pots & Soil", name: "1 Kg Organic Vermicompost", price: "₹99" },
  { img: "/assets/img/plants/plant-3.jpg", category: "Flowering Plants", name: "Hibiscus Plant Bonsai", price: "₹249" },
  { img: "/assets/img/plants/plant-4.jpg", category: "Indoor Plants", name: "Lucky Bamboo Plant", price: "₹179" },
  { img: "/assets/img/plants/plant-5.jpg", category: "Flowering Plants", name: "Cineraria Winter Flower", price: "₹199" },
  { img: "/assets/img/plants/plant-6.jpg", category: "Indoor Plants", name: "Song of India Dracaena", price: "₹279" },
];

export default function ShopProducts() {
  return (
    <div className="col-lg-9">
      <div className="row g-4 justify-content-center">

        {products.map((product, i) => (
          <div key={i} className="col-md-6 col-lg-6 col-xl-4">
            <div className="rounded position-relative fruite-item">
              <div className="fruite-img" style={{ height: "230px", overflow: "hidden" }}>
                <img
                  src={product.img}
                  className="img-fluid w-100 h-100 rounded-top"
                  style={{ objectFit: "cover" }}
                  alt={product.name}
                />
              </div>
              <div
                className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                style={{ top: 10, left: 10 }}
              >
                {product.category}
              </div>
              <div className="p-4 border border-secondary border-top-0 rounded-bottom text-start">
                <h4>{product.name}</h4>
                <p>
                  Healthy nursery plant carefully delivered in Delhi NCR.
                </p>
                <div className="d-flex justify-content-between flex-lg-wrap align-items-center">
                  <p className="text-dark fs-5 fw-bold mb-0">{product.price}</p>
                  <a
                    href="#"
                    className="btn border border-secondary rounded-pill px-3 text-primary"
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary" />
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Pagination */}
        <div className="col-12">
          <div className="pagination d-flex justify-content-center mt-5">
            <a href="#" className="rounded">&laquo;</a>
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <a key={n} href="#" className={`rounded${n === 1 ? " active" : ""}`}>
                {n}
              </a>
            ))}
            <a href="#" className="rounded">&raquo;</a>
          </div>
        </div>

      </div>
    </div>
  );
}
