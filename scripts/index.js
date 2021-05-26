const slide = document.querySelector("#dias1");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
  nextBtn.addEventListener("mousedown", nextSlide);
}

function nextSlide() {
  console.log("virker");
}
