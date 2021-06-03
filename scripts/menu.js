// When the user scrolls down 20px from the top of the document, remove the header's logo
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("header").style.display = "none";
  } else {
    document.getElementById("header").style.display = "flex";
  }
}
