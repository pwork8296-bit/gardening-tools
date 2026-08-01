const features = [
  {
    icon: "fas fa-car-side",
    title: "Free Shipping",
    desc: "Free on order over $300",
  },
  {
    icon: "fas fa-user-shield",
    title: "Security Payment",
    desc: "100% security payment",
  },
  {
    icon: "fas fa-exchange-alt",
    title: "30 Day Return",
    desc: "30 day money guarantee",
  },
  {
    icon: "fa fa-phone-alt",
    title: "24/7 Support",
    desc: "Support every time fast",
  },
];

export default function Features() {
  return (
    <div className="container-fluid featurs py-5">
      <div className="container py-5">
        <div className="row g-4">
          {features.map((f, i) => (
            <div className="col-md-6 col-lg-3" key={i}>
              <div className="featurs-item text-center rounded bg-light p-4">
                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                  <i className={`${f.icon} fa-3x text-white`}></i>
                </div>
                <div className="featurs-content text-center">
                  <h5>{f.title}</h5>
                  <p className="mb-0">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
