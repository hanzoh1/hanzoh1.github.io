"use strict";

function textDisplay(id) {
  var dots = document.getElementById("dot");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById(id);
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "(Read More)";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "(Undo)";
    moreText.style.display = "inline";
  }
  