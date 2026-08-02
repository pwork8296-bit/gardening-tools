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
  { img: "fruite-item-5.jpg", category: "Fruits", name: "Grapes",      price: "$4.99 / kg", tab: ["all", "fruits"] },
  { img: "fruite-item-2.jpg", category: "Fruits", name: "Raspberries", price: "$4.99 / kg", tab: ["all", "meat"] },
  { img: "fruite-item-3.jpg", category: "Fruits", name: "Banana",      price: "$4.99 / kg", tab: ["all", "meat"] },
  { img: "fruite-item-4.jpg", category: "Fruits", name: "Apricots",    price: "$4.99 / kg", tab: ["all", "bread"] },
  { img: "fruite-item-1.jpg", category: "Fruits", name: "Oranges",     price: "$4.99 / kg", tab: ["all", "fruits"] },
  { img: "fruite-item-6.jpg", category: "Fruits", name: "Apple",       price: "$4.99 / kg", tab: ["all", "fruits"] },
  { img: "fruite-item-2.jpg", category: "Fruits", name: "Raspberries", price: "$4.99 / kg", tab: ["all", "vegetables"] },
  { img: "fruite-item-5.jpg", category: "Fruits", name: "Grapes",      price: "$4.99 / kg", tab: ["all", "vegetables"] },
];

const tabs = [
  { id: "all",        label: "All Products" },
  { id: "vegetables", label: "Vegetables"   },
  { id: "fruits",     label: "Fruits"       },
  { id: "bread",      label: "Bread"        },
  { id: "meat",       label: "Meat"         },
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
              <h1>Our Organic Products</h1>
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
                      <div className="fruite-img">
                        <img
                          src={`/assets/img/${p.img}`}
                          className="img-fluid w-100 rounded-top"
                          alt={p.name}
                        />
                      </div>
                      <div
                        className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                        style={{ top: "10px", left: "10px" }}
                      >
                        {p.category}
                      </div>
                      <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                        <h4>{p.name}</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
                        <div className="d-flex justify-content-between flex-lg-wrap">
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
