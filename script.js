
var navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.style.right = "0";
}

function hideMenu() {
  navLinks.style.right = "-200px";
}

// scroll to top button JavaScript
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scroll-button").style.display = "block";
  } else {
    document.getElementById("scroll-button").style.display = "none";
  }
}

document.getElementById("scroll-button").addEventListener("click", function () {
  scrollToTop();
});

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

