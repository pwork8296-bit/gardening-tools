"use client";

import Script from "next/script";
import React from "react";

export default function ThemeScript() {
  return (
    <>
      {/* Alpine.js Library */}
      <Script
        src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
        strategy="lazyOnload"
      />

      {/* Theme Init Alpine Script */}
      <Script
        src="/admin/assets/js/init-alpine.js"
        strategy="lazyOnload"
      />

      {/* Chart.js Library */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js"
        strategy="lazyOnload"
      />

      {/* Theme Charts Scripts */}
      <Script
        src="/admin/assets/js/charts-lines.js"
        strategy="lazyOnload"
      />
      <Script
        src="/admin/assets/js/charts-pie.js"
        strategy="lazyOnload"
      />
      <Script
        src="/admin/assets/js/charts-bars.js"
        strategy="lazyOnload"
      />

      {/* Focus Trap Utility */}
      <Script
        src="/admin/assets/js/focus-trap.js"
        strategy="lazyOnload"
      />
    </>
  );
}
