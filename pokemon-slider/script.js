document.querySelector(".slider__navi").addEventListener("click", function (e) {
  e.preventDefault();

  /* If user clicked outside of 'a' tag return
  otherwise change slide */
  if (e.target.classList.contains("slide-nav")) {
    // Remove active class from current nav element
    const currentNav = document
      .querySelector(".active")
      .classList.remove("active");

    // Clicked nav element + add active class
    let clickedNav = e.target;
    clickedNav.classList.add("active");

    // data-slide value (nav) - number
    const dsValueNav = clickedNav.getAttribute("data-slide");

    // Current slide
    const currentSlide = document.querySelector(".flex--active");

    let nextSlide;

    // Looking for a next slide
    document
      .querySelectorAll(".flex__container")
      .forEach(function (elem, dataSlide) {
        if (elem.getAttribute("data-slide") == dsValueNav) {
          nextSlide = elem;
        }
      }, dsValueNav);

    // Changing active classes
    currentSlide.classList.remove("flex--active");
    currentSlide.classList.add("animate--start");
    nextSlide.classList.add("flex--active");
    nextSlide.classList.remove("animate--start");
  } else return;
});
