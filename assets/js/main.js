(function () {
  "use strict";

  // Easy selector helper
  const select = (el, all = false) => {
    el = el.trim();
    if (all) return [...document.querySelectorAll(el)];
    else return document.querySelector(el);
  };

  // Easy event listener
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) selectEl.forEach((e) => e.addEventListener(type, listener));
      else selectEl.addEventListener(type, listener);
    }
  };

  // Smooth scroll
  const scrollto = (el) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Mobile nav toggle
  on("click", ".mobile-nav-toggle", function () {
    const navbar = select("#navbar");
    navbar.classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  // Nav link click
  on(
    "click",
    "#navbar .nav-link",
    function (e) {
      let section = select(this.hash);
      if (!section) return;

      e.preventDefault();
      const header = select("#header");
      const navbar = select("#navbar");
      const sections = select("section", true);
      const navlinks = select("#navbar .nav-link", true);

      // Remove active from all links
      navlinks.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");

      // Close mobile nav if open
      if (navbar.classList.contains("navbar-mobile")) {
        navbar.classList.remove("navbar-mobile");
        const toggle = select(".mobile-nav-toggle");
        toggle.classList.toggle("bi-list");
        toggle.classList.toggle("bi-x");
      }

      // Home link
      if (this.hash === "#header") {
        header.classList.remove("header-top");
        sections.forEach((s) => s.classList.remove("section-show"));
        scrollto(this.hash);
        return;
      }

      // Other sections: add header-top
      if (!header.classList.contains("header-top")) {
        header.classList.add("header-top");
      }

      // Show the clicked section
      sections.forEach((s) => s.classList.remove("section-show"));
      section.classList.add("section-show");

      scrollto(this.hash);
    },
    true,
  );

  // Activate sections on page load with hash
  window.addEventListener("load", () => {
    if (window.location.hash) {
      const initial_nav = select(window.location.hash);
      if (initial_nav) {
        const header = select("#header");
        const navlinks = select("#navbar .nav-link", true);
        header.classList.add("header-top");

        navlinks.forEach((item) => {
          item.classList.toggle(
            "active",
            item.getAttribute("href") === window.location.hash,
          );
        });

        setTimeout(() => initial_nav.classList.add("section-show"), 350);
        scrollto(window.location.hash);
      }
    }
  });

  // Skills animation
  const skilsContent = select(".skills-content");
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: "80%",
      handler: function () {
        const progress = select(".progress .progress-bar", true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute("aria-valuenow") + "%";
        });
      },
    });
  }

  // Testimonials slider
  new Swiper(".testimonials-slider", {
    speed: 600,
    loop: true,
    autoplay: { delay: 5000, disableOnInteraction: false },
    slidesPerView: "auto",
    pagination: { el: ".swiper-pagination", type: "bullets", clickable: true },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 20 },
      1200: { slidesPerView: 3, spaceBetween: 20 },
    },
  });

  // Portfolio isotope filter
  window.addEventListener("load", () => {
    const portfolioContainer = select(".portfolio-container");
    if (portfolioContainer) {
      const portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: ".portfolio-item",
        layoutMode: "fitRows",
      });
      const portfolioFilters = select("#portfolio-flters li", true);

      on(
        "click",
        "#portfolio-flters li",
        function (e) {
          e.preventDefault();
          portfolioFilters.forEach((el) =>
            el.classList.remove("filter-active"),
          );
          this.classList.add("filter-active");
          portfolioIsotope.arrange({
            filter: this.getAttribute("data-filter"),
          });
        },
        true,
      );
    }
  });

  // Portfolio lightbox
  GLightbox({ selector: ".portfolio-lightbox" });
  GLightbox({
    selector: ".portfolio-details-lightbox",
    width: "90%",
    height: "90vh",
  });

  // Portfolio details slider
  new Swiper(".portfolio-details-slider", {
    speed: 400,
    loop: true,
    autoplay: { delay: 5000, disableOnInteraction: false },
    pagination: { el: ".swiper-pagination", type: "bullets", clickable: true },
  });
})();
