import type { Metadata } from "next";
import Script from "next/script";
import Spinner from "../components/web/Spinner";
import Navbar from "../components/web/Navbar";
import Footer from "../components/web/Footer";
import TemplateScript from "../components/web/TemplateScript";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../web.css";
import PluginReload from "../components/web/PluginReload";

export const metadata: Metadata = {
  title: "Gardening Tools - Fresh Organic Produce",
  description: "Shop fresh organic vegetables, fruits and gardening tools online.",
};

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Bootstrap CSS — from /assets/css/bootstrap.min.css (public folder) */}
      <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
      {/* Font Awesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />
      {/* Bootstrap Icons */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
      />
      {/* Owl Carousel */}
      <link rel="stylesheet" href="/assets/lib/owlcarousel/assets/owl.carousel.min.css" />
      {/* Lightbox */}
      <link rel="stylesheet" href="/assets/lib/lightbox/css/lightbox.min.css" />
      {/* Template CSS */}
      <link rel="stylesheet" href="/assets/css/style.css" />

      {/* Page Loader */}
      <Spinner />

      {/* Navigation */}
      <Navbar />

      {/* Page Content */}
      <main>{children}</main>

      {/* Footer */}
      <Footer />

      {/* Back to Top */}
      <a href="#" className="btn btn-primary border-3 border-primary rounded-circle back-to-top">
        <i className="fa fa-arrow-up"></i>
      </a>

      {/* jQuery */}
      <Script
        id="jquery"
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js"
        strategy="afterInteractive"
      />
      {/* Bootstrap JS — from public/ (copied from node_modules) */}
      <Script
        id="bootstrap-js"
        src="/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />
      {/* Easing */}
      <Script id="easing" src="/assets/lib/easing/easing.min.js" strategy="afterInteractive" />
      {/* Waypoints */}
      <Script id="waypoints" src="/assets/lib/waypoints/waypoints.min.js" strategy="afterInteractive" />
      {/* Lightbox JS */}
      <Script id="lightbox" src="/assets/lib/lightbox/js/lightbox.min.js" strategy="afterInteractive" />
      {/* Owl Carousel JS */}
      <Script id="owl-carousel" src="/assets/lib/owlcarousel/owl.carousel.min.js" strategy="afterInteractive" />
      {/* main.js effects via useEffect — no separate script file needed */}
      {/* <TemplateScript /> */}
      <PluginReload />
    </>
  );
}
