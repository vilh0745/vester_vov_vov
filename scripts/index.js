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
  console.log(i);
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
  console.log(i);
  StartTimer();
}

function prevSlide() {
  console.log("prev");
  console.log(i);
  clearTimeout(myTimer);

  slide.innerHTML = images[i];

  // Check If Index Is Under Max
  if (i > 0) {
    // Add 1 to Index
    i--;
  } else {
    // Reset Back To 3
    i = 2;
  }

  console.log(i);

  StartTimer();
}
