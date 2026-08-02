"use client";
import { useState } from "react";

interface Product {
  img: string;
  category: string;
  name: string;
  price: string;
  tab: string[];
}

const products: Product[] = [
  { img: "dracaena.jpg", category: "Indoor Plants", name: "Dracaena Compacta Indoor Plant", price: "₹299", tab: ["all", "indoor"] },
  { img: "elaichi.jpg", category: "Medicinal & Herbs", name: "Elaichi Plant (Cardamom)", price: "₹199", tab: ["all", "medicinal"] },
  { img: "plant-1.jpg", category: "Medicinal & Herbs", name: "Rama Tulsi Plant in Pot", price: "₹149", tab: ["all", "medicinal"] },
  { img: "plant-2.jpg", category: "Indoor Plants", name: "Jade Plant (Good Luck)", price: "₹199", tab: ["all", "indoor"] },
  { img: "vermicompost.jpg", category: "Pots & Soil", name: "1 Kg Organic Vermicompost", price: "₹99", tab: ["all", "pots"] },
  { img: "plant-3.jpg", category: "Flowering Plants", name: "Hibiscus Plant (Bonsai)", price: "₹249", tab: ["all", "flowering"] },
  { img: "plant-4.jpg", category: "Indoor Plants", name: "Lucky Bamboo Plant", price: "₹179", tab: ["all", "indoor"] },
  { img: "plant-5.jpg", category: "Flowering Plants", name: "Cineraria Winter Flower", price: "₹199", tab: ["all", "flowering"] },
];

const tabs = [
  { id: "all",        label: "All Plants"       },
  { id: "indoor",     label: "Indoor Plants"    },
  { id: "flowering",  label: "Flowering Plants" },
  { id: "medicinal",  label: "Medicinal & Herbs"},
  { id: "pots",       label: "Pots & Soil"      },
];

export default function FruitShop() {
  const [activeTab, setActiveTab] = useState("all");
  const filtered = products.filter((p) => p.tab.includes(activeTab));

  return (
    <div className="container-fluid fruite py-5">
      <div className="container py-5">
        <div className="tab-class text-center">
          {/* Header Row */}
          <div className="row g-4">
            <div className="col-lg-4 text-start">
              <h1>Our Plant Collection</h1>
            </div>
            <div className="col-lg-8 text-end">
              <ul className="nav nav-pills d-inline-flex text-center mb-5">
                {tabs.map((t) => (
                  <li className="nav-item" key={t.id}>
                    <a
                      href="#"
                      className={`d-flex m-2 py-2 bg-light rounded-pill${activeTab === t.id ? " active" : ""}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveTab(t.id);
                      }}
                    >
                      <span className={activeTab === t.id ? "text-white" : "text-dark"} style={{ width: "130px" }}>
                        {t.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Products Grid */}
          <div className="tab-content">
            <div className="tab-pane fade show p-0 active">
              <div className="row g-4">
                {filtered.map((p, i) => (
                  <div className="col-md-6 col-lg-4 col-xl-3" key={i}>
                    <div className="rounded position-relative fruite-item">
                      <div className="fruite-img" style={{ height: "240px", overflow: "hidden" }}>
                        <img
                          src={`/assets/img/plants/${p.img}`}
                          className="img-fluid w-100 h-100 rounded-top"
                          style={{ objectFit: "cover" }}
                          alt={p.name}
                        />
                      </div>
                      <div
                        className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                        style={{ top: "10px", left: "10px" }}
                      >
                        {p.category}
                      </div>
                      <div className="p-4 border border-secondary border-top-0 rounded-bottom text-start">
                        <h4>{p.name}</h4>
                        <p>Fresh nursery plant carefully grown & delivered in Delhi NCR.</p>
                        <div className="d-flex justify-content-between flex-lg-wrap align-items-center">
                          <p className="text-dark fs-5 fw-bold mb-0">{p.price}</p>
                          <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary">
                            <i className="fa fa-shopping-bag me-2 text-primary"></i>Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
