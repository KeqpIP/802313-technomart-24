  var buyWindow = document.querySelectorAll(".buy");
  var modalBuy = document.querySelector(".added-product");
  var closeBuy = document.querySelector(".close-order");

  for (var i = 0; i < buyWindow.length; i++) {
      buyWindow[i].addEventListener("click", function(evt) {
        evt.preventDefault();
        modalBuy.classList.remove("visually-hidden");
    });
  }

  closeBuy.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalBuy.classList.add("visually-hidden");
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27 ) {
      if (modalBuy.classList.contains("added-product")) {
        evt.preventDefault();
        modalBuy.classList.add("visually-hidden");
      }
    }
  });
