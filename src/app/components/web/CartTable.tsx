const cartItems = [
  {
    img: "/assets/img/agttools/IMG_20210220_173942_670-1.jpg",
    name: "108-Piece Professional Socket Tool Set",
    price: "₹4,500.00",
    total: "₹4,500.00",
  },
  {
    img: "/assets/img/agttools/3pcs-gardening-scissors-pruner-and-mini-folding-hand-saw-alloy-steel-construction-b0fkbf9534-1000x1000.webp",
    name: "AGT 3-Piece Gardening Tool Set",
    price: "₹800.00",
    total: "₹800.00",
  },
  {
    img: "/assets/img/agttools/ChatGPTImageJan9_2026_05_24_30PM.png",
    name: "AGT Car Washing Spray Gun Nozzle",
    price: "₹599.00",
    total: "₹599.00",
  },
];

function QuantityStepper() {
  return (
    <div className="input-group quantity mt-4" style={{ width: 100 }}>
      <div className="input-group-btn">
        <button className="btn btn-sm btn-minus rounded-circle bg-light border">
          <i className="fa fa-minus" />
        </button>
      </div>
      <input
        type="text"
        className="form-control form-control-sm text-center border-0"
        defaultValue="1"
      />
      <div className="input-group-btn">
        <button className="btn btn-sm btn-plus rounded-circle bg-light border">
          <i className="fa fa-plus" />
        </button>
      </div>
    </div>
  );
}

export default function CartTable() {
  return (
    <>
      {/* Cart Items Table */}
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Products</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, i) => (
              <tr key={i}>
                <th scope="row">
                  <div className="d-flex align-items-center">
                    <img
                      src={item.img}
                      className="img-fluid me-5 rounded-circle"
                      style={{ width: 80, height: 80, objectFit: "cover" }}
                      alt={item.name}
                    />
                  </div>
                </th>
                <td>
                  <p className="mb-0 mt-4">{item.name}</p>
                </td>
                <td>
                  <p className="mb-0 mt-4">{item.price}</p>
                </td>
                <td>
                  <QuantityStepper />
                </td>
                <td>
                  <p className="mb-0 mt-4">{item.total}</p>
                </td>
                <td>
                  <button className="btn btn-md rounded-circle bg-light border mt-4">
                    <i className="fa fa-times text-danger" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Coupon Row */}
      <div className="mt-5">
        <input
          type="text"
          className="border-0 border-bottom rounded me-5 py-3 mb-4"
          placeholder="Coupon Code"
        />
        <button
          className="btn border-secondary rounded-pill px-4 py-3 text-primary"
          type="button"
        >
          Apply Coupon
        </button>
      </div>
    </>
  );
}
