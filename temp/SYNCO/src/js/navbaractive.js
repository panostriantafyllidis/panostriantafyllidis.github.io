// document.addEventListener("DOMContentLoaded", function () {
//   const navLinks = document.querySelectorAll(".rd-navbar-nav .rd-nav-item a");
//   const sections = document.querySelectorAll("section[id]");
//   const primarySections = [
//     "section-top",
//     "slickcarousel",
//     "why-us",
//     "expertise",
//     "services",
//     "genericinfo",
//     "partners",
//     "projects",
//     "contact",
//     "extras",
//   ];

//   // Function to update active class based on scroll
//   function updateActiveLink() {
//     let scrollPosition = window.scrollY + window.innerHeight / 2;

//     sections.forEach((section) => {
//       const sectionTop = section.offsetTop;
//       const sectionBottom = sectionTop + section.offsetHeight;

//       if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
//         navLinks.forEach((link) => {
//           link.classList.remove("active");
//           if (link.getAttribute("href").slice(1) === section.id) {
//             link.classList.add("active");
//           }
//         });
//       }
//     });
//   }

//   // Update active link on scroll
//   window.addEventListener("scroll", updateActiveLink);

//   // Set the first navbar item as active by default
//   if (navLinks.length > 0) {
//     navLinks[0].classList.add("active");
//   }

//   // Add click event listener to navbar links
//   navLinks.forEach((link) => {
//     link.addEventListener("click", (e) => {
//       e.preventDefault(); // Prevent default anchor behavior

//       // Ensure all secondary sections are hidden
//       sections.forEach((section) => {
//         if (!primarySections.includes(section.id)) {
//           section.classList.remove("visible");
//           section.classList.add("hidden");
//           section.style.display = "none";
//         }
//       });

//       // Ensure all primary sections are visible
//       primarySections.forEach((sectionId) => {
//         const section = document.getElementById(sectionId);
//         if (section && section.classList.contains("hidden")) {
//           section.style.display = "block";
//           setTimeout(() => {
//             section.classList.remove("hidden");
//             section.classList.add("visible");
//           }, 10);
//         }
//       });

//       // Navigate to the linked section
//       const targetSectionId = link.getAttribute("href").slice(1);
//       const targetSection = document.getElementById(targetSectionId);
//       if (targetSection) {
//         window.scrollTo({
//           top: targetSection.offsetTop,
//           behavior: "smooth",
//         });
//       }

//       // Update active class
//       navLinks.forEach((link) => link.classList.remove("active"));
//       link.classList.add("active");
//     });
//   });

//   // Initial call to set active link
//   updateActiveLink();
// });
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".rd-navbar-nav .rd-nav-item a");
  const sections = document.querySelectorAll("section[id]");

  // Function to update active class based on scroll
  function updateActiveLink() {
    let scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href").slice(1) === section.id) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  // Update active link on scroll
  window.addEventListener("scroll", updateActiveLink);

  // Set the first navbar item as active by default
  if (navLinks.length > 0) {
    navLinks[0].classList.add("active");
  }

  // Update active link when clicking a navbar item
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      navLinks.forEach((link) => link.classList.remove("active"));
      e.target.classList.add("active");
    });
  });

  // Initial call to set active link
  updateActiveLink();
});
