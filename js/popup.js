  var link = document.querySelector(".feedback-link");
  var popup = document.querySelector(".feedback");
  var close = document.querySelector(".close");

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("visually-hidden");
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("visually-hidden");
  });
