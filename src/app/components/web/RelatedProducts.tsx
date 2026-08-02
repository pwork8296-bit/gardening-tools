const relatedProducts = [
  { img: "/assets/img/plants/elaichi.jpg", name: "Elaichi Cardamom", category: "Medicinal", price: "₹199" },
  { img: "/assets/img/plants/plant-1.jpg", name: "Rama Tulsi Plant", category: "Sacred Herb", price: "₹149" },
  { img: "/assets/img/plants/plant-2.jpg", name: "Jade Plant (Luck)", category: "Succulent", price: "₹199" },
  { img: "/assets/img/plants/vermicompost.jpg", name: "Organic Vermicompost", category: "Fertilizer", price: "₹99" },
  { img: "/assets/img/plants/plant-3.jpg", name: "Hibiscus Bonsai", category: "Flowering", price: "₹249" },
  { img: "/assets/img/plants/plant-4.jpg", name: "Lucky Bamboo", category: "Indoor Plant", price: "₹179" },
];

export default function RelatedProducts() {
  return (
    <>
      <h1 className="fw-bold mb-4">Related Plants You May Like</h1>
      <div className="vesitable">
        <div className="owl-carousel vegetable-carousel justify-content-center">
          {relatedProducts.map((p, i) => (
            <div
              key={i}
              className="border border-primary rounded position-relative vesitable-item"
            >
              <div className="vesitable-img" style={{ height: "200px", overflow: "hidden" }}>
                <img
                  src={p.img}
                  className="img-fluid w-100 h-100 rounded-top"
                  style={{ objectFit: "cover" }}
                  alt={p.name}
                />
              </div>
              <div
                className="text-white bg-primary px-3 py-1 rounded position-absolute"
                style={{ top: 10, right: 10 }}
              >
                {p.category}
              </div>
              <div className="p-4 pb-0 rounded-bottom text-start">
                <h4>{p.name}</h4>
                <p>
                  Fresh nursery plant carefully grown &amp; delivered in Delhi NCR.
                </p>
                <div className="d-flex justify-content-between flex-lg-wrap align-items-center">
                  <p className="text-dark fs-5 fw-bold mb-4">{p.price}</p>
                  <a
                    href="#"
                    className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"
                  >
                    <i className="fa fa-shopping-bag me-2 text-primary" />
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
