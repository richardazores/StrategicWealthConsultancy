(function () {
  "use strict";

  var carousels = function () {
    $(".owl-carousel1").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        600: {
          items: 1,
          nav: false,
        },
        1000: {
          items: 3,
          nav: true,
          loop: false,
        },
      },
    });

    $(".owl-carousel2").owlCarousel({
      loop: true,
      center: false,
      margin: 0,
      responsiveClass: true,
      nav: true,
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        600: {
          items: 2,
          nav: false,
        },
        1000: {
          items: 3,
          nav: true,
          loop: true,
        },
      },
    });
  };

  // svg responsive in mobile mode
  var checkPosition = function () {
    if ($(window).width() < 767) {
      $("#bg-services").attr("viewBox", "0 0 1050 800");
    }
  };

  (function ($) {
    carousels();
    checkPosition();
  })(jQuery);
})();

// menu toggle button
function myFunction(x) {
  x.classList.toggle("change");
}

document.addEventListener("DOMContentLoaded", function () {
  var goTopBtn = document.getElementById("goTopBtn");

  // Show button when scrolled down 100px from the top
  window.onscroll = function () {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      goTopBtn.classList.add("show");
    } else {
      goTopBtn.classList.remove("show");
    }
  };

  // Scroll to the top when the button is clicked
  goTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
