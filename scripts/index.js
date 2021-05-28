/*const slide = document.querySelector(".dias_slide");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let i = 0; //Start point for index af slides
let slide = []; //Slides
let myTime; //Tid mellem skift af slides, hvis ikke trykket på

// Dias List
images[0] = `<a href="movie_site.html" id="dias1">
              <img src="img/MinariDias.webp" style="width: 100%" />
              <div class="text">Caption Text</div>
            </a>`;
images[1] = `<a href="movie_site.html" id="dias1">
<img src="img/soundofmetalDias.webp" style="width: 100%" />
<div class="text">Caption Text</div>
</a>`;
images[2] = `<a href="movie_site.html" id="dias1">
<img src="img/MarcoEffektenDias.webp" style="width: 100%" />
<div class="text">Caption Text</div>
</a>`;

window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
  nextBtn.addEventListener("mousedown", nextSlide);
  prevBtn.addEventListener("mousedown", prevSlide);
  StartTimer();
}

function StartTimer() {
  myTime = setTimeout(nextSlide, 6000);
  nextSlide();
}

function nextSlide() {
  console.log("next");
  slide.innerHTML = images[i];

  // Check If Index Is Under Max
  if (i < images.length - 1) {
    // Add 1 to Index
    i++;
  } else {
    // Reset Back To O
    i = 0;
  }

  //reset tid på automatisk slide og begynder funktion igen
  clearTimeout(myTime);
  StartTimer();
}

function prevSlide() {
  console.log("prev");
  plusSlide(-1);
}
*/

/*
let i = 0; // Start Point
let images = []; // Images Array
let time = 5000; // Time Between Switch

const slide = document.querySelector(".dias_slide");

// Image List
images[0] = `<a href="movie_site.html" id="dias1">
              <img src="img/MinariDias.webp" style="width: 100%" />
              <div class="text">Caption Text</div>
            </a>`;
images[1] = `<a href="movie_site.html" id="dias1">
<img src="img/soundofmetalDias.webp" style="width: 100%" />
<div class="text">Caption Text</div>
</a>`;
images[2] = `<a href="movie_site.html" id="dias1">
<img src="img/MarcoEffektenDias.webp" style="width: 100%" />
<div class="text">Caption Text</div>
</a>`;

// Change Image
function changeImg() {
  slide.innerHTML = images[i];

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
*/

let i = 0; // Start Point
let images = []; // Images Array
let myTimer;

const slide = document.querySelector(".dias_slide");
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");

// Image List
images[0] = `<a href="movie_site.html" id="dias1">
              <img src="img/MinariDias.webp" style="width: 100%" />
              <div class="text">Caption Text</div>
            </a>`;
images[1] = `<a href="movie_site.html" id="dias1">
<img src="img/soundofmetalDias.webp" style="width: 100%" />
<div class="text">Caption Text</div>
</a>`;
images[2] = `<a href="movie_site.html" id="dias1">
<img src="img/MarcoEffektenDias.webp" style="width: 100%" />
<div class="text">Caption Text</div>
</a>`;

window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
  changeImg();
  nextBtn.addEventListener("mousedown", nextSlide);
  prevBtn.addEventListener("mousedown", prevSlide);
}

// Change Image
function changeImg() {
  slide.innerHTML = images[i];

  // Check If Index Is Under Max
  if (i < images.length - 1) {
    // Add 1 to Index
    i++;
  } else {
    // Reset Back To O
    i = 0;
  }

  StartTimer();
}

function StartTimer() {
  console.log("startTimer");
  myTimer = setTimeout(changeImg, 5000);
}

function nextSlide() {
  console.log("next");
  clearTimeout(myTimer);

  slide.innerHTML = images[i];

  // Check If Index Is Under Max
  if (i < images.length - 1) {
    // Add 1 to Index
    i++;
  } else {
    // Reset Back To O
    i = 0;
  }

  StartTimer();
}

function prevSlide() {
  console.log("prev");
  clearTimeout(myTimer);

  slide.innerHTML = images[i];

  // Check If Index Is Under Max
  if (i < images.length - 1) {
    // Add 1 to Index
    i--;
  } else {
    // Reset Back To O
    i = 0;
  }

  StartTimer();
}
