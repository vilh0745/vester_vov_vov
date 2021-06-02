// When the user scrolls down 50px from the top of the document, remove the header's logo
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    document.getElementById("header").style.display = "none";
  } else {
    document.getElementById("header").style.display = "flex";
  }
}