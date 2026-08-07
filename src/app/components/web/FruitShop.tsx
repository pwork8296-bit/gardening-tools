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
  { img: "IMG_20210220_173942_670-1.jpg", category: "Socket Sets", name: "108-Piece Professional Socket & Ratchet Tool Set", price: "₹4,500.00", tab: ["all", "sockets"] },
  { img: "srunv-set-of-32-pcs-heavy-duty-vanadium-metal-smart-32-wallvilla-original-imah3ujbzsvp6zza.webp", category: "Socket Sets", name: "32-Piece Heavy Duty Socket & Ratchet Wrench Set", price: "₹1,724.00", tab: ["all", "sockets"] },
  { img: "3pcs-gardening-scissors-pruner-and-mini-folding-hand-saw-alloy-steel-construction-b0fkbf9534-1000x1000.webp", category: "Tool Kits", name: "AGT 3-Piece Gardening Tool Set with Pruner & Saw", price: "₹800.00", tab: ["all", "kits"] },
  { img: "ChatGPTImageJan9_2026_05_24_30PM.png", category: "Spray Guns", name: "AGT Car Washing Gun Adjustable Spray Nozzle", price: "₹599.00", tab: ["all", "spray"] },
  { img: "WhatsAppImage2025-12-04at11.05.43.jpg", category: "Cutters & Pruners", name: "AGT Folding Hand Saw Pruner Tree Branch Cutter", price: "₹420.00", tab: ["all", "cutters"] },
  { img: "WhatsAppImage2025-12-05at18.45.12.jpg", category: "Cutters & Pruners", name: "AGT Garden 3 Cutter Tool Set | Plant Pruning Scissor", price: "₹1,349.00", tab: ["all", "cutters"] },
  { img: "WhatsAppImage2025-12-04at12.54.20.jpg", category: "Tool Kits", name: "AGT Garden Tool Kit | Heavy-Duty Pruning Scissor & Gloves", price: "₹550.00", tab: ["all", "kits"] },
  { img: "WhatsAppImage2026-01-09at12.23.54.jpg", category: "Spray Guns", name: "AGT Heavy Duty Brass Water Spray Gun for Car & Garden", price: "₹499.50", tab: ["all", "spray"] },
  { img: "ChatGPTImageJan9_2026_02_47_46PM_a2acc59d-a2a5-4991-9780-e7ebca023020.png", category: "Cutters & Pruners", name: "AGT Heavy Duty Gardening Axe 400g – Fibreglass Handle", price: "₹799.00", tab: ["all", "cutters"] },
  { img: "41bBiubDuCL._SL1080.jpg", category: "Cutters & Pruners", name: "AGT Heavy Duty Hedge Shears 29 Inch for Garden Trimming", price: "₹999.00", tab: ["all", "cutters"] },
  { img: "03_9bad78c5-c6a4-4aa0-af94-6b2f456da850.jpg", category: "Watering Cans", name: "AGT® 5 Litre Green Plastic Long Spout Watering Can", price: "₹359.00", tab: ["all", "spray"] },
  { img: "01_13c53828-22eb-42a8-b023-fff4c95e8c00.jpg", category: "Tool Kits", name: "AGT® Gardening Tool Combo – Pruning Shear & Hand Weeder", price: "₹620.00", tab: ["all", "kits"] },
];

const tabs = [
  { id: "all",     label: "All Tools" },
  { id: "kits",    label: "Tool Kits" },
  { id: "cutters", label: "Cutters & Pruners" },
  { id: "spray",   label: "Spray Guns & Cans" },
  { id: "sockets", label: "Socket Wrench Sets" },
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
              <h1>Our Tool Collection</h1>
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
                      <span className={activeTab === t.id ? "text-white" : "text-dark"} style={{ width: "140px" }}>
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
                          src={`/assets/img/agttools/${p.img}`}
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
                        <h4 className="text-truncate" title={p.name}>{p.name}</h4>
                        <p className="text-truncate">Durable high-grade alloy steel construction for home &amp; professional use.</p>
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
