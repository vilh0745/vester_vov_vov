/*const slide = document.querySelector("#dias1");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
  nextBtn.addEventListener("mousedown", nextSlide);
}

function nextSlide() {
  console.log("next");
  
}
*/

window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
}

var i = 0; // Start Point
var images = []; // Images Array
var time = 3000; // Time Between Switch

// Image List
images[0] = "soundofmetalDias.webp";
images[1] = "MinariDias.webp";
images[2] = "MarcoEffekten.webp";

// Change Image
function changeImg() {
  document.slide.src = images[i];

  // Check If Index Is Under Max
  if (i < images.length - 1) {
    // Add 1 to Index
    i++;
  } else {
    // Reset Back To O
    i = 0;
  }

  // Run function every x seconds
  setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload = changeImg;
