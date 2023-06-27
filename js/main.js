// Reemplaza el código JavaScript existente con el siguiente código

document.addEventListener("DOMContentLoaded", function() {
  var enlaces = document.querySelectorAll(".menu li a");

  enlaces.forEach(function(enlace) {
    enlace.addEventListener("click", function(event) {
      event.preventDefault();

      enlaces.forEach(function(enlace) {
        enlace.classList.remove("clicked");
      });

      this.classList.add("clicked");

      var target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
});
