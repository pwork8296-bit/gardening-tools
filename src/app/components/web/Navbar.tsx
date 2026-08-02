"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isDropdownActive = [
    "/cart",
    "/checkout",
    "/testimonial",
    "/404",
  ].includes(pathname);

  return (
    <>
      {/* Navbar */}
      <div className="container-fluid fixed-top">
        <div className="container topbar bg-primary d-none d-lg-block">
          <div className="d-flex justify-content-between">
            <div className="top-info ps-2">
              <small className="me-3">
                <i className="fas fa-map-marker-alt me-2 text-secondary"></i>
                <a href="#" className="text-white">123 Street, New York</a>
              </small>
              <small className="me-3">
                <i className="fas fa-envelope me-2 text-secondary"></i>
                <a href="#" className="text-white">Email@Example.com</a>
              </small>
            </div>
            <div className="top-link pe-2">
              <a href="#" className="text-white">
                <small className="text-white mx-2">Privacy Policy</small>/
              </a>
              <a href="#" className="text-white">
                <small className="text-white mx-2">Terms of Use</small>/
              </a>
              <a href="#" className="text-white">
                <small className="text-white ms-2">Sales and Refunds</small>
              </a>
            </div>
          </div>
        </div>
        <div className="container px-0">
          <nav className="navbar navbar-light bg-white navbar-expand-xl">
            <Link href="/" className="navbar-brand">
              <h1 className="text-primary display-6">Gardening Tools</h1>
            </Link>
            <button
              className="navbar-toggler py-2 px-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars text-primary"></span>
            </button>
            <div className="navbar-collapse bg-white" id="navbarCollapse">
              <div className="navbar-nav mx-auto">
                <Link
                  href="/"
                  className={`nav-item nav-link${pathname === "/" ? " active" : ""}`}
                >
                  Home
                </Link>
                <Link
                  href="/shop"
                  className={`nav-item nav-link${pathname === "/shop" ? " active" : ""}`}
                >
                  Shop
                </Link>
                <Link
                  href="/shop-detail"
                  className={`nav-item nav-link${pathname === "/shop-detail" ? " active" : ""}`}
                >
                  Shop Detail
                </Link>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className={`nav-link dropdown-toggle${isDropdownActive ? " active" : ""}`}
                    data-bs-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu m-0 bg-secondary rounded-0">
                    <Link
                      href="/cart"
                      className={`dropdown-item${pathname === "/cart" ? " active" : ""}`}
                    >
                      Cart
                    </Link>
                    <Link
                      href="/checkout"
                      className={`dropdown-item${pathname === "/checkout" ? " active" : ""}`}
                    >
                      Checkout
                    </Link>
                    <Link
                      href="/testimonial"
                      className={`dropdown-item${pathname === "/testimonial" ? " active" : ""}`}
                    >
                      Testimonial
                    </Link>
                    <Link
                      href="/404"
                      className={`dropdown-item${pathname === "/404" ? " active" : ""}`}
                    >
                      404 Page
                    </Link>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className={`nav-item nav-link${pathname === "/contact" ? " active" : ""}`}
                >
                  Contact
                </Link>
              </div>
              <div className="d-flex m-3 me-0">
                <button
                  className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4"
                  data-bs-toggle="modal"
                  data-bs-target="#searchModal"
                >
                  <i className="fas fa-search text-primary"></i>
                </button>
                <a href="#" className="position-relative me-4 my-auto">
                  <i className="fa fa-shopping-bag fa-2x"></i>
                  <span
                    className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
                    style={{ top: "-5px", left: "15px", height: "20px", minWidth: "20px" }}
                  >
                    3
                  </span>
                </a>
                <a href="#" className="my-auto">
                  <i className="fas fa-user fa-2x"></i>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Search Modal */}
      <div className="modal fade" id="searchModal" tabIndex={-1} aria-labelledby="searchModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h5 className="modal-title" id="searchModalLabel">Search by keyword</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex align-items-center">
              <div className="input-group w-75 mx-auto d-flex">
                <input type="search" className="form-control p-3" placeholder="keywords" aria-describedby="search-icon-1" />
                <span id="search-icon-1" className="input-group-text p-3">
                  <i className="fa fa-search"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
