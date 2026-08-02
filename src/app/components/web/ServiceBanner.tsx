const services = [
  {
    img: "dracaena.jpg",
    bgClass: "bg-secondary",
    contentBg: "bg-primary",
    titleClass: "text-white",
    title: "Air Purifying Plants",
    offer: "20% OFF",
  },
  {
    img: "vermicompost.jpg",
    bgClass: "bg-dark",
    contentBg: "bg-light",
    titleClass: "text-primary",
    title: "Organic Vermicompost",
    offer: "Special Offer",
  },
  {
    img: "elaichi.jpg",
    bgClass: "bg-primary",
    contentBg: "bg-secondary",
    titleClass: "text-white",
    title: "Medicinal Herbs",
    offer: "Flat ₹50 OFF",
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
                  <img src={`/assets/img/plants/${s.img}`} className="img-fluid rounded-top w-100" style={{ height: "220px", objectFit: "cover" }} alt={s.title} />
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
