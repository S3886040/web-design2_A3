// fullpage js controller
new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  anchors: ["Home", "Geography", "Inhabitants", "Explorers", "Climatechange"],
  onLeave: function (origin, destination, direction, trigger) {
    // sets underline on nav bar
    currentPage = destination.anchor;
    setCurrentPage();
    if (destination.anchor == "Geography") {
      runAnimationsGeo();
    }
  },
  scrollOverflow: true,
});

// Gallery Instantiation interaction
lightGallery(document.getElementById("animated-thumbnails-gallery"), {
  thumbnail: true,
  plugins: [lgThumbnail],
});

// Accesses and initiates Geography section animations
function runAnimationsGeo() {
  let map = document.querySelector(".map_container");
  let rossIceShelf = document.querySelector(".ross_ice_shelf");
  let dronningMaudLand = document.querySelector(".dronning_maud_land");
  let southPole = document.querySelector(".south_pole");
  let ellsworthLand = document.querySelector(".ellsworth_land");
  let princessElizabethLand = document.querySelector(
    ".princess_elizabeth_land"
  );

  map.classList.add("animate__animated", "animate__bounceInUp");
  rossIceShelf.classList.add("animate__animated", "animate__bounceInDown");
  dronningMaudLand.classList.add("animate__animated", "animate__bounceInDown");
  southPole.classList.add("animate__animated", "animate__bounceInDown");
  ellsworthLand.classList.add("animate__animated", "animate__bounceInDown");
  princessElizabethLand.classList.add(
    "animate__animated",
    "animate__bounceInDown"
  );
}
