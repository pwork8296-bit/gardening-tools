const plantItems = [
  { img: "dracaena.jpg", name: "Dracaena Compacta", category: "Air Purifier", price: "₹299" },
  { img: "elaichi.jpg", name: "Elaichi Cardamom", category: "Medicinal", price: "₹199" },
  { img: "plant-1.jpg", name: "Rama Tulsi Plant", category: "Sacred Herb", price: "₹149" },
  { img: "plant-2.jpg", name: "Jade Plant (Luck)", category: "Succulent", price: "₹199" },
  { img: "vermicompost.jpg", name: "Organic Vermicompost", category: "Fertilizer", price: "₹99" },
  { img: "plant-3.jpg", name: "Hibiscus Flower", category: "Flowering", price: "₹249" },
  { img: "plant-4.jpg", name: "Lucky Bamboo", category: "Good Luck", price: "₹179" },
  { img: "plant-5.jpg", name: "Cineraria Flower", category: "Winter Flower", price: "₹199" },
];

export default function VegetableShop() {
  return (
    <div className="container-fluid vesitable py-5">
      <div className="container py-5">
        <h1 className="mb-0">Trending Nursery Plants</h1>
        <p className="text-secondary mb-4">Popular choices for home decoration, air purification & gardening.</p>
        <div className="owl-carousel vegetable-carousel justify-content-center">
          {plantItems.map((v, i) => (
            <div className="border border-primary rounded position-relative vesitable-item" key={i}>
              <div className="vesitable-img" style={{ height: "220px", overflow: "hidden" }}>
                <img
                  src={`/assets/img/plants/${v.img}`}
                  className="img-fluid w-100 h-100 rounded-top"
                  style={{ objectFit: "cover" }}
                  alt={v.name}
                />
              </div>
              <div
                className="text-white bg-primary px-3 py-1 rounded position-absolute"
                style={{ top: "10px", right: "10px" }}
              >
                {v.category}
              </div>
              <div className="p-4 rounded-bottom text-start">
                <h4>{v.name}</h4>
                <p>Carefully nurtured healthy plant ready for planting.</p>
                <div className="d-flex justify-content-between flex-lg-wrap align-items-center">
                  <p className="text-dark fs-5 fw-bold mb-0">{v.price}</p>
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
