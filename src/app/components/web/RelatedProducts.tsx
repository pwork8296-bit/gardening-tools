const relatedProducts = [
  { img: "/assets/img/vegetable-item-6.jpg",  name: "Parsely",    price: "$4.99 / kg" },
  { img: "/assets/img/vegetable-item-1.jpg",  name: "Parsely",    price: "$4.99 / kg" },
  { img: "/assets/img/vegetable-item-3.png",  name: "Banana",     price: "$7.99 / kg", bgLight: true },
  { img: "/assets/img/vegetable-item-4.jpg",  name: "Bell Pepper",price: "$7.99 / kg" },
  { img: "/assets/img/vegetable-item-5.jpg",  name: "Potatoes",   price: "$7.99 / kg" },
  { img: "/assets/img/vegetable-item-6.jpg",  name: "Parsely",    price: "$7.99 / kg" },
  { img: "/assets/img/vegetable-item-5.jpg",  name: "Potatoes",   price: "$7.99 / kg" },
  { img: "/assets/img/vegetable-item-6.jpg",  name: "Parsely",    price: "$7.99 / kg" },
];

export default function RelatedProducts() {
  return (
    <>
      <h1 className="fw-bold mb-0">Related products</h1>
      <div className="vesitable">
        <div className="owl-carousel vegetable-carousel justify-content-center">
          {relatedProducts.map((p, i) => (
            <div
              key={i}
              className="border border-primary rounded position-relative vesitable-item"
            >
              <div className="vesitable-img">
                <img
                  src={p.img}
                  className={`img-fluid w-100 rounded-top${p.bgLight ? " bg-light" : ""}`}
                  alt={p.name}
                />
              </div>
              <div
                className="text-white bg-primary px-3 py-1 rounded position-absolute"
                style={{ top: 10, right: 10 }}
              >
                Vegetable
              </div>
              <div className="p-4 pb-0 rounded-bottom">
                <h4>{p.name}</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                  eiusmod te incididunt
                </p>
                <div className="d-flex justify-content-between flex-lg-wrap">
                  <p className="text-dark fs-5 fw-bold">{p.price}</p>
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
