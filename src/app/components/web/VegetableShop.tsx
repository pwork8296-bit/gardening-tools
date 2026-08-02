const vegetables = [
  { img: "vegetable-item-6.jpg", name: "Parsley",      price: "$4.99 / kg" },
  { img: "vegetable-item-1.jpg", name: "Tomatoes",     price: "$4.99 / kg" },
  { img: "vegetable-item-3.png", name: "Banana",       price: "$7.99 / kg" },
  { img: "vegetable-item-4.jpg", name: "Bell Pepper",  price: "$7.99 / kg" },
  { img: "vegetable-item-5.jpg", name: "Potatoes",     price: "$7.99 / kg" },
  { img: "vegetable-item-6.jpg", name: "Parsley",      price: "$7.99 / kg" },
  { img: "vegetable-item-5.jpg", name: "Garlic",       price: "$5.99 / kg" },
  { img: "vegetable-item-1.jpg", name: "Cucumber",     price: "$3.99 / kg" },
  { img: "vegetable-item-3.png", name: "Spinach",      price: "$4.49 / kg" },
  { img: "vegetable-item-4.jpg", name: "Capsicum",     price: "$6.99 / kg" },
  { img: "vegetable-item-5.jpg", name: "Broccoli",     price: "$5.49 / kg" },
  { img: "vegetable-item-6.jpg", name: "Carrot",       price: "$3.49 / kg" },
];

export default function VegetableShop() {
  return (
    <div className="container-fluid vesitable py-5">
      <div className="container py-5">
        <h1 className="mb-0">Fresh Organic Vegetables</h1>
        {/* Static grid fallback (owl carousel requires JS — initialize via main.js) */}
        <div className="owl-carousel vegetable-carousel justify-content-center">
          {vegetables.map((v, i) => (
            <div className="border border-primary rounded position-relative vesitable-item" key={i}>
              <div className="vesitable-img">
                <img
                  src={`/assets/img/${v.img}`}
                  className={`img-fluid w-100 rounded-top${v.img.endsWith(".png") ? " bg-light" : ""}`}
                  alt={v.name}
                />
              </div>
              <div
                className="text-white bg-primary px-3 py-1 rounded position-absolute"
                style={{ top: "10px", right: "10px" }}
              >
                Vegetable
              </div>
              <div className="p-4 rounded-bottom">
                <h4>{v.name}</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                <div className="d-flex justify-content-between flex-lg-wrap">
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
