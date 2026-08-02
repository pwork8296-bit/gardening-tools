const orderItems = [
  { img: "/assets/img/plants/dracaena.jpg", name: "Dracaena Compacta Plant", price: "₹299", qty: 1, total: "₹299" },
  { img: "/assets/img/plants/plant-1.jpg", name: "Rama Tulsi Plant in Pot", price: "₹149", qty: 1, total: "₹149" },
  { img: "/assets/img/plants/vermicompost.jpg", name: "1 Kg Organic Vermicompost", price: "₹99", qty: 1, total: "₹99" },
];

const paymentMethods = [
  { id: "Transfer-1", name: "Transfer",  label: "UPI / Net Banking / Bank Transfer",
    description: "Pay conveniently via Google Pay, PhonePe, Paytm, or direct Net Banking across India." },
  { id: "Delivery-1", name: "Delivery", label: "Cash On Delivery (COD) - Delhi NCR",
    description: "Pay cash upon delivery of your fresh plants anywhere in Delhi, Noida & Ghaziabad." },
  { id: "Payments-1", name: "Payments", label: "Debit / Credit Card Payment" },
];

export default function CheckoutOrderSummary() {
  return (
    <div className="col-md-12 col-lg-6 col-xl-5">

      {/* Order summary table */}
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Products</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Qty</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {orderItems.map((item, i) => (
              <tr key={i}>
                <th scope="row">
                  <div className="d-flex align-items-center mt-2" style={{ width: 60, height: 60, overflow: "hidden" }}>
                    <img
                      src={item.img}
                      className="img-fluid rounded-circle w-100 h-100"
                      style={{ objectFit: "cover" }}
                      alt={item.name}
                    />
                  </div>
                </th>
                <td className="py-4">{item.name}</td>
                <td className="py-4">{item.price}</td>
                <td className="py-4">{item.qty}</td>
                <td className="py-4">{item.total}</td>
              </tr>
            ))}

            {/* Subtotal row */}
            <tr>
              <th scope="row" />
              <td className="py-4" />
              <td className="py-4" />
              <td className="py-4">
                <p className="mb-0 text-dark py-2">Subtotal</p>
              </td>
              <td className="py-4">
                <div className="py-2 border-bottom border-top">
                  <p className="mb-0 text-dark font-weight-bold">₹547.00</p>
                </div>
              </td>
            </tr>

            {/* Shipping options row */}
            <tr>
              <th scope="row" />
              <td className="py-4">
                <p className="mb-0 text-dark py-2">Shipping</p>
              </td>
              <td colSpan={3} className="py-4">
                {[
                  { id: "Shipping-1", label: "Delhi NCR Delivery: ₹49.00" },
                  { id: "Shipping-2", label: "Free Shipping on Orders > ₹999" },
                ].map((opt) => (
                  <div className="form-check text-start" key={opt.id}>
                    <input
                      type="checkbox"
                      className="form-check-input bg-primary border-0"
                      id={opt.id}
                      name="Shipping-1"
                      value="Shipping"
                    />
                    <label className="form-check-label" htmlFor={opt.id}>
                      {opt.label}
                    </label>
                  </div>
                ))}
              </td>
            </tr>

            {/* Total row */}
            <tr>
              <th scope="row" />
              <td className="py-4">
                <p className="mb-0 text-dark text-uppercase py-2 fw-bold">TOTAL</p>
              </td>
              <td className="py-4" />
              <td className="py-4" />
              <td className="py-4">
                <div className="py-2 border-bottom border-top">
                  <p className="mb-0 text-primary fw-bold fs-5">₹596.00</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Payment methods */}
      {paymentMethods.map((method) => (
        <div
          key={method.id}
          className="row g-4 text-center align-items-center justify-content-center border-bottom py-3"
        >
          <div className="col-12">
            <div className="form-check text-start my-3">
              <input
                type="checkbox"
                className="form-check-input bg-primary border-0"
                id={method.id}
                name={method.name}
                value={method.name}
              />
              <label className="form-check-label" htmlFor={method.id}>
                {method.label}
              </label>
            </div>
            {method.description && (
              <p className="text-start text-dark">{method.description}</p>
            )}
          </div>
        </div>
      ))}

      {/* Place Order button */}
      <div className="row g-4 text-center align-items-center justify-content-center pt-4">
        <button
          type="button"
          className="btn border-secondary py-3 px-4 text-uppercase w-100 text-primary"
        >
          Place Order
        </button>
      </div>

    </div>
  );
}
