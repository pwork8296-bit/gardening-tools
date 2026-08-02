const orderItems = [
  { img: "/assets/img/vegetable-item-2.jpg", name: "Awesome Brocoli", price: "$69.00", qty: 2, total: "$138.00" },
  { img: "/assets/img/vegetable-item-5.jpg", name: "Potatoes",        price: "$69.00", qty: 2, total: "$138.00" },
  { img: "/assets/img/vegetable-item-3.png", name: "Big Banana",      price: "$69.00", qty: 2, total: "$138.00" },
];

const paymentMethods = [
  { id: "Transfer-1", name: "Transfer",  label: "Direct Bank Transfer",
    description: "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account." },
  { id: "Payments-1", name: "Payments", label: "Check Payments" },
  { id: "Delivery-1", name: "Delivery", label: "Cash On Delivery" },
  { id: "Paypal-1",   name: "Paypal",   label: "Paypal" },
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
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {orderItems.map((item, i) => (
              <tr key={i}>
                <th scope="row">
                  <div className="d-flex align-items-center mt-2">
                    <img
                      src={item.img}
                      className="img-fluid rounded-circle"
                      style={{ width: 90, height: 90 }}
                      alt={item.name}
                    />
                  </div>
                </th>
                <td className="py-5">{item.name}</td>
                <td className="py-5">{item.price}</td>
                <td className="py-5">{item.qty}</td>
                <td className="py-5">{item.total}</td>
              </tr>
            ))}

            {/* Subtotal row */}
            <tr>
              <th scope="row" />
              <td className="py-5" />
              <td className="py-5" />
              <td className="py-5">
                <p className="mb-0 text-dark py-3">Subtotal</p>
              </td>
              <td className="py-5">
                <div className="py-3 border-bottom border-top">
                  <p className="mb-0 text-dark">$414.00</p>
                </div>
              </td>
            </tr>

            {/* Shipping options row */}
            <tr>
              <th scope="row" />
              <td className="py-5">
                <p className="mb-0 text-dark py-4">Shipping</p>
              </td>
              <td colSpan={3} className="py-5">
                {[
                  { id: "Shipping-1", label: "Free Shipping" },
                  { id: "Shipping-2", label: "Flat rate: $15.00" },
                  { id: "Shipping-3", label: "Local Pickup: $8.00" },
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
              <td className="py-5">
                <p className="mb-0 text-dark text-uppercase py-3">TOTAL</p>
              </td>
              <td className="py-5" />
              <td className="py-5" />
              <td className="py-5">
                <div className="py-3 border-bottom border-top">
                  <p className="mb-0 text-dark">$135.00</p>
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
