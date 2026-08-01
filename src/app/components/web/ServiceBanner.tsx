const services = [
  {
    img: "featur-1.jpg",
    bgClass: "bg-secondary",
    contentBg: "bg-primary",
    titleClass: "text-white",
    title: "Fresh Apples",
    offer: "20% OFF",
  },
  {
    img: "featur-2.jpg",
    bgClass: "bg-dark",
    contentBg: "bg-light",
    titleClass: "text-primary",
    title: "Tasty Fruits",
    offer: "Free delivery",
  },
  {
    img: "featur-3.jpg",
    bgClass: "bg-primary",
    contentBg: "bg-secondary",
    titleClass: "text-white",
    title: "Exotic Vegetable",
    offer: "Discount 30$",
  },
];

export default function ServiceBanner() {
  return (
    <div className="container-fluid service py-5">
      <div className="container py-5">
        <div className="row g-4 justify-content-center">
          {services.map((s, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <a href="#">
                <div className={`service-item ${s.bgClass} rounded border border-${s.bgClass.replace("bg-", "")}`}>
                  <img src={`/assets/img/${s.img}`} className="img-fluid rounded-top w-100" alt={s.title} />
                  <div className="px-4 rounded-bottom">
                    <div className={`service-content ${s.contentBg} text-center p-4 rounded`}>
                      <h5 className={s.titleClass}>{s.title}</h5>
                      <h3 className="mb-0">{s.offer}</h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
