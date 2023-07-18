"use strict";

const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close");
const transparentEl = document.querySelector(".transparent");

const navList = document.querySelector(".nav-wrapper");

hamburger.addEventListener("click", function () {
  navList.classList.toggle("active");
  transparentEl.classList.toggle("show");
});

closeIcon.addEventListener("click", function () {
  navList.classList.toggle("active");
  transparentEl.classList.toggle("show");
});
