// Google Analytics GA4 Script
(function () {
  var script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX";
  document.head.appendChild(script);

  script.onload = function () {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-XXXXXXXXXX");
  };
})();

// Button Click Event Tracking
document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector('.btn[data-key="locationbutton"]')
    .addEventListener("click", function () {
      gtag("event", "click", {
        event_category: "Button",
        event_label: "Location Button Click",
        value: 1,
      });
    });
});
