"use strict";

// Når HTML og CSS er loaded startes sidenVises
window.addEventListener("load", sidenVises);

// Når #burger_btn er "clicked" startes openMenu
function sidenVises() {
  const burgerBtn = document.querySelector("#burger_btn");
  burgerBtn.addEventListener("click", openMenu);
}

// .open addes på både #burger_btn og #menu
function openMenu() {
  const burgerBtn = this;
  const menu = document.querySelector("#menu");

  burgerBtn.removeEventListener("click", openMenu);
  burgerBtn.classList.add("open");
  menu.classList.add("open");

  burgerBtn.addEventListener("click", closeMenu);
}

// .open removes på både #burger_btn og #menu
function closeMenu() {
  const burgerBtn = this;
  const menu = document.querySelector("#menu");

  burgerBtn.removeEventListener("click", closeMenu);
  burgerBtn.classList.remove("open");
  menu.classList.remove("open");

  burgerBtn.addEventListener("click", openMenu);
}
