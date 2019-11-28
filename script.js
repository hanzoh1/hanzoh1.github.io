"use strict";

function textDisplay(dotId, moreId, btnId) {
  var dots = document.getElementById(dotId);
  var moreText = document.getElementById(moreId);
  var btnText = document.getElementById(btnId);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "(Read More)";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "(Undo)";
    moreText.style.display = "inline";
  }
}
