const products = [
  { img: "/assets/img/agttools/IMG_20210220_173942_670-1.jpg", category: "Socket Sets", name: "108-Piece Socket & Ratchet Tool Set", price: "₹4,500.00" },
  { img: "/assets/img/agttools/srunv-set-of-32-pcs-heavy-duty-vanadium-metal-smart-32-wallvilla-original-imah3ujbzsvp6zza.webp", category: "Socket Sets", name: "32-Piece Heavy Duty Socket Set", price: "₹1,724.00" },
  { img: "/assets/img/agttools/3pcs-gardening-scissors-pruner-and-mini-folding-hand-saw-alloy-steel-construction-b0fkbf9534-1000x1000.webp", category: "Tool Kits", name: "AGT 3-Piece Gardening Tool Set", price: "₹800.00" },
  { img: "/assets/img/agttools/ChatGPTImageJan9_2026_05_24_30PM.png", category: "Spray Guns", name: "AGT Car Washing Spray Gun Nozzle", price: "₹599.00" },
  { img: "/assets/img/agttools/WhatsAppImage2025-12-04at11.05.43.jpg", category: "Cutters & Pruners", name: "AGT Folding Hand Saw Pruner", price: "₹420.00" },
  { img: "/assets/img/agttools/WhatsAppImage2025-12-05at18.45.12.jpg", category: "Cutters & Pruners", name: "AGT Garden 3 Cutter Tool Set", price: "₹1,349.00" },
  { img: "/assets/img/agttools/WhatsAppImage2025-12-04at12.54.20.jpg", category: "Tool Kits", name: "AGT Pruning Scissor & Gloves Combo", price: "₹550.00" },
  { img: "/assets/img/agttools/WhatsAppImage2026-01-09at12.23.54.jpg", category: "Spray Guns", name: "AGT Heavy Duty Brass Water Spray Gun", price: "₹499.50" },
  { img: "/assets/img/agttools/ChatGPTImageJan9_2026_02_47_46PM_a2acc59d-a2a5-4991-9780-e7ebca023020.png", category: "Cutters & Pruners", name: "AGT Heavy Duty Gardening Axe 400g", price: "₹799.00" },
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
                <h4 className="text-truncate" title={product.name}>{product.name}</h4>
                <p className="text-truncate">
                  Durable high-grade alloy steel garden &amp; workshop tool.
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
