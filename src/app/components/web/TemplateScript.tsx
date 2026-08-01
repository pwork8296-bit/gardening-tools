"use client";

import { useEffect } from "react";

/**
 * TemplateScript
 *
 * Implements all effects from main.js using useEffect + vanilla JS.
 * Owl Carousel sections poll for jQuery/owlCarousel availability since
 * those are loaded asynchronously via <Script> tags in layout.tsx.
 *
 * Effects ported from main.js:
 *  1. Spinner      — removes .show from #spinner
 *  2. Fixed Navbar — shadow + top offset on scroll
 *  3. Back to Top  — fade in/out + smooth scroll on click
 *  4. Testimonial Carousel — owlCarousel init (.testimonial-carousel)
 *  5. Vegetable Carousel   — owlCarousel init (.vegetable-carousel)
 *  6. Modal Video  — Bootstrap modal show/hide handlers
 *  8. Navbar Collapse — toggler button + close-on-outside-click + desktop expand
 */
export default function TemplateScript() {
  useEffect(() => {

    // ── 1. Spinner ─────────────────────────────────────────────────────────
    setTimeout(() => {
      const spinner = document.getElementById("spinner");
      if (spinner) spinner.classList.remove("show");
    }, 1);


    // ── 2. Fixed Navbar ────────────────────────────────────────────────────
    const handleNavbarScroll = () => {
      const fixedTop = document.querySelector<HTMLElement>(".fixed-top");
      if (!fixedTop) return;
      const scrollY = window.scrollY;
      const isNarrow = window.innerWidth < 992;

      if (scrollY > 55) {
        fixedTop.classList.add("shadow");
        if (!isNarrow) fixedTop.style.top = "-55px";
      } else {
        fixedTop.classList.remove("shadow");
        if (!isNarrow) fixedTop.style.top = "0";
      }
    };
    window.addEventListener("scroll", handleNavbarScroll);


    // ── 3. Navbar Collapse ─────────────────────────────────────────────────
    // Bootstrap adds 'collapse' class which hides #navbarCollapse by default.
    // We replicate Bootstrap's collapse toggle with vanilla JS as a fallback
    // in case Bootstrap JS hasn't initialised yet.
    const navbarCollapse = document.getElementById("navbarCollapse");
    const toggler = document.querySelector<HTMLElement>(".navbar-toggler");

    // On desktop (navbar-expand-xl = ≥1200px), always show the collapse
    const applyDesktopState = () => {
      if (!navbarCollapse) return;
      if (window.innerWidth >= 1200) {
        navbarCollapse.classList.add("show");
      } else if (!navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show");
      }
    };
    applyDesktopState();
    window.addEventListener("resize", applyDesktopState);

    // Toggler button: toggle 'show' on #navbarCollapse
    const onTogglerClick = () => {
      navbarCollapse?.classList.toggle("show");
    };
    toggler?.addEventListener("click", onTogglerClick);

    // Close menu when clicking outside on mobile
    const onOutsideClick = (e: MouseEvent) => {
      if (window.innerWidth >= 1200) return;
      const target = e.target as Node;
      if (
        navbarCollapse?.classList.contains("show") &&
        !navbarCollapse.contains(target) &&
        !toggler?.contains(target)
      ) {
        navbarCollapse.classList.remove("show");
      }
    };
    document.addEventListener("click", onOutsideClick);


    // ── 3. Back to Top ─────────────────────────────────────────────────────
    const backToTop = document.querySelector<HTMLElement>(".back-to-top");

    const handleBackToTopScroll = () => {
      if (!backToTop) return;
      if (window.scrollY > 300) {
        backToTop.style.display = "flex";
      } else {
        backToTop.style.display = "none";
      }
    };
    window.addEventListener("scroll", handleBackToTopScroll);

    const handleBackToTopClick = (e: Event) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    backToTop?.addEventListener("click", handleBackToTopClick);


    // ── 4 & 5. Owl Carousels ───────────────────────────────────────────────
    // jQuery + owlCarousel load asynchronously via <Script> tags in layout.
    // Poll until both are available, then initialise.
    const initCarousels = () => {
      const $ = (window as any).jQuery;
      if (!$ || !$.fn?.owlCarousel) return false;

      $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav: true,
        navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
        responsiveClass: true,
        responsive: {
          0: { items: 1 },
          576: { items: 1 },
          768: { items: 1 },
          992: { items: 2 },
          1200: { items: 2 },
        },
      });

      $(".vegetable-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav: true,
        navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
        responsiveClass: true,
        responsive: {
          0: { items: 1 },
          576: { items: 1 },
          768: { items: 2 },
          992: { items: 3 },
          1200: { items: 4 },
        },
      });

      return true;
    };

    // Try immediately; if not ready, poll every 100ms (max 50 attempts = 5s)
    if (!initCarousels()) {
      let attempts = 0;
      const interval = setInterval(() => {
        attempts++;
        if (initCarousels() || attempts >= 50) clearInterval(interval);
      }, 100);
    }


    // ── 6. Modal Video ─────────────────────────────────────────────────────
    let videoSrc = "";

    const playBtns = document.querySelectorAll<HTMLElement>(".btn-play");
    const onPlayClick = (e: Event) => {
      videoSrc = (e.currentTarget as HTMLElement).dataset.src ?? "";
    };
    playBtns.forEach((btn) => btn.addEventListener("click", onPlayClick));

    const videoModal = document.getElementById("videoModal");
    const videoEl = document.getElementById("video") as HTMLIFrameElement | null;

    const onModalShow = () => {
      if (videoEl) videoEl.src = `${videoSrc}?autoplay=1&modestbranding=1&showinfo=0`;
    };
    const onModalHide = () => {
      if (videoEl) videoEl.src = videoSrc;
    };
    videoModal?.addEventListener("shown.bs.modal", onModalShow);
    videoModal?.addEventListener("hide.bs.modal", onModalHide);


    // ── 7. Product Quantity ────────────────────────────────────────────────
    const quantityBtns = document.querySelectorAll<HTMLButtonElement>(".quantity button");

    const onQuantityClick = (e: Event) => {
      const btn = e.currentTarget as HTMLButtonElement;
      const inputEl = btn.closest(".quantity")?.querySelector<HTMLInputElement>("input");
      if (!inputEl) return;
      const oldVal = parseFloat(inputEl.value) || 0;
      inputEl.value = String(
        btn.classList.contains("btn-plus") ? oldVal + 1 : Math.max(0, oldVal - 1)
      );
    };
    quantityBtns.forEach((btn) => btn.addEventListener("click", onQuantityClick));


    // ── Cleanup ────────────────────────────────────────────────────────────
    return () => {
      window.removeEventListener("scroll", handleNavbarScroll);
      window.removeEventListener("scroll", handleBackToTopScroll);
      backToTop?.removeEventListener("click", handleBackToTopClick);
      playBtns.forEach((btn) => btn.removeEventListener("click", onPlayClick));
      videoModal?.removeEventListener("shown.bs.modal", onModalShow);
      videoModal?.removeEventListener("hide.bs.modal", onModalHide);
      quantityBtns.forEach((btn) => btn.removeEventListener("click", onQuantityClick));
      window.removeEventListener("resize", applyDesktopState);
      toggler?.removeEventListener("click", onTogglerClick);
      document.removeEventListener("click", onOutsideClick);
    };
  }, []);

  return null;
}
