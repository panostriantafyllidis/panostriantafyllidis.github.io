document.addEventListener("DOMContentLoaded", () => {
  const carouselWrapper = document.querySelector(".carousel-wrapper");
  const slides = document.querySelectorAll(".carousel-slide");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");
  let currentIndex = 0;
  const slideInterval = 5000;
  let autoSlide;

  function startAutoSlide() {
    autoSlide = setInterval(showNextSlide, slideInterval);
  }

  function stopAutoSlide() {
    clearInterval(autoSlide);
  }

  function resetAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
  }

  function updateCarousel() {
    carouselWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  }

  function showPrevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  }

  rightArrow.addEventListener("click", () => {
    showNextSlide();
    resetAutoSlide();
  });

  leftArrow.addEventListener("click", () => {
    showPrevSlide();
    resetAutoSlide();
  });

  // Pause auto-slide on mouse hover including arrows
  const pauseElements = [carouselWrapper, leftArrow, rightArrow];

  pauseElements.forEach((element) => {
    element.addEventListener("mouseenter", stopAutoSlide);
    element.addEventListener("mouseleave", startAutoSlide);
  });

  // Enable touch and swipe functionality for mobile and desktop
  let startX = 0;
  let isDragging = false;

  carouselWrapper.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
    stopAutoSlide();
  });

  carouselWrapper.addEventListener("mousemove", (e) => {
    if (isDragging) {
      const deltaX = e.clientX - startX;
      if (deltaX > 50) {
        showPrevSlide();
        resetAutoSlide();
        isDragging = false;
      } else if (deltaX < -50) {
        showNextSlide();
        resetAutoSlide();
        isDragging = false;
      }
    }
  });

  carouselWrapper.addEventListener("mouseup", () => {
    isDragging = false;
    startAutoSlide();
  });

  carouselWrapper.addEventListener("mouseleave", () => {
    isDragging = false;
  });

  carouselWrapper.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    stopAutoSlide();
  });

  carouselWrapper.addEventListener("touchmove", (e) => {
    const deltaX = e.touches[0].clientX - startX;
    if (deltaX > 50) {
      showPrevSlide();
      resetAutoSlide();
    } else if (deltaX < -50) {
      showNextSlide();
      resetAutoSlide();
    }
  });

  carouselWrapper.addEventListener("touchend", startAutoSlide);

  // Start auto-slide initially
  startAutoSlide();
});
