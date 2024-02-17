

// ice berg run distance is the width of the window plus it's own width
let iceBerg1RunDistance =
  window.innerWidth +
  document.querySelector(".ice_berg").getBoundingClientRect().width;
let iceBerg2RunDistance =
  window.innerWidth +
  document.querySelector(".ice_berg2").getBoundingClientRect().width;

gsap.to(".ice_berg", {
  duration: 160,
  ease: "none",
  x: iceBerg1RunDistance,
  repeat: -1,
});

gsap.to(".ice_berg2", {
  duration: 90,
  ease: "none",
  x: iceBerg2RunDistance,
  repeat: -1,
});

class ObjectManager {
  #geoMap
  #carousel

  constructor() {
    this.geoMap = new GeoMap();
    this.carousel = new Carousel();
    this.carousel.addCarouselEvent();
  }
}

const objManager = new ObjectManager();
