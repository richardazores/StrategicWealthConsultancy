

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
