  var map = document.querySelector(".map-link");
  var modalMap = document.querySelector(".modal-map");
  var closeMap = document.querySelector(".close-map");

  map.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.remove("visually-hidden");
  });

  closeMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.add("visually-hidden");
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27 ) {
      if (modalMap.classList.contains("modal-map")) {
        evt.preventDefault();
        modalMap.classList.add("visually-hidden");
      }
    }
  });
