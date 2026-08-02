const products = [
  { img: "/assets/img/fruite-item-5.jpg", category: "Fruits", name: "Grapes",      price: "$4.99 / kg" },
  { img: "/assets/img/fruite-item-5.jpg", category: "Fruits", name: "Grapes",      price: "$4.99 / kg" },
  { img: "/assets/img/fruite-item-2.jpg", category: "Fruits", name: "Raspberries", price: "$4.99 / kg" },
  { img: "/assets/img/fruite-item-4.jpg", category: "Fruits", name: "Apricots",    price: "$4.99 / kg" },
  { img: "/assets/img/fruite-item-3.jpg", category: "Fruits", name: "Banana",      price: "$4.99 / kg" },
  { img: "/assets/img/fruite-item-1.jpg", category: "Fruits", name: "Oranges",     price: "$4.99 / kg" },
  { img: "/assets/img/fruite-item-2.jpg", category: "Fruits", name: "Raspberries", price: "$4.99 / kg" },
  { img: "/assets/img/fruite-item-5.jpg", category: "Fruits", name: "Grapes",      price: "$4.99 / kg" },
  { img: "/assets/img/fruite-item-1.jpg", category: "Fruits", name: "Oranges",     price: "$4.99 / kg" },
];

export default function ShopProducts() {
  return (
    <div className="col-lg-9">
      <div className="row g-4 justify-content-center">

        {products.map((product, i) => (
          <div key={i} className="col-md-6 col-lg-6 col-xl-4">
            <div className="rounded position-relative fruite-item">
              <div className="fruite-img">
                <img
                  src={product.img}
                  className="img-fluid w-100 rounded-top"
                  alt={product.name}
                />
              </div>
              <div
                className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                style={{ top: 10, left: 10 }}
              >
                {product.category}
              </div>
              <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                <h4>{product.name}</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                  eiusmod te incididunt
                </p>
                <div className="d-flex justify-content-between flex-lg-wrap">
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
