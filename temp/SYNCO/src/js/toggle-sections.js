document.addEventListener("DOMContentLoaded", () => {
  const primarySections = [
    // "section-top",
    "slickcarousel",
    "why-us",
    "expertise",
    "services",
    "genericinfo",
    "aboutus",
    "partners",
    "projects",
    "contact",
    "extras",
  ];

  const buttons = document.querySelectorAll(".btn-transition");
  let savedScrollPosition = 0; // Variable to store scroll position

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const hideIds = button.getAttribute("data-hide").split(",");
      const showIds = button.getAttribute("data-show").split(",");

      // Save scroll position if hiding all sections
      if (hideIds.includes("all")) {
        savedScrollPosition = window.scrollY;
      }

      // Hide specified sections with smooth fade-out
      hideIds.forEach((id) => {
        if (id.trim() === "all") {
          // Hide all primary sections with fade-out effect
          primarySections.forEach((sectionId) => {
            const section = document.getElementById(sectionId);
            if (section) {
              section.classList.remove("visible");
              section.classList.add("hidden");
              section.style.display = "none";
            }
          });
        } else {
          const section = document.getElementById(id.trim());
          if (section) {
            section.classList.remove("visible");
            section.classList.add("hidden");
            section.style.display = "none";
          }
        }
      });

      // Show specified sections with smooth fade-in
      showIds.forEach((id) => {
        if (id.trim() === "all") {
          // Show all primary sections with fade-in effect
          primarySections.forEach((sectionId) => {
            const section = document.getElementById(sectionId);
            if (section && section.classList.contains("hidden")) {
              section.style.display = "block";
              setTimeout(() => {
                section.classList.remove("hidden");
                section.classList.add("visible");
              }, 10);
            }
          });

          // Restore scroll position after showing all sections
          setTimeout(() => {
            window.scrollTo({
              top: savedScrollPosition,
              behavior: "smooth",
            });
          }, 100); // Delay to ensure sections are displayed before restoring position
        } else {
          const section = document.getElementById(id.trim());
          if (section) {
            section.style.display = "block";
            setTimeout(() => {
              section.classList.remove("hidden");
              section.classList.add("visible");
            }, 10);
          }
        }
      });

      // Scroll to the top of the page only for data-hide="all"
      if (hideIds.includes("all")) {
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }, 100); // Ensure new sections are displayed before scrolling
      }
    });
  });

  // Initial state setup for all sections
  document.querySelectorAll("section").forEach((section) => {
    if (!section.classList.contains("visible")) {
      section.classList.add("hidden");
      section.style.display = "none"; // Ensure initially hidden sections don't take space
    }
  });
});
