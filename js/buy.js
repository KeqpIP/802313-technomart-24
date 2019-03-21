  var buyWindow = document.querySelectorAll(".buy");
  var modalBuy = document.querySelector(".added-product");
  var closeBuy = document.querySelector(".close-order");
  var cancelBuy = modalBuy.querySelector(".continue-shopping");
  var countBuy = document.querySelector(".cart")
  var counter = countBuy.querySelector(".count");

  for (var i = 0; i < buyWindow.length; i++) {
      buyWindow[i].addEventListener("click", function(evt) {
        evt.preventDefault();
        modalBuy.classList.remove("visually-hidden");
        countBuy.classList.add("filled");
        var count = Number(counter.innerHTML);
        counter.innerHTML = count += 1;
    });
  }

  closeBuy.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalBuy.classList.add("visually-hidden");
  });

  cancelBuy.addEventListener("click", function (evt) {
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
