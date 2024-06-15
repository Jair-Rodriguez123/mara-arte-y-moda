// Smooth scrolling para los enlaces del navbar
$(document).ready(function() {
  // Agregar smooth scrolling a todos los enlaces dentro del navbar
  $(".navbar-nav a").on('click', function(event) {
      if (this.hash !== "") {
          event.preventDefault();

          var hash = this.hash;

          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 800, function(){
              window.location.hash = hash;
          });
      }
  });

  // Cambiar contenido principal al hacer clic en los enlaces del navbar
  $(".navbar-nav a.nav-link").on('click', function() {
      var target = $(this).attr("href");

      // Ocultar todos los elementos jumbotron
      $(".jumbotron").hide();

      // Mostrar el jumbotron correspondiente al enlace clickeado
      $(target).fadeIn(1000);
  });
});

