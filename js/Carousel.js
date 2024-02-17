class Carousel {
  #carouselElement

  constructor() {
    this.carouselElement = document.querySelector("sl-carousel");
  }

  // addCarouselEvent will trigger the function to change the text based on the image shown
  // in the carousel.
  addCarouselEvent() {
    this.carouselElement.addEventListener("sl-slide-change", function (e) {
      let paragraph = document.querySelector(".explorer_text");

      paragraph.innerHTML = explorers[e.detail.index].text;
    });
  }
}
